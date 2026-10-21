const menuMessage = document.querySelector("#menu-message");
const messageButton = document.querySelector("#message-button");

menuMessage.textContent = "本日のおすすめはカフェラテです";

function toggleHighlight() {
    menuMessage.classList.toggle("highlight");
}

messageButton.addEventListener("click", toggleHighlight);