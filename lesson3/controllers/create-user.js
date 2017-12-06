var path = require('path')

module.exports =  function (request, response) {

    var user = request.body;

    if (user.type === '3') {
      // save user in db
      response.json({
        id: 1,
        phone: '38' + user.phone
      })
    } else {
      response.status(500).json({
        message: 'type is not valid'
      })

    }
  }
