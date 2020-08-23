// Init Github class
const github = new Github();

// Init UI class
const ui = new UI();

// Search Input
const searchUser = document.querySelector("#searchUser");

// Seach input event listener
searchUser.addEventListener("keyup", (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText !== "") {
        // Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === "Not Found") {
                    // Show alert
                    ui.showAlert("User not found", "alert alert-danger");
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                }
            })
    } else {
        // Clear profile
        ui.clearProfile();
    }
});