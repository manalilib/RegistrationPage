<script type="text/javascript" src="JQuery/src/main/javascript/jquery.toastmessage.js">

function validateEntries(){
	var fName = document.register.fName;
	var lName = document.register.lName;
	var street = document.register.street;
	var town = document.register.town;
	var postCode = document.register.postalCode;
	var birthday = document.register.birthday;

if(validateInput(fName) && validateInput(lName)) {
($document).toastmessage('showErrorToast',"TRUE");  
}
else{
	($document).toastmessage('showErrorToast',"FALSE");  
}

function validateInput(inputToValidate = String){
var pattern = /^[A-Za-z]+$/;
var msg ="";

if(inputToValidate == "street"){
		pattern = /^[a-zA-Z0-9]+$/; 
		msg =" should have alphanumeric characters only" 
	}
else if(inputToValidate == "postCode"){
		pattern = /^[0-9]+$/;
		msg =" should have numeric characters only"
	}

	if(inputToValidate.value.match(pattern))  
	{  
	return true;  
	}  
	else  
	{
	($document).toastmessage('showErrorToast',inputToValidate + msg);  
	inputToValidate.focus();  
	return false;  
	}  
}

}