(function () {
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
