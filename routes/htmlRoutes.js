//  the html routes are to help direct the user. 
// Whenever they click on a link, the router will understand, based on this info
// what page to deliver to them.
var path = require('path');
module.exports = function (app) {
	app.get('/tables', function(req, res){
		res.sendFile(path.join(__dirname + './public/tables.html'));
	});

	app.get('/reserve', function(req, res){
		res.sendFile(path.join(__dirname + './public/preserve.html'));
	});

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '../public/home.html'));
	});

	// app.use(function(req, res){
	// 	res.sendFile(path.join(__dirname + '../public/home.html'));
	// 	console.log("you should be reading this")
	// });
	console.log("you should be reading this")
}