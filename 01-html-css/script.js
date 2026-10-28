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