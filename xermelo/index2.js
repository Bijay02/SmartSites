function toggleAdditionalForm() {
  var additionalForm = document.getElementById("additional-info");
  var yesRadio = document.getElementById("yes");

  if (!yesRadio.checked) {
    $("#myformValidation").validate().resetForm();
  }

  if (yesRadio.checked) {
    additionalForm.style.display = "block";
  } else {
    additionalForm.style.display = "none";
  }
}

$("#myformValidation").validate({
  rules: {
    first_name: {
      required: true,
      minlength: 2,
    },
    last_name: {
      required: true,
      minlength: 2,
    },
    email_address: {
      required: true,
      email: true,
      // pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    phone: {
      required: true,
      number: true,
      minlength: 10,
      maxlength: 10,
    },
  },
  messages: {
    first_name: {
      required: "Please enter your first name",
      minlength: "First Name at least 2 characters",
    },
    last_name: {
      required: "Please enter your last name",
      minlength: "First Name at least 2 characters",
    },
    email_address: {
      required: "Please enter your email",
      email: "Please enter valid email",
      // pattern: "Please enter valid email pattern"
    },
    phone: {
      required: "Please enter your phone number.",
      number: "Please enter numbers",
      minlength: "Phone must be atleast 10 digits.",
      maxlength: "Phone number must be of 10 digits",
    },
  },

  submitHandler: function (form) {
    $("input[type='submit']").prop("disabled", true);

    // form.submit();

    setTimeout(function () {
      form.reset();
      $(".error").remove();
      $("input[type='submit']").prop("disabled", false);
    }, 2000);
  },
});
