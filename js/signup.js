function signup() {
	const fName = document.querySelector('input[name="FirstName"]').value;
	const lName = document.querySelector('input[name="LastName"]').value;
	const emailID = document.querySelector('input[name="EmailID"]').value;
	const password = document.querySelector('input[name="Password"]').value;
	const confirmPassword = document.querySelector('input[name="ConfirmPassword"]').value;
	const emailRegex = RegExp(/^[a-zA-Z0-9.]{3,}@[a-zA-Z0-9]{2,}.[a-zA-Z]{3,}$/);
	let text = '<strong style="color: green;">Success!!</strong>'

	console.log('Fname: ' + fName);
	if(password !== confirmPassword){
		text =  '<strong style="color: red;">Make sure both password matches!!</strong>'
	}
	if(!emailRegex.test(emailID)){
		text = "<strong style=\"color: red;\">emailID is not proper!!!</strong>";
	}
	if(!fName || !lName){
		text =  '<strong style="color: red;">Make sure enter both firstName and lastName!!</strong>'
	}
	document.getElementById("status").innerHTML = text;
}