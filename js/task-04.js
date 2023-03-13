// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//

const decrementBtn = document.querySelector('[data-action="decrement"]');
 const incrementBtn = document.querySelector('[data-action="increment"]');
 const value = document.querySelector('#value');
let totalValue = 0;


const clickAdd = (event) => {
    console.log(event)
    totalValue += 1;
    value.textContent = totalValue;
  };

  const clickRemove =(eveny) => {
    totalValue -= 1;
    value.textContent = totalValue;
  };

incrementBtn.addEventListener('click',  clickAdd );
decrementBtn.addEventListener('click', clickRemove );