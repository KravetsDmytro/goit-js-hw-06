// рахує і виведе в консоль кількість категорій
//  в ul#categories, тобто елементів li.item.

const categoriesItems = document.querySelectorAll('#categories .item');
console.log(`Number of categories:  ${categoriesItems.length}`);



// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
//  і кількість елементів в категорії (усіх <li>, вкладених в нього).

categoriesItems.forEach((element) => {
    const titleEl = element.querySelector('h2').textContent;
    const liElement = element.querySelectorAll('li').length;
    console.log(`Category: ${titleEl}`) ;
    console.log(`Elements: ${liElement}`);
})


