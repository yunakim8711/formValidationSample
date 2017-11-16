// JavaScript Validation For TD Personal Information 

$('document').ready(function() {
	// name validation
	var nameregex = /^[a-zA-Z ]+$/;
	$.validator.addMethod("validname", function(value, element) {
		return this.optional(element) || nameregex.test(value);
	});
	// email validation
	var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	$.validator.addMethod("validemail", function(value, element) {
		return this.optional(element) || eregex.test(value);
	});
	// SIN Number validation 
	var sinregex = /^\d{9}$/;
	$.validator.addMethod("validSIN", function(value, element) {
		return this.optional(element) || sinregex.test(value);
	});
	//Date Validation
	var dateregex = /^\d{2}-\d{2}-\d{4}$/;
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
			date: {
				required: true,
				validDate: true
			},
			sinNumber: {
				required: true,
				validSIN: true,
				minlength: 9,
				maxlength: 9
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
			date: {
				required: "Please Enter Date",
				validDate: "Enter Valid Date MM-DD-YYYY"
			},
			sinNumber: {
				required: "Please Enter SIN",
				validSIN: "SIN must contain only numbers",
				minlength: "Enter 9 Numbers"
			}
		},

		//error block
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
			alert("FirstName: " + fname + "\n" + "LasttName: " + lname + "\n" + "Email: " + email ) ;
			form.submit();
		}
	});
});