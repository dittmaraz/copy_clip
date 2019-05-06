const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const PORT = 3000;
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator/check');
require('./models/ClipboardRecord.js')
require('dotenv').config();

const ClipboardRecord = mongoose.model('ClipboardRecord');

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true })
mongoose.Promise = global.Promise;
mongoose.connection
    .on('connected', () => {
        console.log(`Mongoose connection opened on ${process.env.DATABASE}`);
    })
    .on('error', (err) => {
        console.log(`Connection Error: ${err.message}`)
    })

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
// Set public path

app.set('view engine', 'pug')

app.get('/', (req,res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.post('/api/set', (req,res) => {
    console.log(req.body);
    const clipboardrecord = new ClipboardRecord(req.body);
    clipboardrecord.save()
        .then(() => { res.send("Saved Successfully.")})
        .catch(() => { res.send("Sorry, something went wrong")})

});

app.listen(PORT, () => {
    
    console.log(`Listening on ${PORT}.`)
    
});