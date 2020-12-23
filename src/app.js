const express = require('express');
const app = express();
const timestamp = require('./api/routes/timestamp')
const  cors = require('cors');

app.use(cors({optionsSuccessStatus: 200}));  
app.use(express.static('public'));
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// app.use('/api/testing', timestamp);

app.get("/api/timestamp/:date?", timestamp);

module.exports = app; 