var http  = require('http');
var stats = require('measured').createCollection();
var graphite = require('graphite');
//var client = graphite.createClient('plaintext://graphite.example.org:2003/');
var client = graphite.createClient();

http.createServer(function(req, res) {
  stats.meter('requestsPerSecond').mark();
  res.end('Thanks');
}).listen(3000);

var metrics = stats.toJSON();

setInterval(function() {
  console.log(metrics);
}, 1000);

client.write()

