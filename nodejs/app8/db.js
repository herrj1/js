const mysql = require("mysql")
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
	//if(err) throw err;
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'app_nodejs1',
	multipleStatements:true
});

mysqlConnection.connect((err) => {
	if(!err)
		console.log('DB connection succeded.');
	else
		console.log('DB connection failed \n Error: ' + JSON.stringify(err, undefined, 2));
});
