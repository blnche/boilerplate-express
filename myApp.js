require('dotenv').config();
let express = require('express');
let app = express();

console.log("Hello World");

// app.get('/', function(req, res) {
//     res.send('Hello Express');
// });
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});


app.use('/public', express.static(__dirname + '/public'))

app.get('/json', function(req, res) {
    process.env.MESSAGE_STYLE;
    res.json( {'message': "Hello json".toLocaleUpperCase()});
})

























 module.exports = app;
