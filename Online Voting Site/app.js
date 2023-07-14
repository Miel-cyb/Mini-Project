//Swapping from login and signUp
// const signUpBtn = document.querySelector("#signUp");
// const loginBtn = document.querySelector("#login");
// const login = document.querySelector("#loginForm");
// const btn = document.querySelector("#btn");
// const signUpForm = document.querySelector("#signUpForm");

// loginBtn.addEventListener("click", function () {
// 	login.style.left = "50px";
// 	signUpForm.style.left = "450px";
// 	btn.style.left = "0px";
// });

// signUpBtn.addEventListener("click", function () {
// 	swap();
// });

// function swap() {
// 	login.style.left = "-400px";
// 	signUpForm.style.left = "50px";
// 	btn.style.left = "110px";
// }


// //Validating the form
//     const emailInput = document.querySelector(".email");
// 	const  username = document.querySelector(".username");
// 	const createPassword = document.querySelector(".create-password");;
// 	const confirmPassword = document.querySelector(".confirm-password");
// 	const usernameField= document.querySelector("username-field");
// 	const emailField = document.querySelector(".email-field");
// 	const passwordField = document.querySelector("password-field");

// // username
// function checkUsername(){
//    if(username.value === ""){
// 	alert("Username can't be empty");
//    }
//    else if(username.value <=2){
// 	alert("Username must be at least 3 characters")
//    }
//    return "Success";
// }
	
// // // email
// function checkEmail(){
// 	const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//  if (emailInput.value === ""){
// 	alert("email field can't be empty");
//  }
//  else if (!emailInput.value.match(pattern)){
// 	alert("email must contain some characters,@ symbol and a domain(e.g .com)");
//  } 
// }

// // password
//  function checkPassword(){
// 	const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// 	if(createPassword.value ===""){
// 		alert("password can't be empty")
// 	}
// 	else if(!createPassword.value.match(pattern)){
// 		alert("Password be at least 8 characters long: must contain a number,lowercase and uppercase")
// 	}
//  }
//  function confirmCheck(){
// 	if(!confirmPassword.value.match(createPassword)){
// 		alert("Password mismatch")
// 	}
//  }

// signUpForm.addEventListener("submit", function (e) {
// 	e.preventDefault(); //preventing form from submitting
// 	checkUsername();
// 	checkEmail();
// 	checkPassword();
// 	confirmCheck();
// });


      
		

// SIDEBAR TOGGLING
// const sidebar = document.querySelector('.sidebar')
// const menu_btn = document.querySelector('.sidebar-toggle');
// const close_btn = document.querySelector('.close-btn')

// menu_btn.addEventListener("click",function(){
//     sidebar.classList.add('sidebar-show');  
// 	console.log("click");
// })
// close_btn.addEventListener("click", function () {
// 	sidebar.classList.remove("sidebar-show");
// });




// VOTING PAGE
	const buttons = document.querySelectorAll(".vote");
     const name = document.querySelectorAll(".name");

	buttons.forEach(function (button) {
		button.addEventListener("click", function (name) {
			console.log(name.currentTarget);
        })
	});
