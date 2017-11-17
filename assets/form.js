// JavaScript Validation For TD Personal Information 
$('document').ready(function() {
	// check for custom valid handler
	// default - check if long enough and only alphbets and space
	var nameregex = /^[a-zA-Z ]+$/;
	$.validator.addMethod("validname", function(value, element) {
		return this.optional(element) || nameregex.test(value);
	});
	// check for valid e-mail formatting
	var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	$.validator.addMethod("validemail", function(value, element) {
		return this.optional(element) || eregex.test(value);
	});
	// check for valid SIN Number (9numbers) formatting
	var sinregex = /^\d{9}$/;
	$.validator.addMethod("validSIN", function(value, element) {
		return this.optional(element) || sinregex.test(value);
	});
	// check for valid Date
	var dateregex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
	$.validator.addMethod("validDate", function(value, element) {
		return this.optional(element) || dateregex.test(value);
	});
	$("#register-form").validate({
		rules: {
			fname: {
				required: true,
				validname: true,
				minlength: 2
			},
			lname: {
				required: true,
				validname: true,
				minlength: 2
			},
			email: {
				required: true,
				validemail: true
			},
			validTodayDatepicker: {
				required: true,
				validDate: true
			},
			sinNumber: {
				required: true,
				validSIN: true
			},
		},
		messages: {
			fname: {
				required: "Please Enter First Name",
				validname: "Name must contain only alphabets and space",
				minlength: "Your Name is Too Short"
			},
			lname: {
				required: "Please Enter Last Name",
				validname: "Name must contain only alphabets and space",
				minlength: "Your Name is Too Short"
			},
			email: {
				required: "Please Enter Email Address",
				validemail: "Enter Valid Email Address"
			},
			validTodayDatepicker: {
				required: "Please Select Date",
				validDate: "Enter Valid Date MM-DD-YYYY"
			},
			sinNumber: {
				required: "Please Enter SIN",
				validSIN: "SIN must contain only 9 numbers"
			}
		},
		// functions for error display
		errorPlacement: function(error, element) {
			$(element).closest('.form-group').find('.help-block').html(error.html());
		},
		highlight: function(element) {
			$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).closest('.form-group').removeClass('has-error').addClass('has-success');
			$(element).closest('.form-group').find('.help-block').html('');
		},
		//submit alert
		submitHandler: function(form) {
			var fname = document.getElementById('fname').value;
			var lname = document.getElementById('lname').value;
			var email = document.getElementById('email').value;
			alert("FirstName: " + fname + "\n" + "LastName: " + lname + "\n" + "Email: " + email);
			form.submit();
		}
	});
});