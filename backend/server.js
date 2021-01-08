import express from 'express';
import {data} from './data.js'
//above line can be used after new ES6 feature import
//for this we need to write "type":"module" inside package.json file
//var express = require('express');
var app = express();

app.get('/api/products',(req,res)=>{
    res.send(data.products)
})

app.get('/', function (req, res) {
    res.send('kaju....server is ready');
  })

  const port=process.env.PORT || 5000;
  app.listen(port,()=>{
      console.log(`server is running at http://localhost:${port}`);
  })