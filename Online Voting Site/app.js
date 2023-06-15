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
