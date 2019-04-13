var axios = require("axios");

var baseUrl = "https://shrouded-hamlet-37697.herokuapp.com";

// Sending message to the server to be able to send response back

var dashboardSendMessage = document.getElementById("send-message-to-bot");
dashboardSendMessage.addEventListener("submit", function(event) {
  event.preventDefault();
  var message = document.getElementById("chat-area").value;
  const localData = JSON.parse(localStorage.getItem("data"));
  const newdata = {
    result: message === undefined ? null : message,
    error: null,
    id: Math.floor(198913456125 + Math.random() * 898893456124),
    from: {
      username: localData.username,
      password: localData.password
    },
    to: "chatbot"
  };
  axios
    .post(`${baseUrl}`, JSON.stringify(newdata))
    .then(function(response) {
      const responseData = JSON.parse(response.config.data);
      document.getElementById("load-user-message").innerHTML =
        responseData.result;
    })
    .catch(function(error) {
      console.log("------error message--------------", error);
    });
  axios.get(`${baseUrl}`).then(function(response) {
    var botMessage = response.data.params.text;
    localStorage.removeItem("currentmessage");
    if (typeof botMessage !== "undefined") {
      localStorage.removeItem("currentmessage");
      localStorage.setItem("currentmessage", botMessage);
      if (botMessage) {
        document.getElementById(
          "load-bot-message"
        ).innerHTML = localStorage.getItem("currentmessage");
      }
      axios.get(`${baseUrl}`).then(function(response) {
        var botMessage = response.data.params.text;
        localStorage.removeItem("currentmessage");
        if (typeof botMessage !== "undefined") {
          localStorage.removeItem("currentmessage");
          localStorage.setItem("currentmessage", botMessage);
          document.getElementById(
            "load-bot-message"
          ).innerHTML = localStorage.getItem("currentmessage");
        }
      });
    }
    // if(botMessage === "Which file would you like to upload?" ) {

    // }
  });
});

{
  /* <input type="file" name="file-upload" /> */
}
