// The page is for the data.
// This will help determine what data the user sees, as well as what data
// the user is able to post to our server to store.
var tableData = require('../data/tableData.js');
var waitingListData = require('../data/waitingListData.js');

module.exports = function (app) {
	app.get('/api/tables', function(req, res){
		res.json(tableData);
	})
}