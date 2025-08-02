 // This external javascript makes sure the contact page works properly.
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    const name = document.getElementById('fname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('Email').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]+$/;
 // This code ensures that all fields are filled properly it gives an alert when it's not filled.
    if (name === '' || phone === '' || email === '' || message === '') {
      alert("Please fill in all fields.");
      e.preventDefault();
      return;
    }
 // This code ensure that the correct format is filled in the phone number section if not it gives an alert to do so.
    if (!phonePattern.test(phone)) {
      alert("Phone number should contain only digits.");
      e.preventDefault();
      return;
    }
 // This code ensures that the email address section is filled apprioprately if not it gives an alert to do so.
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
      return;
    }
 // This alert shows up only if all fields have been filled correctly and the submit button is clicked.
    alert("Form submitted successfully!");
    e.preventDefault();
    form.reset();
  });
});
