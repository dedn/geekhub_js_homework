var express = require('express')
var server = express()

server.use(express.static('./public'))
server.get('/test', function (req, res) {
    res.json({qwe:2})
})

server.listen(3000)