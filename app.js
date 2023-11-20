const 시작_시간 = new Date();

function setTime() {
  const 현재_시간 = new Date();
  const 흐른_시간 = new Date(현재_시간 - 시작_시간);
  const minutes = 흐른_시간.getMinutes().toString(); // 여기 수정
  const seconds = 흐른_시간.getSeconds().toString(); // 여기 수정

  const timeH1 = document.querySelector(".time");

  timeH1.innerText = `${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
}

setInterval(setTime, 1000);
