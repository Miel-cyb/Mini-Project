//Swapping from login and signUp
const signUpBtn = document.querySelector("#signUp");
const loginBtn = document.querySelector("#login");
const login = document.querySelector("#loginForm");
const btn = document.querySelector("#btn");
const signUpForm = document.querySelector("#signUpForm");

loginBtn.addEventListener("click", function () {
	login.style.left = "50px";
	signUpForm.style.left = "450px";
	btn.style.left = "0px";
});

signUpBtn.addEventListener("click", function () {
	swap();
});

function swap() {
	login.style.left = "-400px";
	signUpForm.style.left = "50px";
	btn.style.left = "110px";
}

//Validating the form
 const emailInput = document.querySelector(".email");
	const  username = document.querySelector(".username");
	const createPassword = document.querySelector(".create-password");;
	const confirmPassword = document.querySelector(".confirm-password");
	const usernameField= document.querySelector(".username-error");
	const emailField = document.querySelector(".email-error");
	const passwordField = document.querySelector(".passwordError");
    const confirmField = document.querySelector(".confirm-passwordError")


// username
function checkUsername(){
   if(username.value === ""){
   usernameField.classList.add("show");
   }

}

// // email
function checkEmail(){
	const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (emailInput.value === ""){
	emailField.classList.add("show");
 }
 else if (!emailInput.value.match(pattern)){
	alert("email must contain some characters,@ symbol and a domain(e.g .com)");
 }
}

// password
 function checkPassword(){
	const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	if(createPassword.value ===""){
		alert("password can't be empty")
        passwordField.classList.add("show")
	}
	else if(!createPassword.value.match(pattern)){
		passwordField.classList.add("show")
	}
 }
 function confirmCheck(){
	if(!confirmPassword.value.match(createPassword)){
		confirmField.classList.add("show")
	}
 }


// firebase authentication


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
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

















signUpForm.addEventListener("submit", function (e) {
	e.preventDefault(); //preventing form from submitting
	checkUsername();
	checkEmail();
	checkPassword();
	confirmCheck();
});
