function toggleAdditionalForm() {
  var additionalForm = document.getElementById("additional-info");
  var yesRadio = document.getElementById("yes");

  if (yesRadio.checked) {
    additionalForm.style.display = "block";
  } else {
    additionalForm.style.display = "none";
  }
}

function validateForm() {
  document.getElementById("firstnamemessage").innerHTML = "";
  document.getElementById("lastnamemessage").innerHTML = "";
  document.getElementById("emailaddressmessage").innerHTML = "";
  document.getElementById("phonemessage").innerHTML = "";

  var firstname = document.myform.first_name.value;
  var lastname = document.myform.last_name.value;
  var emailaddress = document.myform.email_address.value;
  var phone = document.myform.phone.value;

  var isValid = true;

  if (firstname == null || firstname.trim() === "") {
    document.getElementById("firstnamemessage").innerHTML =
      "This should be filled";
    isValid = false;
  }
  if (lastname == null || lastname.trim() === "") {
    document.getElementById("lastnamemessage").innerHTML =
      "This should be filled";
    isValid = false;
  }
  if (emailaddress == null || emailaddress.trim() === "") {
    document.getElementById("emailaddressmessage").innerHTML =
      "This should be filled";
    isValid = false;
  } else if (!isValidEmail(emailaddress)) {
    document.getElementById("emailaddressmessage").innerHTML =
      "Email address must follow pattern";
    isValid = false;
  }
  if (phone == null || phone.trim() === "") {
    document.getElementById("phonemessage").innerHTML = "This should be filled";
    isValid = false;
  } else if (phone.length < 10) {
    document.getElementById("phonemessage").innerHTML =
      "Phone number must be 10 digit.";
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function submitForm() {
  if (validateForm()) {
    setTimeout(function () {
      document.myform.first_name.value = "";
      document.myform.last_name.value = "";
      document.myform.email_address.value = "";
      document.myform.phone.value = "";
      console.log("Form submitted successfully.");
    }, 1000);
  }
}
