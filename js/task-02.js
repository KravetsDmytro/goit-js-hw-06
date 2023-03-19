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
const array = []



ingredients.forEach((ingredient) => {
  const item = document.createElement("li")
  item.className= 'item'
  item.textContent = ingredient
  array.push(item)
});
  ingridientLi.append (...array);


// 	liArray.push(item)
// ingridientLi.append(...liArray)


// const ingredientItem = ingredients.map((ingredient) =>{
//    const items = document.createElement('li');
//    items.innerHTML = ingredient;
//       items.classList.add("item");
//    ingridientLi.append(items);
//  });
 


// // console.log(ingridientLi)

// const marcup = ingredients.reduce(
//   (acc, ingredient) => 
//  acc + document.createElement('li')
//  .textContent(${ingredient}) , ""
// );

// ingredient.innerHTML = ingredient