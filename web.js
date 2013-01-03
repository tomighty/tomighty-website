var express = require("express");
var app = express();
var port = process.env.PORT || 5000;

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.get('/', function(request, response) {
	response.render('index');
});

app.get('/about', function(request, response) {
	response.render('about');
});

app.get('/changes', function(request, response) {
	response.render('changes', {showLatestChangesOnly: false});
});

app.get('/contribute', function(request, response) {
	response.render('contribute');
});

app.get('/download', function(request, response) {
	response.render('download', {showLatestChangesOnly: true});
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log("Listening on " + port);
});
