const product = "カフェラテ";
const price = 500;

const menuMessage = document.querySelector("#menu-message");

menuMessage.textContent = "本日のおすすめは" + product + "、" + price + "円です";

menuMessage.classList.add("highlight");