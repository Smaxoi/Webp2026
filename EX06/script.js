
const container = document.getElementById('container');


function randomString() {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  const length = Math.floor(Math.random() * 3); // 0,1,2
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}


window.onload = function () {
  container.textContent = randomString();
};

window.addEventListener("keyup", function (e) {
  if (e.key === 'Escape') {
    container.textContent = "";
  } else if (e.key === 'Backspace') {
    container.textContent = container.textContent.slice(0, -1);
  } else if (e.key.length === 1) {
    container.textContent += e.key;
  }
});