document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.recommendation-form');
    const recommendationContainer = document.querySelector('.recommendations-container'); // Correct container for recommendations
    const modal = document.getElementById('thankYouModal');
    const closeButton = document.getElementById('closeButton');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value.trim();
        const message = document.getElementById('message').value.trim();

        if (message === "") {
            alert("Please enter a message."); // Alert if the message is empty
            return;
        }

        // Create a new recommendation box
        const newRecommendation = document.createElement('div');
        newRecommendation.classList.add('recommendation-box');
        newRecommendation.innerHTML = `"${message}" - <strong>${name ? name : 'Anonymous'}</strong>`;

        // Append the new recommendation to the recommendations container
        recommendationContainer.appendChild(newRecommendation);

        // Clear the form fields after submission
        form.reset();

        // Show the thank you modal
        modal.style.display = "block";
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function() {
        modal.style.display = "none"; // Hide the modal when the close button is clicked
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the modal if the user clicks outside of it
        }
    });
});

