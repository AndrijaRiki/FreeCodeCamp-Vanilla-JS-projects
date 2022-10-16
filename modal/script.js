let openModal = document.querySelector('#openModal');
let closeModal = document.querySelector('#closeModal');
let modal = document.querySelector('#modal');

openModal.addEventListener('click', () => {
    modal.style.display = "block";
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});