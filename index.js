const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('./models/user') 
const passport = require('passport');
require('./services/passport')
const keys = require('./config/keys')
//IMPORTING ROUTES
const authRoutes  = require('./routes/authRoutes');

const app = express();

//CONNECTING TO DB
mongoose.connect(keys.mongoURL)

// app.get('/', (req, res) => {
//   res.send({name: 'Emmanuel Famil'})
// })
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// // Put all API endpoints under '/api'




//============ROUTES============
//Calling authRoutes
authRoutes(app)

// // The "catchall" handler: for any request that doesn't
// // match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);








