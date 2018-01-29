const express = require('express');
const path  =  require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':false}));

app.set('views', path.join(__dirname,'views'));
app.set('view engine','pug');

app.get('/',(req,rew)=>{
    rew.render('index');
});
app.get('/about',(req,rew)=>{
    rew.render('about');
});

app.listen(5000);
console.log("server running on port 5000.");


