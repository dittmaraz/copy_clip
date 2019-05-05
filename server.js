const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const os = require( 'os' );


const PORT = 3000;

// app.use(bodyParser.urlencoded({urlencoded: true}))
app.use(bodyParser.json())


app.post('/api/set', (req,res) => {
    console.log(req.body)
})

app.listen(PORT, () => {
    
    console.log(`Listening on ${PORT}.`)
    
});


