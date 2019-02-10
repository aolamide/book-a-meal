const addButton = document.getElementById('add-btn');
const Modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

addButton.addEventListener('click', () => {
    Modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    Modal.style.display = 'none';
});