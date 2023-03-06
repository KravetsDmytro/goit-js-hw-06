// рахує і виведе в консоль кількість категорій
//  в ul#categories, тобто елементів li.item.

const categoriesItems = document.querySelectorAll('.item');
console.log(`Number of categories:  ${categoriesItems.length}`);


categoriesItems.forEach((element) => {
    const titleEl = element.querySelector('h2').textContent;
    const liElement = element.querySelectorAll('li').length;
    console.log(`Category: ${titleEl}`) ;
    console.log(`Elements: ${liElement}`);
})


