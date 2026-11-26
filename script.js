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

// --- 兔兔名字產生器 ---
const generateNameBtn = document.getElementById("generate-name-btn");
const bunnyNameDisplay = document.getElementById("bunny-name-display");

const bunnyNames = [
    "麻糬 (Mochi)",
    "奶油泡芙",
    "焦糖布丁",
    "雪球 (Snowball)",
    "黑糖珍珠",
    "肉桂捲",
    "白玉湯圓",
    "可可亞",
    "豆花",
    "年糕",
    "棉花糖",
    "栗子蒙布朗",
    "奶蓋",
    "小饅頭",
    "波霸",
    "oreo（奧利奧）",
    "草莓大福",
    "地瓜球"
];

let lastIndex = -1; // 用來記錄上一次抽到的號碼，避免連續抽到重複名字

generateNameBtn.addEventListener("click", () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * bunnyNames.length);
    } while (randomIndex === lastIndex);
    
    lastIndex = randomIndex;
    bunnyNameDisplay.textContent = "🐰 " + bunnyNames[randomIndex];
});