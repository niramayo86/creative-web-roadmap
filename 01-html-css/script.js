const menuMessage = document.querySelector("#menu-message");
const messageButton = document.querySelector("#message-button");
const teaButton = document.querySelector("#tea-button");

function showMessage(message) {
    menuMessage.textContent = message;
    menuMessage.classList.add("highlight");
}

function showLatte() {
    showMessage("本日のおすすめはカフェラテです");
}

function showTea() {
    showMessage("本日のおすすめは紅茶です");
}

messageButton.addEventListener("click", showLatte);
teaButton.addEventListener("click",showTea);