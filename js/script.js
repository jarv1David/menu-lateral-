const bars = document.querySelector('.icon__bar');
const menu = document.querySelector('.container__nav');

bars.addEventListener('click', function() {
	menu.classList.toggle('trasladar');
	bars.classList.toggle('move__bar');
});