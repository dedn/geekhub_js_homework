var express = require('express')
var bodyParser = require('body-parser')

var server = express();


server.use(express.static('public'));
server.use(bodyParser.urlencoded({extended: true}))

server.use(function (request, respoonse) {
  if(request.body.type !== '3'){
      respoonse.sendFile(__dirname +'/public/error.html')
  } else {
      respoonse.sendFile(__dirname +'/public/sucses.html')
  }
})

server.listen(8001);