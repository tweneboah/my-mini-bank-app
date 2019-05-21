const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const key = require('../config/keys')


//======MODEL CLASS====================
 //Requiring model class
 const User = mongoose.model('users')
 //=========END MODEL CLASS

 //========Registrating the type of strategy=======
passport.use( new GoogleStrategy({
    clientID: key.GoogleClientID,
    clientSecret: key.googleClientSecret,
    callbackURL: '/auth/google/callback' 
 }, async (accessToken, refreshToken, profile, done) => {
   

     //CHECK IF USER EXIST BEFORE SAVING
  const existingUser = await User.findOne({googleId: profile.id})
     
      if(existingUser){
      
        done(null, existingUser)
        
      }else {
        //Saving the new user
     const user =   await new User({ googleId: profile.id }).save()
         done(null, user)
      }
     

   console.log(profile)
 }))