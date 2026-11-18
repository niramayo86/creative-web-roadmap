const products = ["カフェラテ", "コーヒー", "紅茶", "ココア"];
const productList = document.querySelector("#product-list");
const showButton = document.querySelector("#show-products")

function showProducts() {
    productList.textContent = "";

    for (const product of products) {
        const item = document.createElement("li");
        item.textContent = product;
        productList.append(item);
    }
}

showButton.addEventListener("click", showProducts);

const heroImage = document.querySelector(".hero-image");
const fadeButton = document.querySelector("#fade-button");

function fadeImage () {
    heroImage.classList.toggle("faded");
}

fadeButton.addEventListener("click", fadeImage);

const messageButton = document.querySelector("#message-button");
const menuMessage = document.querySelector("#menu-message");

messageButton.addEventListener("click", function() {
    menuMessage.textContent = "カフェラテ：150 bells";
});

const teaButton = document.querySelector("#tea-button");

teaButton.addEventListener("click", function() {
    menuMessage.textContent = "紅茶：150 bells";
});

document.querySelector("form").addEventListener("submit", function() {
    alert("送信イベントが発生した！");
});

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("入力チェック成功！実際の送信はしていません。");
});