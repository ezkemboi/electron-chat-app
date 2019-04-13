var axios = require("axios");

var baseUrl = "https://shrouded-hamlet-37697.herokuapp.com";

// Allow user to login and save information in localstorage

var loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var loginDetails = JSON.stringify({
    username: username,
    password: password
  });

  axios
    .post(`${baseUrl}/login`, loginDetails)
    .then(function(response) {
      console.log("----response------", response);
      if (response.status === 200) {
        localStorage.clear();
        localStorage.setItem("data", JSON.stringify(loginDetails));
        window.location.assign("dashboard.html");
      }
    })
    .catch(function(error) {
      console.log("-----error-----", error);
    });
});
