const express = require('express');
const chalk = require('chalk');
const ejs = require('ejs');
const path = require('path');

const app = express();


app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));  


app.get('/', (req,res)=>{
    const name = req.params.name
    res.render("index")
})

module.exports = app;