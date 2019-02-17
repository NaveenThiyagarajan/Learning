// function signup() {
// 	const fName = document.querySelector('input[name="FirstName"]').value;
// 	const lName = document.querySelector('input[name="LastName"]').value;
// 	const emailID = document.querySelector('input[name="EmailID"]').value;
// 	const password = document.querySelector('input[name="Password"]').value;
// 	const confirmPassword = document.querySelector('input[name="ConfirmPassword"]').value;
// 	const emailRegex = RegExp(/^[a-zA-Z0-9.]{3,}@[a-zA-Z0-9]{2,}.[a-zA-Z]{3,}$/);
// 	let text = '<strong style="color: green;">Success!!</strong>'

// 	console.log('Fname: ' + fName);
// 	if(password !== confirmPassword){
// 		text =  '<strong style="color: red;">Make sure both password matches!!</strong>'
// 	}
// 	if(!emailRegex.test(emailID)){
// 		text = "<strong style=\"color: red;\">emailID is not proper!!!</strong>";
// 	}
// 	if(!fName || !lName){
// 		text =  '<strong style="color: red;">Make sure enter both firstName and lastName!!</strong>'
// 	}
// 	document.getElementById("status").innerHTML = text;
// }

// var form = document.querySelector('form');
console.log('JS located');
// form.addEventListener('submit',function(e){
// 	e.preventDefault();
// 	console.log('Submitted!!');
// });

const fName = document.querySelector('input[name="firstName"]');
const lName = document.querySelector('input[name="lastName"]');
const emailID = document.querySelector('input[name="email_id"]');

let firstName = fName.value;
let lastName = lName.value;
let email_id = emailID.value;

// Select our form
const form = document.querySelector('form');
// When form is submitted print 'submitted' to the browser console
form.addEventListener('submit', function (e) {
	// prevent form default behavior
	e.preventDefault();
	firstName = fName.value;
	lastName = lName.value;
	email_id = emailID.value;
	console.log('fName:' + firstName);
	console.log('lName:' + lastName);
	console.log('emailID: ' + email_id);

	const signUpData = {
		firstName: firstName,
		lastName: lastName,
		emailID: email_id
	}

	const emailRegex = RegExp(/^[a-zA-Z0-9.]{3,}@[a-zA-Z0-9]{2,}.[a-zA-Z]{3,}$/);
	let text = '<div class=\"alert alert-success\">Success!!</div>'

// 	console.log('Fname: ' + fName);
// 	if(password !== confirmPassword){
// 		text =  '<strong style="color: red;">Make sure both password matches!!</strong>'
// 	}
	if(!emailRegex.test(email_id)){
		text = "<div class=\"alert alert-danger\">emailID is not proper!!!!!</div>";
	}
	if(!firstName || !lastName){
		text =  '<div class=\"alert alert-danger\">Make sure enter both firstName and lastName!!!!</div>'
	}

	fetch('http://localhost:3000/signup', {
		method: "POST",
		headers:{
			"Content-Type": "application/json"
		},
		body: JSON.stringify(signUpData)
	}).then((res) => {
		return res.json();
	}).then((myRes)=>{
		console.log(JSON.stringify(myRes));
	})

	document.getElementById("status").innerHTML = text;
// }

})