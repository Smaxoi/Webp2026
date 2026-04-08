var count = 1;

function addfunction() {
  var btn = document.createElement("button");
  btn.innerHTML = `CLICK ME (${count})`; // 使用反引號
  btn.setAttribute("id","btn_" + count);
  btn.setAttribute("class","btn btn-outline-danger m-1");
  document.body.appendChild(btn);
  count++;
}

function delfunction() {
  if (count > 1) {
    count--;
    var btn = document.getElementById("btn_" + count);
    if (btn) {
      document.body.removeChild(btn);
    }
  }
}
