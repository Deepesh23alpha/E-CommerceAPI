const express = require('express');
const port = 5000;
const app = express();

const db = require('./config/mongoose');


app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes'));

app.listen(port, function(err){
    if (err){
        console.log('Error in connecting to the server', err);
    } else{
        console.log('Server is running on port:', port);
    }
});