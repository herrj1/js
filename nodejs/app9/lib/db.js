var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'app_nodejs1'
});

connection.connect(function(err){
	if(err)
		console.log(err);
	else
		console.log('Connected..!');
});

module.exports = connection;