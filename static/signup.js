var name=document.getElementById("name").value
         var mail=document.getElementById("mail").value
         var pass=document.getElementById("pass").value
         var con = document.getElementById("con").value
         var chec=document.getElementById("check").value

         function verify() {
                  // event.preventDefault();
              
                  // Get the values when the form is submitted
                  var name = document.getElementById("name").value;
                  var mail = document.getElementById("mail").value;
                  var pass = document.getElementById("pass").value;
                  var con = document.getElementById("con").value;
                  // var chec = document.getElementById("check").value;
              
                  console.log(chec);
                  console.log(pass, con);
              
                  if (pass !== con) {
                      alert("Passwords don't match");
                      return false;
                  }
              
                  if (chec === 'off') {
                      alert("Please accept our terms and conditions");
                      return false;
                  }
              }



              function changecheckbox() {
                  if (chec === 'on') {
                      chec = 'off';
                  } else if (chec === 'off') {
                      chec = 'on';
                  }
                  console.log(chec);
              }