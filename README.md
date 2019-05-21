## DESCRIPTION
This is a mini project for keeping records of income and expenses of customers. React and redux for client side and node js, express and mongoDB for backend.
Click for update [https://my-mini-bank-app.herokuapp.com/]

# NOTE:
To prevent deployment errors to heroku create your folder for the server side and push it to heroku before creating git repo to house both server and client side

# PROCEDURES

### A- Creating a sever for the backend
1. Always create your client side (React) inside the backend folder (server)
 After creating the server folder follow these steps

 *  npm init -y
 * npm install --save express 
 * npm install --save mongoose
 * npm install --save body-parser
 * npm install --save cookie-session
 * npm install --save passport
 * npm install --save passport
 * npm install --save passport-google-oauth20 
 * npm install --save nodemon
 
 ```javascript
 const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({name: 'emmanuel'})
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`)
})
 ```
 ## B - Creating folders and files
 These are the common folders
 * src
 * models
 * services
 * routes and others
 
  ## C - Deployment - Heroku
  ## Deployment steps
  ### 1. Dynamic port Binding
  ```javascript
  
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`)
})
  ```
  ### 2. Specific node environment
         Inside the package.json file add the engines thus the version of your node and npm
         ```javascript
           "engines": {
                  "node": "v10.15.1",
                  "npm": "6.9.0"
                   },
         ```
  ### 3. specify start script
    Inside the package.json file under script add the starting file heroku should run
    ```javascript
    "scripts": {
    "start": "node index.js",
    "server": "nodemon index.js",
             },
    ```
  
  #### 4. Create .gitignore file
        node_modules/
        
  #### 5. initialise, add and commit your files to git
  
  #### 6. install Heroku CLI
  
  #### 7. heroku login
  
  #### 8. heroku create
  
  #### 9. git remote add heroku https://git.heroku.com/sheltered-beach-72948.git
  
  #### 10. git push heroku master
  
  #### 11. Run this to rename your app  heroku apps:rename my_new_app_name
  
  #### 13. heroku open
  
  ## D- Creating a client side using react
     run this create-react-app client inside server folder
     
  ## E- Runing client side react app from server side 
  1. Install concurrently, inside the server folder and configure the package.json file and run npm run dev
  
   ```javascript
     "scripts": {
    "start": "node index.js",
    "server": "nodemon index.js",
    "client": "npm run start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\" "
  },
   ```
  ## Authentication using OAuth20
  
  ## OVERVIEW
  
  ### Client   ----->   Server ------ Google

When a user click on a link sign in with Google, It will direct that person to our server with a custome route we have defined on our sever localhost:5000/auth/google and then our server will automatically gives that person an ID.Then will inform Google a client with this ID want sign up with his account and the route the client will use to go to google server is like this google.com/auth?appid=123. 
  
When google see this ID then google send that client a permission to agree, when the client agrees then google will direct that client back to our sever with a URL we defined when creating a project in google to get Client Secrete and Client Id.

The User will come back to our server with a code like this localhost:5000/auth/callback?code=456. Then we will put that user with that Code on hold and we will go back and confirm from google that, hey are sure this person has granted permission from you? When google confirm then we take that code to exchange for the user's details
  
 
 ## Passport Library Components
 * For us to go through some of these process by ourself, it will be very tideos that's passport comes in.
 
 ## PASSPORT:
 General helpers for handling authentication in Express apps
 
 ## PASSPORT STRATEGY:
 Helpers for authenticating witha one very specific method (email/password, google, facebook)
  
  ## CODE DEMO
  
  * Create a project in google to get client ID and Client Secrete [http://console.developers.google.com]
  * Install passport-google-oauth20
  * Install passport
  
  * Require:
  ```javascript
  const passport = require('passport');
  const GoogleStrategy = require('passport-google-oauth20').Strategy;
  ```
  ## Registering Google Strategy in our app
  * We are tellig our app the type of auhentication by passing in some configurations
  * We will pass in our client ID and Client secrete from google
  
  ```javascrip
 passport.use(new GoogleStrategy({
    clientID: keys.GoogleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'

  }, (accessToken, refreshToken, profile, done) => {
    console.log(profile)
}))
  ```
  * This functions accept two arguments thus clientID, clientSecret, callbackURL and a callback function 
  * The values we pass in the callback functions are the values we want from that user
  * Before we can get that data unless we start the authentication flow so we will create a route that when a user click it will start the authentication flow
  
  ## Route to start authentication flow
  ```javascript
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))
  ```
  * This routes means that we want authentication type from passport as google and when the user grant permission goole will give us the user's profile and Email
  
 ## Routes to take code from google and send it back to google forus to get the user's data / Passport taking code for data from google
 ```javascript
 app.get('/auth/google/callback', passport.authenticate('google'))
 ```
 * Without this route we cannot access user's data like accessToken, refreshToken, profile, done from the function above
 * This is the route we are sending the code the code google gave to us back to google to exchange for user's data. The difference between the one above is that for this route we have the code we want.
 
 * At his point the User's data are now available on our server so is up to us the give the user what to do by attaching a token or cookie to that user so that user can do future request untill that token/cookie expires.
 
 * Next task is how to give previllage to that user on our site
 
 ## Analysing the OAuth callback
 
 ```javascript
 passport.use(new GoogleStrategy({
    clientID: keys.GoogleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'

  }, (accessToken, refreshToken, profile, done) => {
    console.log(profile)
}))
 ```
 * At this point when google send us back the user with the code passport do follow up to exchange code for user's real data and all the data are available inside the callback function
 * Inside the callback we have the following arguments (accessToken, refreshToken, profile, done)
 * Inside the callback we call access all the user's data
 * At this point the user's data is pending on our server for us to use it
 * Inside the callback is where we will do our logic like saving the user into our database
 
 ## Next we to create the user and save it into our database
 
 # OVERVIEW OF AUTHENTICATION
 
 ## Cookie base authentication
 * http is stateless which means that http cannot identify who is making request that is why will use cookies/jwt/token to identify the user who is making the request
 
 * When a user login with their correct credentials the server automatically add some piece of identifiers either using cookie/Token we have defined to the request the user is making.
 
 * Any further request the user will make, our browswer will know this particular person has already has a token attached to him and if the token/cookie has not expire the user can request resources on our site. But the request the user can take on our will also depends on how we want that to do on our server either to delete, read or create resources, we will come to that.
 
 * Whent the user login into our server after going through the OAuth process our sever add a property called header to the response of the user's request. This header is going to have a property called *set-cookie* and this will be a random numbers. This token/cookie wiill be the unique identity to that user. When the response is going to the user the user's browser will take of the token value and save it into the browswer's memory and this will identify the user to do any request until the cookies expire.
 
 ## Signing in a user
 * When is signing in, the user first sign up and during that saving process we store user's id from google which is not subject to change into our database so when a user is login in, the user will go through the OAUth process again, at that the browser has all the profile of that person which is pending on our server and then we compare the one coming and the one in our database, if they match then the user can login
 
## Mongodb for Signing Up users
