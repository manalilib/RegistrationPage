
function validateEntries(){
	var fName = document.register.fName;
	var lName = document.register.lName;
	var street = document.register.street;
	var town = document.register.town;
	var postCode = document.register.postalCode;
	var birthday = document.register.birthday;

if(validateInput(fName) && validateInput(lName) && validateInput(street) && validateInput(town) && validateInput(postCode) && validateBDate(birthday)) {
alert("Registration Success.");
}
else{
alert("Registration Failed.");
}

function validateInput(inputToValidate = String){
var pattern = /^[A-Za-z]+$/;
var msg;

if(inputToValidate == "street" || inputToValidate =="fName" || inputToValidate =="lName" || inputToValidate =="town" ){
		pattern = /^[a-zA-Z0-9]+$/; 
		 msg ="should have alphanumeric characters only"
	}
else if(inputToValidate == "postCode" || inputToValidate =="birthday"){
		pattern = /^[0-9]+$/;
		 msg ="should have numeric characters only"
	}
	if(inputToValidate.value.match(pattern))  
	{  
	return true;  
	}  
	else  
	{
	alert(inputValidate.text + msg);
	inputToValidate.setFocus()  
	return false;  
	}  
}

function validateBDate (birthday){}
    var bday = Date.now().getUTCFullYear() - birthday.getUTCFullYear();
if(bday >= 18){
	return true;
}
esle{
	return false;
}
}

}
