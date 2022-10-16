let colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple'
];
let btn;
let bgColor = document.querySelector('#bg-color');
let body = document.querySelector('body');

function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}

let color = random_item(colors);
body.style.backgroundColor = color;
bgColor.innerHTML = color;
bgColor.style.color = color;

document.querySelector('#biraj').addEventListener('click', () => {
    color = random_item(colors);
    body.style.backgroundColor = color;
    bgColor.innerHTML = color;
    bgColor.style.color = color;
});