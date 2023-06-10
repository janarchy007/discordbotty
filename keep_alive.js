var http = require('http');
const keep_alive = require('./keep_alive.js');

http
  .createServer(function (req, res) {
    res.write("I'm alive");
    res.end();
  })
  .listen(8080);