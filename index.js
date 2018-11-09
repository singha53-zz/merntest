const express = require('express');
const path = require('path');
const mongoose = require("mongoose");

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve React build
app.use(express.static(path.join(__dirname, 'client/build')));

// simple API end point
app.get('/api/msg', (req, res) => {
  const msg = 'LEARN REACT';
  res.json(msg)
});

// catch all handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

// listen to port
const PORT = process.env.PORT || 8000;
app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
