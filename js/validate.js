/*=========================================

Template Name: Pride - One Page Personal vCard Portfolio
Author: ThemeLabBD
Version: 1.0
Design and Developed by: ThemeLabBD

NOTE: This is the custom jQuery contact form validation

=========================================*/


// validate contact form
$(function() {
    $('#contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "your name must consist of at least 2 characters"
            },
            email: {
                required: "Plaese enter a email adress"
            },
            message: {
                required: "you have to write something to send this massage",
                minlength: "thats all? really?"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"process.php",
                success: function() {
                    $('#contact :input').attr('disabled', 'disabled');
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        //$(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});
