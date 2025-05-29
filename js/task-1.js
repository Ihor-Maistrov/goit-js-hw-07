const categories = document.querySelector('#categories')
const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

for (let i = 0; i < items.length; i++) {
    console.log(`Category: ${items[i].querySelector('h2').textContent}`);
    console.log(`Elements: ${items[i].querySelectorAll('.list-item li').length}`);   
}