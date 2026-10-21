const menuMessage = document.querySelector("#menu-message");

function showMessage() {
    menuMessage.textContent = "本日のおすすめはカフェラテです";
    menuMessage.classList.add("highlight");
}

showMessage();