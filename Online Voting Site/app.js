

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


  




		document.addEventListener("DOMContentLoaded", function () {
			const storedSelection = localStorage.getItem("candidateSelection");
			const candidateSelection = storedSelection
				? JSON.parse(storedSelection)
				: {};
            const userDetailsArray = [];
			const userDetails = JSON.parse(localStorage.getItem("userDetails"));

			const voteButtons = document.querySelectorAll(".vote");
			const removeButtons = document.querySelectorAll(".remove-vote");
			const votesResults = {}; // To store the vote counts

			voteButtons.forEach((button) => {
				button.addEventListener("click", voteHandler);
			});

			removeButtons.forEach((button) => {
				button.addEventListener("click", removeVoteHandler);
			});

			// Load votes results from local storage if available
			const storedVotesResults = localStorage.getItem("votesResults");
			if (storedVotesResults) {
				Object.assign(votesResults, JSON.parse(storedVotesResults));
				// Update vote counts on the page
				for (const candidateName in votesResults) {
					updateVoteCount(candidateName);
				}
			}

			// Function to update the vote count on the UI
			function updateVoteCount(candidateName) {
				const voteSpan = document.querySelector(
					`span[data-id="${candidateName}"]`
				);
				const currentVotes = votesResults[candidateName] || 0;
				voteSpan.textContent = currentVotes;
			}
function voteHandler(event) {
				event.preventDefault();
				const button = event.target;
				const candidateName = button.getAttribute("data-id").trim();
				const candidatePosition = button.getAttribute("data-category").trim();

				const previousSelection = candidateSelection[candidatePosition];

				if (!previousSelection) {
					candidateSelection[candidatePosition] = candidateName;
					localStorage.setItem(
						"candidateSelection",
						JSON.stringify(candidateSelection)
					);

					votesResults[candidateName] = (votesResults[candidateName] || 0) + 1;
					updateVoteCount(candidateName);

					// Show remove vote button
					const removeButton = document.querySelector(
						`.remove-vote[data-id="${candidateName}"]`
					);
					removeButton.style.display = "inline";
				} else if (previousSelection === candidateName) {
					alert(
						`You have already voted for ${candidateName} for the position of ${candidatePosition}.`
					);
				} else {
					alert(
						`A candidate has already been selected for the position of ${candidatePosition}.`
					);
				}
			}

			function removeVoteHandler(event) {
				event.preventDefault();
				const button = event.target;
				const candidateName = button.getAttribute("data-id").trim();
				const candidatePosition = button.getAttribute("data-category").trim();

				if (candidateSelection[candidatePosition] === candidateName) {
					votesResults[candidateName] = (votesResults[candidateName] || 0) - 1;
					updateVoteCount(candidateName);

					// Remove selection
					delete candidateSelection[candidatePosition];
					localStorage.setItem(
						"candidateSelection",
						JSON.stringify(candidateSelection)
					);

					// Hide remove vote button
					button.style.display = "none";

					// Enable vote button
					const voteButton = document.querySelector(
						`.vote[data-id="${candidateName}"][data-category="${candidatePosition}"]`
					);
					voteButton.disabled = false;
				}
			}


			const submitButton = document.getElementById("submit");
			submitButton.addEventListener("click", submitHandler);

			function submitHandler(event) {
				event.preventDefault();

				// Check if the user has voted by checking the candidateSelection
				const selectedPositions = Object.keys(candidateSelection);

				if (selectedPositions.length === 0) {
					alert("Please vote first before submitting.");
				} else {
					alert("Vote submitted!");

					// Push user's details to the array
					userDetailsArray.push(userDetails);

					// Store user details array in local storage
					localStorage.setItem(
						"userDetailsArray",
						JSON.stringify(userDetailsArray)
					);

					// Reset candidateSelection for new users to vote again
					localStorage.removeItem("candidateSelection");

					// Store votesResults in local storage
					localStorage.setItem("votesResults", JSON.stringify(votesResults));

					// Update vote counts and UI display
					for (const candidateName of Object.keys(votesResults)) {
						updateVoteCount(candidateName);
					}
					window.location.href = "index.html";
				}
				
			}
		
		})