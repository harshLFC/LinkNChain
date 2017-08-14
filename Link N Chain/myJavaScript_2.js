



var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var contactFields = [false, false, false, false, false]; 


function checkForm() {
	//Get inputted fields from form
    var contactNameField = document.forms["my_form"]["user_name"].value;
	var contactEmailField = document.forms["my_form"]["user_email"].value;

	var contactTermsField  = ""; //To be used later
	
	
	var contactNameObject = document.getElementById("user_name_check");
	var contactEmailObject = document.getElementById("user_email_check");

	var contactTermsObject = document.getElementById("check_terms");
	
	
	//1. Check if contact name field is empty
	if (contactNameField === "") {
        contactNameObject.innerHTML = "<b><font color=\"red\">Name cannot be empty</b>";
    }
	else {
		//Name field is valid
		contactFields[0] = true;
        contactNameObject.innerHTML = "";
	}
	
	
	//2. Check if contact email field is empty
	if (contactEmailField === "") {
        contactEmailObject.innerHTML = "<b><font color=\"red\">Email cannot be empty</b>";
    }
	//Email field is not empty, check if it is an actual email
	else if (emailRegex.test(contactEmailField)) {
		//Email is valid
		contactFields[1] = true;
        contactEmailObject.innerHTML = "";
	}
	//Not a proper email format
	else {
        contactEmailObject.innerHTML = "<b><font color=\"red\">Email must be valid</b>";
	}
	
	
	//3. Check if contact gender is selected
    if (document.getElementById('gender_male').checked) {
        //Male radio button is checked
		contactGender = "Male";
		contactFields[2] = true;
        contactGenderObject.innerHTML = "";
    }
	else if (document.getElementById('gender_female').checked) {
        //Female radio button is checked
		contactGender = "Female";
		contactFields[2] = true;
        contactGenderObject.innerHTML = "";
    }
	else {
        //Neither radio button is checked
        contactGenderObject.innerHTML = "<b><font color=\"red\">Gender must be checked</b>";
    }
    
	
    //5. Check if contact message field is empty
	if (contactMessageField === "") {
        contactMessageObject.innerHTML = "<b><font color=\"red\">Message cannot be empty</b>";
    }
	else {
		//Name field is valid
		contactFields[3] = true;
        contactMessageObject.innerHTML = "";
	}
	
	
	//6. Check if Terms and Conditions checkbox is checked
	if (document.getElementById("agrees").checked) {
		//Checkbox is checked
		contactFields[4] = true;
        contactTermsObject.innerHTML = "";
	}
	else {
		//Checkbox is not checked
        contactTermsObject.innerHTML = "<b><font color=\"red\">Please accept the terms and conditions</b>";
	}
	
