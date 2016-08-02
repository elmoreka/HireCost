// This program will calculate the cost of hiring personal for the dates, rate, and hours specified. The program will
// also retain values for a print friendly page once the calculate/submit button is pressed.  Handlebars is used to
// update the page with the printable version of the information.
// Run fuction validateForm when the submit button is clicked. Once the form is validated, ValidateForm will call the
// function process_form.  The only validation is that a field is required and end date is greater than start date.
// Run function reset_form when reset button is clicked.

$("#submit").bind( "click", function() { validateForm() });
$("#reset").bind( "click", function() { reset_form() });

$(document).ready(function() {
    $("#calculation_form").validate({

        //     submitHandler: function(form) {
        //             form.submit();
        //     },
            rules: {
                "empId": {
                    digits: true,
                    required: {}
                },
                "fName": {
                    required: {}
                },
                "lName": {
                    required: {}
                },

            },
            messages: {}

    });
})
// Validate fields to confirm no null values.  If field is blank or null, return alert message requesting input from
// the user.  If all fields are valid, run process_form.

function validateForm() {

    var empId = document.forms["calculation_form"]["empId"].value;
    var fName = document.forms["calculation_form"]["fName"].value;
    var lName = document.forms["calculation_form"]["lName"].value;

    if (empId == null || empId == "") {
        // alert("Employee Id must be entered and must be numeric");
        $('#empIdError').removeClass("hide")
        return false;
    }
    if (fName == null || fName == "") {
        alert("First name must be entered");
        return false;
    }
    if (lName == null || lName == "") {
        alert("Last name must be entered");
        return false;
    }

}

function reset_form()
{
    $("#empId").val("");
    $("#fName").val("");
    $("#lName").val("");
    
}
