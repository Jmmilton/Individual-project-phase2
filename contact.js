const submitButton = document.getElementById('button')

const validateForm = (e) => {
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');


      
    if (firstName.value === '' ) {
       alert("Please enter your first name!");
       firstName.focus();
       e.preventDefault();
       return false;
       
    }
    if (lastName.value === '') {
       alert("Please enter your last name!");
       lastName.focus();
       e.preventDefault();
       return false;
    }
    if (phone.value === '') {
       alert("Please enter phone number!");
       phone.focus();
       e.preventDefault();
       return false;
    }
    if (phone.value.length < 10) {
       alert("Phone number must be 10 digits!");
       phone.focus();
       e.preventDefault();
       return false;
    }
    if (phone.value.length > 10) {
      alert("Phone number cannot be more than 10 digits!");
      phone.focus();
      e.preventDefault();
      return false;
   }
    if (phone.value.length != 10) {
      alert("Please enter valid phone number!");
      phone.focus();
      e.preventDefault();
      return false;
   }
   if (!email.value) {
      alert("Please enter your email!");
      email.focus();
      e.preventDefault();
      return false;
   }
   if (!email.value.includes('@') || !email.value.includes('.')) {
      alert("Please enter a valid email!");
      email.focus();
      e.preventDefault();
      return false;
   }


    return true;
 }

 submitButton.addEventListener('click', validateForm);