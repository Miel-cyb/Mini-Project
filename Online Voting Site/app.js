// //Swapping from login and signUp
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
//  const emailInput = document.querySelector(".email");
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

signUpForm.addEventListener("submit", function (e) {
	e.preventDefault(); //preventing form from submitting
	checkUsername();
	checkEmail();
	checkPassword();
	confirmCheck();
});


      
		

// SIDEBAR TOGGLING
const sidebar = document.querySelector('.sidebar')
const menu_btn = document.querySelector('.sidebar-toggle');
const close_btn = document.querySelector('.close-btn')

menu_btn.addEventListener("click",function(){
    sidebar.classList.add('sidebar-show');  
	console.log("click");
})
close_btn.addEventListener("click", function () {
	sidebar.classList.remove("sidebar-show");
});




// // VOTING PAGE

// Define the voting time interval in milliseconds (e.g., 5 minutes)
    const votingTimeInterval = 5 * 60 * 1000; // 5 minutes

    // Object to store the click counts for each candidate
    let clickCounts = {};

    // Get the element where the time and vote results will be displayed
    const timeDisplay = document.getElementById('time-display');
    const voteResults = document.getElementById('vote-results');
    const menuButton = document.getElementById('menu-button');

    // Function to update the time display
    function updateRemainingTime(remainingTime) {
      const minutes = Math.floor(remainingTime / 60000);
      const seconds = Math.floor((remainingTime % 60000) / 1000);
      timeDisplay.textContent = `Time Remaining: ${minutes} minutes ${seconds} seconds`;
    }

    // Function to disable voting and display the vote results
    function endVoting() {
      // Remove all the content on the page
      document.body.innerHTML = '';

      // Display a message to the user
      const message = document.createElement('p');
      message.textContent = 'Voting is closed.';
      document.body.appendChild(message);

      // Redirect the user to index.html after 2 seconds
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    }

    // Function to handle button clicks
    function handleVoteClick(event) {
      const button = event.target;
      const name = button.getAttribute('data-id');
      const category = button.getAttribute('data-category');

      // Disable all buttons in the same category
      const categoryButtons = document.querySelectorAll(`.vote[data-category="${category}"]`);
      categoryButtons.forEach(categoryButton => {
        categoryButton.disabled = true;
      });

      // Increment the click count for the corresponding candidate
      if (clickCounts.hasOwnProperty(name)) {
        clickCounts[name]++;
      } else {
        clickCounts[name] = 1;
      }
    }

    // Function to reset the voting state
    function resetVoting() {
      // Enable all the vote buttons
      const voteButtons = document.querySelectorAll('.vote');
      voteButtons.forEach(button => {
        button.disabled = false;
      });

      // Clear the vote results
      voteResults.innerHTML = '';

      // Reset the click counts
      clickCounts = {};

      // Start the voting timer again
      startVotingTimer();
    }

    // Function to start the voting timer
    function startVotingTimer() {
      // Calculate the specific end time as the current time plus the voting time interval
      const specificEndTime = Date.now() + votingTimeInterval;

      // Calculate the remaining time from the current time to the specific end time
      const currentTime = Date.now();
      const remainingTime = Math.max(specificEndTime - currentTime, 0);

      // Display the initial remaining time
      updateRemainingTime(remainingTime);

      // Set the time interval for voting
      setTimeout(() => {
        endVoting();
        updateRemainingTime(0);
      }, remainingTime);

      // Update the time display every second
      const timer = setInterval(() => {
        const currentTime = Date.now();
        const remaining = Math.max(specificEndTime - currentTime, 0);
        updateRemainingTime(remaining);

        if (remaining === 0) {
          clearInterval(timer);
          endVoting();
        }
      }, 1000);
    }

    // Start the initial voting timer
    startVotingTimer();

    // Add event listeners to vote buttons
    const voteButtons = document.querySelectorAll('.vote');
    voteButtons.forEach(button => {
      button.addEventListener('click', handleVoteClick);
    });

	// const buttons = document.querySelectorAll(".vote");
     
	// buttons.forEach(function (button) {
	// 	button.addEventListener("click", function (e) {
	// 	let nameID = e.currentTarget.dataset.id;
	// 		const aspirantName = aspirants.filter(function(identity){
	// 			if(identity.name === nameID){
	// 				console.log(nameID)
	// 			}
	// 		})
    //     })
	// });

