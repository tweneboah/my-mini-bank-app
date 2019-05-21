
module.exports = ()=> {
    //Route for starting Auth flow
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

    
}