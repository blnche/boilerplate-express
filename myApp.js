require('dotenv').config();
let express = require('express');
let app = express();

console.log("Hello World");

// app.get('/', function(req, res) {
//     res.send('Hello Express');
// });

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/views/index.html');
// });


// app.use('/public', express.static(__dirname + '/public'))

// app.get('/json', function(req, res) {
//     if(process.env.MESSAGE_STYLE === 'uppercase') {
//         res.json( {'message': "Hello json".toUpperCase()});
//     } else {
//         res.json({'message': "Hello json"});
//     };
// })

app.use('/', function(req, res, next) {
    console.log(req.method +  " " + req.path + " - " + req.ip);
    next();
});

app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.send({time: req.time});
});

app.get('/:word/echo', function(req, res){
    res.json({echo: req.params.word});
})

app.route('/name').get(function(req, res){
    res.json({name: req.query(first=firstname&last=lastname)})
}).post(function(req, res){

})

















 module.exports = app;
