document.getElementById('btn-submit').addEventListener('click', function(){
      const emailField = document.getElementById('user-email');
      const email = emailField.value;
     

      const passwordField = document.getElementById('user-password');
      const password = passwordField.value;
      console.log(email, password)


      if (email === 'abubakar@gmail.com' && password === 'secret'){
            console.log('valid user')
      }
      else{
            console.log('invalid user')
      }
})