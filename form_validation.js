const submitButton = document.querySelector('#submit-form')
submitButton.addEventListener('click', function(){
    const password = document.querySelector('#password')
    const confirmPassword  = document.querySelector('#confirmPassword')

    if (password.value != confirmPassword.value) {
        const mismatch = document.querySelector('#password-mismatch')
        mismatch.hidden = false
    } else {
        const form = document.querySelector('#account_creation_form')
        form.submit();
    }


})