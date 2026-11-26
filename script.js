let count = 0;
const carrotBtn = document.getElementById("carrot-btn");
const carrotCount = document.getElementById("carrot-count");
const reactionText = document.getElementById("bunny-reaction");

const messages = [
    "🐰 咔滋咔滋！兔兔開心地動了動耳朵～",
    "🐇 好好吃喔！兔兔原地跳了一個 Bunny Binky！",
    "🥰 兔兔吃飽了，正用前腳洗臉臉！",
    "🥕 提示：紅蘿蔔糖分高，記得也要多吃提摩西牧草喔！",
    "💤 兔兔幸福地變成一顆麻糬攤平了～"
];

carrotBtn.addEventListener("click", () => {
    count++;
    carrotCount.textContent = count;
    
    // 隨機挑選一句兔兔的可愛反應
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    reactionText.textContent = randomMsg;
});