const 시작_시간 = new Date();

function timer() {
  const 현재_시간 = new Date();
  const 흐른_시간 = new Date(현재_시간 - 시작_시간);
  const minutes = 흐른_시간.getMinutes().toString().padStart(2, "0");
  const seconds = 흐른_시간.getSeconds().toString().padStart(2, "0");

  const timeString = `${minutes}:${seconds}`;
  document.getElementById("time").innerText = timeString;
}

setInterval(timer, 1000);

// 최초에도 한 번은 업데이트를 수행하도록 호출
timer();
