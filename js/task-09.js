// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const refs ={ 
//   body: document.querySelector('body'),
//   span: document.querySelector('.color'),
//   button :  document.querySelector('.change-color')};

//   console.log(refs)
  
// refs.button.addEventListener('click', () => {
//   const randomColor = getRandomHexColor();
//   refs.body.style.backgroundColor = randomColor;
//   refs.span.textContent = randomColor;
// })

const button = document.querySelector(".change-color");

const textEl = document.querySelector(".color");

const bodyEl = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", onButtonChange);

function onButtonChange(event) {
  const ColorEl = getRandomHexColor();

  bodyEl.style.backgroundColor = ColorEl;
  textEl.textContent = ColorEl;
}