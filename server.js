var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// EXPRESS CONFIGURATION
// ==============================================================================

var app = express();
var PORT = process.env.PORT || 8080; 

app.use(express.static(path.join(__dirname + '/app/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type:'app/api+json'}));

// ROUTER
// ================================================================================
app.get('/', function (request, result) {
	// result.sendFile(path.join(__dirname + '/public/index.html'));
});
require('./app/routes/apiRoutes.js')(app); 
require('./app/routes/htmlRoutes.js')(app);

// LISTENER
// ==============================================================================

app.listen(PORT, function() {
	console.log("Server listening on PORT: " + PORT);
});