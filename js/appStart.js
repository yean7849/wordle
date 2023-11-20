function appStart() {
  const handlekeydown = (event) => {
    const key = event.key;
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(".board-colum[data-index=['00']");
    thisBlock.innerText = key;
  };

  window.addEventListener("keydown", handlekeydown);
}
