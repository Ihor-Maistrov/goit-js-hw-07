const categories = document.querySelector('#categories')
const items = document.querySelectorAll('h2');
console.log(`Number of categories: ${items.length}`);

for (let i = 0; i < items.length; i++) {
    console.log(`Category: ${items[i].textContent}`);
    console.log(`Elements: ${items[i].parentElement.lastElementChild.children.length}`);   
}