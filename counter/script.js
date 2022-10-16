let counter = document.querySelector('#count');
let plus = document.querySelector('#plus');
let minus = document.querySelector("#minus");
let reset = document.querySelector("#reset");

plus.addEventListener('click', () => {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
});
minus.addEventListener('click', () => {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
});
reset.addEventListener('click', () => {
    counter.innerHTML = 0;
})