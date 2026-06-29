// 遊戲初始數據
let fans = 558000; // 55.8萬
let posts = 3;
let energy = 100; // 體力

// 更新畫面上的數字
function updateUI() {
    document.getElementById('fans').innerText = (fans / 10000).toFixed(1) + '萬';
    document.getElementById('posts').innerText = posts;
}

// 訓練功能
function train(type) {
    if (energy <= 0) {
        alert("體力不足，請先休息！");
        return;
    }
    
    energy -= 10; // 消耗體力
    let gain = Math.floor(Math.random() * 1000) + 500; // 隨機增加粉絲
    fans += gain;
    
    log(`你進行了${type === 'sing' ? '聲樂' : '舞蹈'}訓練，粉絲增加了 ${gain} 人！`);
    updateUI();
}

// 發布動態功能
function postMoment() {
    if (energy < 20) {
        alert("太累了，發不動動態...");
        return;
    }
    energy -= 20;
    posts += 1;
    let gain = Math.floor(Math.random() * 5000) + 1000; // 發動態漲粉更多
    fans += gain;
    
    log(`發布了一張自拍，人氣爆棚！粉絲增加了 ${gain} 人！`);
    updateUI();
}

// 休息功能
function rest() {
    energy = 100;
    log("睡了一覺，體力恢復滿啦！");
}

// 顯示日誌的小函數
function log(message) {
    const logBox = document.getElementById('game-log');
    logBox.innerText = message;
}

// 初始化
updateUI();