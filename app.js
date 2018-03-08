var express = require('express');
var connect = require('connect');
var bodyParser = require('body-parser')
var basicAuth = require('express-basic-auth');
var app = express();
var app1 = connect();
//const Constants = require('./constants');

app.use(basicAuth({
    users: { 'admin': 'secret'}
}));

app.use(bodyParser());

app.get('/', function (req, res) {
    console.log('GET /');
    res.send('Door Opened!');
    /*
    var request = require('xhr-request')
    request(Constants.DoorIp, {
        method: Constants.DoorMethod,
        headers: {'Authorization' : Constants.HeadersValue}},
        function (err, data, response) {
        if (err) throw err  
        if (response.statusCode == 200){
            console.log("La porta è stata aperta!");
        }

        else {
            console.log("C'è stato un errore, riprova!");
        }
    })
    */
    console.log('Door Opened!');
});

app.post('/', function(req, res){
    console.log('POST /');
    res.send('Door Opened!');
    /*
    var request = require('xhr-request')
    request(Constants.DoorIp, {
        method: Constants.DoorMethod,
        headers: {'Authorization' : Constants.HeadersValue}},
        function (err, data, response) {
        if (err) throw err  
        if (response.statusCode == 200){
            console.log("La porta è stata aperta!");
        }

        else {
            console.log("C'è stato un errore, riprova!");
        }
    })
    */
   console.log('Door Opened!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});