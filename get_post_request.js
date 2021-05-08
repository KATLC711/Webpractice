var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });


var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3221);


function get_time() {
    return (new Date(Date.now())).toLocaleTimeString('en-US');
}


app.get('/', function (req, res) {

    var context = {
        'time': get_time(),
        'greet': "Kevin Cheung - Assignment 5"
    }
    res.render('home', context);
});



app.get('/get-request', function (req, res) {

    var qParams = [];
    for (var p in req.query) {
        qParams.push({ 'name': p, 'value': req.query[p] })
    }
    var context = {};
    context.dataList = qParams;

    context.name = req.query.name;
    context.location = req.query.location;
    context.color = req.query.color;
    context.school = req.query.school;
    context.major = req.query.major;

    res.render('getrequest', context);
});



app.post('/post-request', function (req, res) {
    var qParams = [];
    for (var p in req.body) {
        qParams.push({ 'name': p, 'value': req.body[p] })
    }

    var context = {};
    context.dataList = qParams;

    context.name = req.body.name;
    context.location = req.body.location;
    context.color = req.body.color;
    context.school = req.query.school;
    context.major = req.query.major;

    res.render('postrequest', context);
});





app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});