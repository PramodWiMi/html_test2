document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Store data in local storage
    const data = {
        name: name,
        email: email
    };
    localStorage.setItem("formData", JSON.stringify(data));

    alert("Data saved to local storage.");
});
