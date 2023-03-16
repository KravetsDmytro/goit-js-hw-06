// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingridientLi= document.querySelector('#ingredients')


// console.log(ingridientLi)

const marcup = ingridientLi.reduce(
  (acc, ingredient) => acc + document.createElement('li')

)



// const ingredientItem = ingredients.map((ingredient) =>{
//    const items = document.createElement('li');
//    items.innerHTML = ingredient;
//       items.classList.add("item");
//    ingridientLi.append(items);
//  });
 

