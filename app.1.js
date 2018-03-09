var express = require('express');
var connect = require('connect');
var bodyParser = require('body-parser')
var basicAuth = require('express-basic-auth');
var app = express();
var app1 = connect();
const Constants = require('./constants');

var Gpio = require('onoff').Gpio;
var Rele = new Gpio(2, 'out');

app.use(basicAuth({
    users: { 'admin': 'secret'}
}));

app.use(bodyParser());

app.get('/', function (req, res) {
    console.log('GET /');
    res.send('Door Opened!');
    
    if (Rele.readSync() === 0){
        Rele.writeSync(1);
    } else {
        Rele.writeSync(0);
    }

    console.log('Door Opened!');
});

app.post('/', function(req, res){
    console.log('POST /');
    res.send('Door Opened!');
    

    console.log('Door Opened!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});