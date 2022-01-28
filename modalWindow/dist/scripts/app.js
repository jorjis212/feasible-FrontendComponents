
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModals = document.querySelector('.close-modal');
const showModalBtns = document.querySelectorAll('.show-modal');

showModalBtns.forEach((item) => {
    item.onclick = () => {
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
    };
});

function closeModal() {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
}

// handle click event
overlay.onclick = closeModal;
closeModals.onclick = closeModal;