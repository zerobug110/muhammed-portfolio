//variables
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button');
const overlay = document.getElementById('overlay');

//open modal when click on project
openModalButtons.forEach( button => {
    button.addEventListener('click',() => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

//close modal when click outside of the modal
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal)
    });
});

//close modal when click on project
closeModalButtons.forEach( button => {
    button.addEventListener('click',() =>  {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});


//add active class when on project modal
function openModal(modal) {
    if (modal == null) return 
    modal.classList.add('active');
    overlay.classList.add('active');
}

//remove class when click close
function closeModal(modal) {
    if (modal == null) return 
    modal.classList.remove('active');
    overlay.classList.remove('active');
}