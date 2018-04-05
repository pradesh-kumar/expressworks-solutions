var path = require('path');
var express = require('express');

var app = express();

app.put('/message/:id', function (request, response) {
  var id = request.params.id;
  var str = require('crypto').createHash('sha1').
      update(new Date().toDateString().toString() + id).digest('hex');
  response.send(str);
});

app.listen(process.argv[2]);