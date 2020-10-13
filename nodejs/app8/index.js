//var back = require('./db.js');
var fs = require('fs');
eval(fs.readFileSync('db.js')+'');

app.listen(3000, ()=> console.log('Express server is tunning at port 3000'));

//get all users
app.get('/user', (req, res)=>{
	mysqlConnection.query('SELECT * FROM person', (err,rows, fields) => {
		if(!err)
			res.send(rows);
		else
			console.log(err);
	})
});

//get 1 user
app.get('/user/:id', (req, res) => {
	mysqlConnection.query('SELECT * FROM person WHERE id = ?', [req.params.id], (err, rows, fields) => {
		if(!err)
			res.send(rows);
		else
			console.log(err);
	})
});


//delete a user
app.delete('/user/:id', (req, res) => {
	mysqlConnection.query('DELETE FROM person WHERE id = ?', [req.params.id], (err, rows, fields) => {
		if(!err)
			res.send('Deleted successfully. ');
		else
			console.log(err);
	})
});

//insert a user
app.post('/user', (req,res)=>{
	let user = req.body;
	var sql = "INSERT INTO person (firstname, lastname, status_update) VALUES (@firstname, @lastname,@status_update)";
	mysqlConnection.query(sql, [user.firstname, user.lastname, user.status_update], function(err, result) {
		if (err) throw err;
		else
			res.send("all ok");
			console.log("record inserted");
	});
});

//update user
app.put('/user', (req, res)=>{
	let user = req.body;
	var sql = "SET @id = ?; SET @firstname = ?; SET @lastname = ?; SET @status_update; CALL UserAddOrEdit(@id, @firstname, @lastname, @status_update);";
	mysqlConnection.query(sql, [user.id, user.firstname, user.lastname, user.status_update], (err, rows, fields)=>{
		if(!err)
			res.send('User Updated successfully');
		else
			console.log(err);
	})
});