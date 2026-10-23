const menuMessage = document.querySelector("#menu-message");

menuMessage.textContent = "本日のおすすめはカフェラテです";

menuMessage.classList.add("highlight");

if (menuMessage.classList.contains("highlight")) {
    console.log("強調表示中です");
} else {
    console.log("通常の状態です");
}