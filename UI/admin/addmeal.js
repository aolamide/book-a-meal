const addButton = document.getElementById('add-btn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const deleteMeal = document.querySelectorAll('.btn-delete');
const modifyMeal = document.querySelectorAll('.btn-modify');
const name = document.getElementById('name');
const price = document.getElementById('price');
const link = document.getElementById('link');

addButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  name.value = '';
  price.value = '';
  link.value = '';
});

deleteMeal.forEach((button) => {
	button.addEventListener('click', () => {
		let mealDiv = button.parentNode.parentNode
		mealDiv.parentNode.removeChild(mealDiv);
	});
})

modifyMeal.forEach((button) => {
	button.addEventListener('click', () => {
		modal.style.display = 'block';
		const parent = button.parentNode;
		const priceValue = parent.previousElementSibling;
		const nameValue = priceValue.previousElementSibling;
		name.value = nameValue.innerText;
		price.value = priceValue.innerText;
		link.value = 'https://placehold.it/355'
	});
})