let position = 0;
const slidesToShow = 4;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
// const item = document.querySelector('.slider-item');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll(".slider-item");
const itemcount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
items.forEach((item) => {
item.style.minWidth = '${item Width}px';
});
btnNext.addEventListener('click', () => {
const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
setPosition();
checkBtns();
});