let btnLevo = document.querySelector('#levo');
let btnDesno = document.querySelector('#desno');
let imgs = document.querySelectorAll(".review");
let idx = 0;

const displayNone =  () => {
    imgs.forEach(img => {
        img.style.display = "none";
    })
}

btnLevo.addEventListener('click', () => {
    displayNone();
    idx ++;
    
    if(idx === imgs.length)
        idx = 0;
    imgs[idx].style.display = "block";
});
btnDesno.addEventListener('click', () => {
    displayNone();
    idx --;

    if(idx === -1)
        idx = imgs.length - 1;
    imgs[idx].style.display = "block";
});