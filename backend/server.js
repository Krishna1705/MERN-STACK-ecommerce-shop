import express from 'express';
//above line can be used after new ES6 feature import
//for this we need to write "type":"module" inside package.json file
//var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('kaju....server is ready');
  })

  app.listen(5000,()=>{
      console.log("server is running at http://localhost:5000");
  })