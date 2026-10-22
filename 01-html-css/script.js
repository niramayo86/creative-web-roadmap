const menuMessage = document.querySelector("#menu-message");

function showMessage(message) {
    console.log(message);
    menuMessage.textContent = message;
    menuMessage.classList.add("highlight");
}

showMessage("本日のおすすめはカフェラテです");
showMessage("本日のおすすめは紅茶です")