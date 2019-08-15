//Add the active class to the nav element clicked (removing it from the others)
//Also hide the menu when you click on a link on mobile
const navLinks = document.getElementsByClassName('nav-link');
const navIcon = document.getElementsByClassName('nav-icon');

//Show/hide the menu when you click on the nav-icon
navIcon[0].addEventListener('click', function(){
	for(let link of navLinks){
		link.classList.toggle('show');
	}
})

//Move avatar up to be level with the top of the navigation
const nav = document.getElementsByClassName('navigation');
const navHeight = nav[0].offsetHeight;
//And resize it to fit the navHeight
let avatarHeight = navHeight - 2; //to account for border
document.getElementById('avatar-img').style.height = avatarHeight + 'px';

//Make all the elements of the projects boxes the same height
const captions = document.getElementsByClassName('title');
const descriptions = document.getElementsByClassName('description');
const tools = document.getElementsByClassName('tools');
setHeights();
//and we also need to do it if the window is resized
window.addEventListener('resize', setHeights);

function setHeights(){
	setHeight(captions);
	setHeight(descriptions);
	setHeight(tools);	
}

function setHeight(elements){
	resetHeight(elements); //first need to reset heights, in case they should now be smaller
	let maxHeight = 0;
	for(let element of elements){
		if(element.offsetHeight > maxHeight){
			maxHeight = element.offsetHeight;
		}
	}
	for(element of elements){
		element.style.height = maxHeight + 'px';
	}
}

function resetHeight(elements){
	for(element of elements){
		element.style.height = null;
	}	
}