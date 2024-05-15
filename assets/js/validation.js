
    // Initialize form validation on the #contact-form
    $("#contact-form").validate({
        // Specify validation rules
        rules: {
            formName: {
                required: true,
                minlength: 2
            },
            phonenum: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            formEmail: {
                required: true,
                email: true
            },
            formMessage: {
                required: true,
                minlength: 5
            }
        },
        // Specify validation error messages
        messages: {
            formName: {
                required: "Please enter your name",
                minlength: "Your name must be at least 2 characters long"
            },
            phonenum: {
                required: "Please provide a phone number",
                digits: "Please enter a valid phone number",
                minlength: "Your phone number must be at least 10 digits long",
                maxlength: "Your phone number must be at least 10 digits long"
            },
            formEmail: "Please enter a valid email address",
            formMessage: {
                required: "Please enter a message",
                minlength: "Your message must be at least 5 characters long"
            }
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            form.submit();
        }
    });
