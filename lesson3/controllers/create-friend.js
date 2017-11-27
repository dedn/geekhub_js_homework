module.exports =  function (request, response) {
  if(request.body.name.length < 3){
    response.sendFile(__dirname +'/public/error.html')
  } else {
    response.sendFile(__dirname +'/public/sucses.html')
  }
}