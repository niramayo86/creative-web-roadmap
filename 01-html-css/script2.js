console.log("JavaScriptを読み込みました");

const breads = [
    "クロワッサン : 280円",
    "バケット : 350円",
    "食パン : 320円"
];

const breadList = document.querySelector("#bread-list");
const breadButton = document.querySelector("#bread-button");

function showBreads() {
    if (breadList.classList.contains("highlight")) {
        breadList.textContent = "";
        breadList.classList.remove("highlight")
    } else {
    
        for (const bread of breads) {
            const item = document.createElement("li");
            item.textContent = bread;
            breadList.append(item);
        }

    breadList.classList.add("highlight");
    }
    
}
   
breadButton.addEventListener("click", showBreads);