	function validateForm(){
		//get values required to validate
		var firstName = document.getElementById("firstName");
		var lastName = document.getElementById("lastName");
		var emailAddress = document.getElementById("emailAddress");
		var city = document.getElementById("city");
		var zipcode = document.getElementById("zipcode");
		
		
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
		//write conditions here
		if(firstName.value == "" && firstName.value.length < 3 ){
			window.alert("Enter Valid First Name");
			firstName.focus();
			return false;
		} 
		
		if(lastName.value == "" && lastName.value.length < 3 ){
			window.alert("Enter Valid Last Name");
			lastName.focus();
			return false;
		} 
		
		if(city.value == "" && city.value.length < 3 ){
			window.alert("Enter Valid city");
			city.focus();
		}
		
		
		//check length of zipcode
		if(zipcode.value.length == "" || isNaN( zipcode.value ) || zipcode.value.length != 5){
			window.alert("ZipCode is required to be 5 Digit Long ");
			document.studentapplicationform.zipcode.focus() ;
			return false;
		}
		
		//check for email validation
		if(emailAddress.value.match(mailformat)) {
			console.log();
		} else{
			document.studentapplicationform.emailAddress.focus() ;
			window.alert("Check your Email Address");
			return false;
		}

		window.alert("Success! you registered");

	return true;
	}