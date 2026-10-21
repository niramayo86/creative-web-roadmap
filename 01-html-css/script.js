const menuMessage = document.querySelector("#menu-message");
const messageButton = document.querySelector("#message-button");

function showMessage() {
    menuMessage.textContent = "本日のおすすめはカフェラテです";
    menuMessage.classList.add("highlight");
}

messageButton.addEventListener("click", showMessage);