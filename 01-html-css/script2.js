const product = "クロワッサン";
const price = 280;
let quantity = 2;
let total = price * quantity;
const menumessage = document.querySelector("#menu-message");

menumessage.textContent = "本日のおすすめ：" + product + " (" + quantity + "個で" + total + "円)";

console.log(menumessage.classList.contains("highlight"));

menumessage.classList.add("highlight");

console.log(menumessage.classList.contains("highlight"));

menumessage.classList.remove("highlight");

console.log(menumessage.classList.contains("highlight"));

menumessage.classList.toggle("highlight");

console.log(menumessage.classList.contains("highlight"));

console.log("要素の確認：", menumessage);
console.log("文字の確認：", menumessage.textContent);