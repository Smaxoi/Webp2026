const container = document.getElementById('container');

// 產生 0-2 個隨機字母（初始化用）
function randomInitialString() {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  const length = Math.floor(Math.random() * 3); // 0~2
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

// 每次按鍵生成 1~3 個隨機字母
function randomAppendString() {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  const length = Math.floor(Math.random() * 3) + 1; // 1~3
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

// 初始 container
window.onload = function () {
  container.textContent = randomInitialString();
};

// 使用者輸入字串暫存
let userInput = '';

window.addEventListener("keyup", function (e) {
  if (e.key === 'Escape') {
    container.textContent = '';
    userInput = '';
  } else if (e.key === 'Backspace') {
    // 刪除使用者輸入的最後一個字元
    userInput = userInput.slice(0, -1);
  } else if (e.key.length === 1) { // 單個字元
    userInput += e.key;

    // 如果輸入正確，削掉 container 前面的字元
    if (container.textContent.startsWith(e.key)) {
      container.textContent = container.textContent.slice(1);
    }

    // 在 container 後面加上 1~3 個隨機字母
    container.textContent += randomAppendString();
  }
});