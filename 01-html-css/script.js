const product = "カフェラテ";
const price = 500;

const menuMessage = document.querySelector("#menu-message");

menuMessage.textContent = "本日のおすすめは" + product + "、" + price + "円です";

console.log(menuMessage.classList.contains("highlight"))

menuMessage.classList.add("highlight");

console.log(menuMessage.classList.contains("highlight"));

menuMessage.classList.remove("highlight");

console.log(menuMessage.classList.contains("highlight"));