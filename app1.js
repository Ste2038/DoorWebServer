var express = require('express');
var connect = require('connect');
var bodyParser = require('body-parser')
var basicAuth = require('express-basic-auth');
var app = express();
var app1 = connect();
const Constants = require('./Constants');

var Gpio = require('onoff').Gpio;
var Rele = new Gpio(2, 'out');
let status = "spento";
Rele.writeSync(0);

app.use(basicAuth({
    users: { 'admin': 'secret'}
}));

app.use(bodyParser());

app.get('/', function (req, res) {
    console.log('GET /');
    console.log(Rele.readSync());
    res.send(`Led ${status}!`);
});

app.post('/', function(req, res){
    console.log('POST /');
    if (Rele.readSync() === 0){
        Rele.writeSync(1);
        res.send('Led On!');
        status = "acceso";
    } else {
        Rele.writeSync(0);
        res.send('Led Off!');
        status = "spento";
    }
});

app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port 3000!');
});