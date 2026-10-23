const menuMessage = document.querySelector("#menu-message");
const messageButton = document.querySelector("#message-button");
const baguetteButton = document.querySelector("#baguette-button");
const closebutton = document.querySelector("#close-button");

function showMessage(message) {
    menuMessage.textContent = message;
    menuMessage.classList.add("highlight");
}

function showcroissant() {
    showMessage("クロワッサンは280円です");
}

function showbaguette() {
    showMessage("バゲットは350円です");
}

function showclose() {
    showMessage("");
    menuMessage.classList.remove("highlight");
}

messageButton.addEventListener("click", showcroissant);
baguetteButton.addEventListener("click", showbaguette);
closebutton.addEventListener("click", showclose);