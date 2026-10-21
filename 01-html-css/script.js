const menuMessage = document.querySelector("#menu-message");
const messageButton = document.querySelector("#message-button");
const clearButton = document.querySelector("#clear-button");

function showMessage() {
    menuMessage.textContent = "本日のおすすめはカフェラテです";
    menuMessage.classList.add("highlight");
}

function clearMessage() {
    menuMessage.textContent = "";
    menuMessage.classList.remove("highlight");
}

messageButton.addEventListener("click", showMessage);
clearButton.addEventListener("click", clearMessage);