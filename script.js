//Add the active class to the nav element clicked (removing it from the others)
const navLinks = document.getElementsByClassName('nav-link');
for(let link of navLinks){
	link.addEventListener('click', function(){
		let activeLink = document.getElementsByClassName('active');
		activeLink[0].classList.remove('active');
		this.classList.add('active');
	})
}

//Add active class to the nav element showing on scroll

//Show the menu when you click on the nav-icon
const navIcon = document.getElementsByClassName('nav-icon');
navIcon[0].addEventListener('click', function(){
	for(let link of navLinks){
		//link.style.display = 'block';
		link.classList.toggle('show');
	}
})