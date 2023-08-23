//Swapping from login and signUp
const signUpToggle = document.querySelector("#signUp");
const loginToggle= document.querySelector("#login");
const login = document.querySelector("#loginForm");
const btn = document.querySelector("#btn");
const signUpForm = document.querySelector("#signUpForm");
const signUpBtn = document.querySelector(".signUp-button");
const loginBtn = document.querySelector(".login-button");

loginToggle.addEventListener("click", function () {
	login.style.left = "50px";
	signUpForm.style.left = "450px";
	btn.style.left = "0px";
});

signUpToggle.addEventListener("click", function () {
	swap();
});

function swap() {
	login.style.left = "-400px";
	signUpForm.style.left = "50px";
	btn.style.left = "110px";
}

//Validating the form
 const emailInput = document.querySelector("#email");
	const  usernameInput = document.querySelector(".username");
	const userPassword = document.querySelector(".create-password");;
	const confirmPassword = document.querySelector(".confirm-password");
	const usernameField= document.querySelector(".username-error");
	const emailField = document.querySelector(".email-error");
	const passwordField = document.querySelector(".passwordError");
    const confirmField = document.querySelector(".confirm-passwordError")
	const loginEmail = document.querySelector("#loginEmail");
	const loginPassword= document.querySelector(".loginPassword")


//  // username
// function checkUsername(){
//    if(usernameInput.value === ""){
//    usernameField.classList.add("show");
//    }
//    else{
// 	usernameField.classList.remove("show");
//    }
// }

// // // email
// function checkEmail(){
// 	const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//  if (emailInput.value === " "){
// 	alert("email field can't be empty")
//  }
// }
// // password
//  function checkPassword(){
// 	const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// 	if(userPassword.value ===""){
// 		alert("password can't be empty")
// 	}
// 	else if(!userPassword.value.match(pattern)){
// 		passwordField.classList.add("show")
// 	}
// 	else{
// 		passwordField.classList.remove("show")
// 	}
//  }
//  function confirmCheck(){
// 	if(!confirmPassword.value.match(userPassword)){
// 		confirmField.classList.add("show")
// 	}
// 	else{
// 		confirmField.classList.remove("show");
// 	}
//  }


// firebase authentication


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
 } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAO-iDNRXVE5m8NQ6DEhSBWit8imbVkcaM",
    authDomain: "miniprojectauth-f766e.firebaseapp.com",
    projectId: "miniprojectauth-f766e",
    storageBucket: "miniprojectauth-f766e.appspot.com",
    messagingSenderId: "773488072934",
    appId: "1:773488072934:web:071fef64146d1f994bc327",
    measurementId: "G-HT8HK3Y0BT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

const userSignUp = async () => {
	const signUpEmail = emailInput.value;
	const signUpPassword = userPassword.value;
	createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
			alert("Your account has been created");
			console.log(signUpEmail);
			window.location.href ="login.html"
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(errorCode + errorMessage);
		});
};

signUpBtn.addEventListener("click", function (e) {
	e.preventDefault(); //preventing form from submitting
	userSignUp();
});


const userSignIn = async () => {
	const signInEmail = loginEmail.value;
	const signInPassword = loginPassword.value;
	signInWithEmailAndPassword(auth, signInEmail, signInPassword)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
			alert("Sign in Successful");
			window.location.href ="Polling.html"
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(errorCode + errorMessage);
		});
};

loginBtn.addEventListener("click",function(e){
	e.preventDefault();
	userSignIn();
})