const alertBtn = document.querySelector('#alertButton');
alertBtn.addEventListener('click', alertBtnClicked = () => {alert('button clicked!')});

const backgroundBtn = document.querySelector('#backgroundButton');
const bodyBackground = document.querySelector('body');
backgroundBtn.addEventListener('click', toggleColor = () => {bodyBackground.classList.toggle('red-background')});