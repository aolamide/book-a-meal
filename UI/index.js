
//NavBar
const toggleNav = document.getElementById("toggleNav");
const dropdown = document.querySelector(".dropdown");
let dropped = false;
const container = document.getElementById("container");
const cartButton = document.getElementById("cart");

toggleNav.addEventListener("click", () => {
	dropped = !dropped;
	if(dropped){
		dropdown.style.display = "block";
	}else{
		dropdown.style.display = "none";
	}
});
window.addEventListener('resize', () => {
	if (window.innerWidth > 800) {
		dropdown.style.display = "block";
	}
});

cartButton.addEventListener("click", (e) => {
	e.preventDefault();
	container.classList.add("cart-container");
});

