console.log('javascript running...');

const navList = document.querySelector('.nav_list');
const navButton = document.querySelector('.nav_button');
const colorBtn = document.querySelectorAll('.kleur');
let bodyBackground = document.querySelector('body');
let defaultButton = document.querySelector('#default_button');
const closeMenuBtn = document.querySelector('#close_menu_button');

console.log(navList);
console.log(colorBtn);
console.log(defaultButton);

navButton.addEventListener('mouseenter', toggleMenu = () => {navList.classList.toggle('display_nav_list')});
navButton.addEventListener('touch', toggleMenu = () => {navList.classList.toggle('display_nav_list')});

colorBtn.forEach(colorBtn => colorBtn.addEventListener('click', function toggleBackground(event) {
    console.log(event.target.id);
    bodyBackground.id = event.target.id;
    console.log(bodyBackground.id);
    defaultButton.id = 'display_default_button';
    navList.classList.toggle('display_nav_list');
}));

closeMenuBtn.addEventListener('click', toggleMenu = () => {navList.classList.toggle('display_nav_list')});

defaultButton.addEventListener('click', defaultBackground = () => {
    bodyBackground.id = 'default_background';
    navList.classList.toggle('display_nav_list');
    defaultButton.id = 'default_button';
});




console.log('...end of script run');