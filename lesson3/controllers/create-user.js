var path = require('path')

module.exports =  function (request, response) {

  if(request.body.type !== '3'){
    response.sendFile(path.resolve(__dirname +'/../public/error.html'))
  } else {
    response.sendFile(path.resolve(__dirname +'/../public/sucses.html'))

  var user = request.body;

  if(user.type === '3'){
    // save user in db
    response.json({
      id:1,
      phone:'38' + user.phone
    })
  } else {
    response.status(500).json({
      message:'type is not valid'
    })

  }
}