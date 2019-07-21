//Add the active class to the nav element clicked (removing it from the others)
//Also hide the menu when you click on a link on mobile
const navLinks = document.getElementsByClassName('nav-link');
const navIcon = document.getElementsByClassName('nav-icon');
for(let link of navLinks){
	link.addEventListener('click', function(){
		let activeLink = document.getElementsByClassName('active');
		activeLink[0].classList.remove('active');
		this.classList.add('active');
		if(window.innerWidth < 600){
			for(let i=0; i<navLinks.length; i++){
				navLinks[i].classList.toggle('show');
			}
		}
	})
}

//TODO Add active class to the nav element showing on scroll

//Show/hide the menu when you click on the nav-icon
navIcon[0].addEventListener('click', function(){
	for(let link of navLinks){
		link.classList.toggle('show');
	}
})

//Move avatar up to be level with the top of the navigation
const nav = document.getElementsByClassName('navigation');
const navHeight = nav[0].offsetHeight;
const avatar = document.getElementById('avatar');
avatar.style.top = navHeight * -1 + 'px';
//And resize it to fit the navHeight
document.getElementById('avatar-img').style.height = navHeight + 'px';
