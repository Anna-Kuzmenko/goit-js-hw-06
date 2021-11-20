
const changeColorBtnEl = document.querySelector('.change-color')
const backgroundColorEl = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorBtnEl.addEventListener('click', onChangeColor);

function onChangeColor() {

  const bgcColor = getRandomHexColor();

  document.body.style.backgroundColor = bgcColor;
  backgroundColorEl.textContent = bgcColor;
}








