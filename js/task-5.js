const bodyElem = document.querySelector("body");
const butElem = document.querySelector(".change-color");
const textElem = document.querySelector(".color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


butElem.addEventListener("click", () => {
  const n = getRandomHexColor();
  bodyElem.style.backgroundColor = n;
  textElem.textContent = n;
}); 
