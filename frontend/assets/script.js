document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const body = document.body;
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    // When "Sign Up" button is clicked
    registerBtn.addEventListener("click", () => {
        container.classList.add("active");  // Activate the container (show Sign Up)
        body.classList.add("active");      // Change the background to light green
    });

    // When "Sign In" button is clicked
    loginBtn.addEventListener("click", () => {
        container.classList.remove("active");  // Deactivate the container (show Sign In)
        body.classList.remove("active");      // Restore the background to the default
    });
});
