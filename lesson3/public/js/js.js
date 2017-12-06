(function () {

    var createUserForm = $('#create-user')

    createUserForm.on('submit', function (event) {
        event.preventDefault();

        $.ajax({
            method:'POST',
            url:'/create-user',
            data:createUserForm.serialize(),
            success:function (result) {
                result
            },

            error:function (error) {
                error
            }
        })
    })
})();


  // var createUserForm = JQuery('#create-user');
  //
  // createUserForm.on('submit', function (event) {
  //   event.preventDefault()
  //
  //   JQuery.ajax({
  //     method:'POST',
  //     url:'create-user',
  //     date: createUserForm.serialize(),
  //
  //     success: function (result) {
  //       result;
  //     },
  //     error: function (error) {
  //       error;
  //     }
  //
  //   })
  //
  // })
// })

