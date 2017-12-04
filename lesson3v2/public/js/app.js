$('#test').click(function(){

    $.get('/test', {asd:1}, function(result){
        console.log(result)
    })

}   )