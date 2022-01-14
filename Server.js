var express = require('express');
var cors = require('cors');
var path =  require('path');
var Run = require('./routes/Run.js');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/run', Run);

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT||8000, ()=>{console.log(`Listening`)})