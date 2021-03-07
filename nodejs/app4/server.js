//console.log('May Node be with you')

const express = require('express');
var path = require('path');
const bodyParser= require('body-parser');

const app = express();

const MongoClient = require('mongodb').MongoClient;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
var db;

app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect('mongodb://testing:12345@ds157342.mlab.com:57342/samples2017', (err, client) => {
  // ... star the server
  if(err) return console.log(err)
  db = client.db('samples2017')
  app.listen(process.env.PORT || 3000, () => {
  	  console.log('listening on 3000')
  })
})



//app.listen(3000, function() {
//  console.log('listening on 3000')
//});


app.get('/', (req, res) => {
	//
  // do something here
  //res.send('Hello World');
  //var cursor = db.collection('quotes').find()
  db.collection('students').find().toArray(function(err, result) {
		//console.log(result)
		//res.sendFile(__dirname + '/index.html')
		res.render('index.ejs', {students: result})
  })
	
})

//Use the above to list all records. 

app.get('/otherinformation', (req, res) => {
  db.collection('otherstudentinformation').find().toArray(function(err, result) {
		//console.log(result)
		//res.sendFile(__dirname + '/index.html')
		res.render('otherstudentinformation.ejs', {otherstudentinformation: result})
  })
	
})


app.post('/students', (req, res) => {
  //console.log('Hellooooooooooooooooo!');
  //console.log(req.body);
  db.collection('students').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})


app.post('/otherstudentinformation', (req, res) => {
  db.collection('otherstudentinformation').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})
