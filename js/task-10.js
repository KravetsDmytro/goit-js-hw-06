function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// створити функцію яка створює бокс 30на 30 і збільшує на 10 . 


function createBoxes(amount) {
  let parameterOfCreatedElement = 70;
  const arrOfCreatedElements = [];

  for (let i = 0; i < amount; i += 1) {
    const createdElement = document.createElement("div");
    createdElement.style.width = parameterOfCreatedElement + "px";
    createdElement.style.height = parameterOfCreatedElement + "px";
    parameterOfCreatedElement += 10;
    // зміна колору за функц.
    createdElement.style.backgroundColor = getRandomHexColor();
    arrOfCreatedElements.push(createdElement);
    console.log (createdElement)
  }
console.log (arrOfCreatedElements)
  return arrOfCreatedElements;
};

// пошук  та присвоєння змінних 
const inputNumber = document.querySelector("[type = 'number']");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

// відловлення подій  при кліці
createBtn.addEventListener("click", onCreate);
destroyBtn.addEventListener("click", onDestroy);


function onCreate(event) {
  const elements = createBoxes(inputNumber.value);
  console.log(elements)
  boxes.append(...elements);
}

function onDestroy(event) {
  boxes.innerHTML = "";
}