let menu = document.querySelector('#menu');
let openMenu = document.querySelector('#openMenu');
let closeMenu = document.querySelector('#closeMenu');

openMenu.addEventListener('click', () => {
    menu.style.transform = "translateX(0)";
});

closeMenu.addEventListener('click', () => {
    menu.style.transform = "translateX(-100%)";
});