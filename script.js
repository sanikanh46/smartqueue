
let nextToken = 1;
let peopleWaiting = 0;

const tokenDisplay = document.getElementById("token");
const waitingDisplay = document.getElementById("waiting");
const message = document.getElementById("message");
const button = document.getElementById("getToken");

button.addEventListener("click", function () {
    tokenDisplay.textContent = nextToken;

    peopleWaiting++;
    waitingDisplay.textContent = peopleWaiting;

    message.textContent =
        "Your token is " + nextToken + ". Please wait for your turn!";

    nextToken++;
});
