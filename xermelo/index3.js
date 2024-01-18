function toggleAdditionalForm() {
    var additionalForm = document.getElementById("additional-info");
    var yesRadio = document.getElementById("yes");

    if (!yesRadio.checked) {
        clearErrorMessages();
    }

    if (yesRadio.checked) {
        additionalForm.style.display = "block";
    } else {
        additionalForm.style.display = "none";
    }
}

function validateForm() {
    var constraints = {
        first_name: {
            presence: true,
            length: {
                minimum: 2,
                // message: "must be greater than 2"
            }
        },
        last_name: {
            presence: true,
            length: {
                minimum: 2
            }
        },
        email_address: {
            presence: true,
            email: true, 
            message: "must be email"
        },
        phone: {
            presence: true,
            numericality: {
                onlyInteger: true
            },
            length: {
                is: 10
            }
        }
    };

    var formValues = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        email_address: document.getElementById('email_address').value,
        phone: document.getElementById('phone').value
    };

    var validationResult = validate(formValues, constraints);

    clearErrorMessages();

    if (validationResult === undefined) {
        setTimeout(function () {
            document.getElementById('myformValidation').reset();
        }, 2000)
        return true;
    } else {
        console.log(validationResult);
        displayErrorMessages(validationResult);
        return false;
    }

}

function clearErrorMessages() {
    document.getElementById('firstnamemessage').innerText = '';
    document.getElementById('lastnamemessage').innerText = '';
    document.getElementById('emailaddressmessage').innerText = '';
    document.getElementById('phonemessage').innerText = '';
}

function displayErrorMessages(errors) {
    if (errors.first_name) {
        document.getElementById('firstnamemessage').innerHTML = errors.first_name[0];
    }
    if (errors.last_name) {
        document.getElementById('lastnamemessage').innerHTML = errors.last_name[0];
    }
    if (errors.email_address) {
        document.getElementById('emailaddressmessage').innerHTML = errors.email_address[0];
    }
    if (errors.phone) {
        document.getElementById('phonemessage').innerHTML    = errors.phone[0];
    }
}