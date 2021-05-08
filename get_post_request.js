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










app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});