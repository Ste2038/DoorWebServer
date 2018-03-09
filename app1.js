var express = require('express');
var connect = require('connect');
var bodyParser = require('body-parser')
var basicAuth = require('express-basic-auth');
var app = express();
var app1 = connect();
const Constants = require('./Constants');

var Gpio = require('onoff').Gpio;
var Rele = new Gpio(2, 'out');

app.use(basicAuth({
    users: { 'admin': 'secret'}
}));

app.use(bodyParser());

app.get('/', function (req, res) {
    console.log('GET /');
    Rele.writeSync(Rele.readSync());
});

app.post('/', function(req, res){
    console.log('POST /');
    if (Rele.readSync() === 0){
        Rele.writeSync(1);
        res.send('Led On!');
    } else {
        Rele.writeSync(0);
        res.send('Led Off!');
    }
});

app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port 3000!');
});