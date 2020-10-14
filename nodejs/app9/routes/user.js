var express = require('express');
var router = express.Router();
var dbconn = require('../lib/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
	dbconn.query('SELECT * FROM person ORDER BY id asc', function(err, rows){
	if(err){
		req.flash('error', err);
		res.render('user', {data:''});
	}else{
		res.render('user',{data:rows});
	}
  })
})

router.get('/add', function(req, res, next) {
	res.render('user/add', {
		firstname: '',
		lastname: '',
		status_update:''
	})
})

router.post('/add', function(req, res, next) {
	let firstname = req.body.firstname;
	let lastname = req.body.lastname;
	let status_update = req.body.status_update;
	let errs = false;
	
	if(firstname.length === 0 || lastname.length === 0 || status_update.length === 0){
		errs = true;
		
		req.flash('error', "Please enter your first and last name");
		
		res.render('user/add', {
			firstname: firstname,
			lastname: lastname,
			status_update: status_update			
		})
	}
	
	if(!errs){
		var form_data = {
			firstname: firstname,
			lastname: lastname,
			status_update: status_update	
		}
		
		
		dbconn.query('INSERT INTO person SET ?', form_data, function(err, result){
			if(err){
				req.flash('error', err)
				res.render('user/add', {
					firstname: form_data.firstname,
					lastname: form_data.lastname,
					status_update: form_data.status_update	
				})
			}else{
				req.flash('success', 'Added successfully');
				res.redirect('/user');
			}
		})
	}
})


router.get('/edit/(:id)', function(req, res, next) {
	let id = req.params.id;
	
	dbconn.query('SELECT * FROM person WHERE id = ' + id, function(err, rows, fields){
		if(err) throw err
		
		if(rows.length <= 0){ 
			req.flash('error', 'User with id: ' + id +' was not found' )
			res.redirect('/user')
		}else{
			res.render('user/edit', {
				title: 'Edit User',
				id: rows[0].id,
				firstname: rows[0].firstname,
				lastname: rows[0].lastname,
				status_update: rows[0].status_update	
			})
		}
	})
	
})




router.post('/update/(:id)', function(req, res, next) {
	let id = req.params.id;
	let firstname = req.body.firstname;
	let lastname = req.body.lastname;
	let status_update = req.body.status_update;
	let errs = false;
	
	if(firstname.length === 0 || lastname.length === 0 || status_update.length === 0){
		errs = true;
		
		req.flash('error', "Please enter your first and last name");
		
		res.render('user/edit', {
			id: req.params.id,
			firstname: firstname,
			lastname: lastname,
			status_update: status_update			
		})
	}
	
	if(!errs){
		var form_data = {
			firstname: firstname,
			lastname: lastname,
			status_update: status_update	
		}
		
		
		dbconn.query('UPDATE person SET ? WHERE id = ' + id, form_data, function(err, result){
			if(err){
				req.flash('error', err)
				res.render('user/edit', {
					id: req.params.id,
					firstname: form_data.firstname,
					lastname: form_data.lastname,
					status_update: form_data.status_update	
				})
			}else{
				req.flash('success', 'User successfully updated');
				res.redirect('/user');
			}
		})
	}
})


router.get('/delete/(:id)', function(req, res, next) {
	let id = req.params.id;
	
	dbconn.query('DELETE FROM person WHERE id = ' + id, function(err, rows, fields){
		//if(err) throw err
		
		if(err){ 
			req.flash('error', err )
			res.redirect('/user')
		}else{
			req.flash('success', 'User '+ id +' successfully deleted.' )
			res.redirect('/user')
		}
	})
	
})



module.exports = router;
