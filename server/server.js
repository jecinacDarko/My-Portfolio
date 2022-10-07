const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 

const uri = 'mongodb+srv://jecinacDarko:bellatrixM42@mycluster.zmis2lc.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('MongoDb Database Connected')
    } catch (error) {
        console.error(error);
    }
}

connect();

app.listen(8000, ()=> {
    console.log(`Server running on port 8000`);
});

