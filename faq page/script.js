let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    var plusBtn = card.querySelector('.plus');
    var minusBtn = card.querySelector('.minus');
    var answer = card.querySelector('.answer');

    plusBtn.addEventListener('click', () => {
        answer.style.display = "block";
        plusBtn.style.display = "none";
        minusBtn.style.display = "block";
    });

    minusBtn.addEventListener('click', () => {
        answer.style.display = "none";
        plusBtn.style.display = "block";
        minusBtn.style.display = "none";
    });
});