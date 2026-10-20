const target = document.querySelector("#menu-message");

target.textContent = "本日のおすすめはカフェラテです";

target.classList.add("highlight");

console.log(target.classList.contains("highlight"));