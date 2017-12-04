(function () {
<<<<<<< HEAD
    var createUserForm = JQuery('#create-frined')

    createUserForm.on('submit', function (e) {
        event.preventDefault();

        JQuery.ajax({
            method:'POST',
            data:createUserForm.serialize(),
            success:function (result) {
                
            },

            error:
        })
    })
})
=======

  var createUserForm = JQuery('#create-user');

  createUserForm.on('submit', function (event) {
    event.preventDefault()

    JQuery.ajax({
      method:'POST',
      url:'create-user',
      date: createUserForm.serialize(),

      success: function (result) {
        result;
      },
      error: function (error) {
        error;
      }

    })

  })
})
>>>>>>> 21d17e95506eaf9da9bf351871bb546529fc611f
