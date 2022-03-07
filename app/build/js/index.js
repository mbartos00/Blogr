import whiteArrow from '../images/icon-arrow-light.svg';

const burger = document.querySelector('.header__nav--burger');
const burgerBtn = document.querySelector('.header__nav--burger-btn');
const menu = document.querySelector('.header__nav--menu');

const menuItem = document.querySelectorAll('.header__nav--menu-list__item');
const hiddenMenu = document.querySelector('.header__nav--menu-hidden');

const arrows = document.querySelectorAll('.jsArrow');

//open menu
burger.addEventListener('click', () => {
  if (burgerBtn.classList.contains('active')) {
    burgerBtn.classList.remove('active');
    menu.classList.remove('active');
  } else {
    burgerBtn.classList.add('active');
    menu.classList.add('active');
  }
});

menuItem &&
  menuItem[2].addEventListener('click', () => {
    if (hiddenMenu.classList.contains('active')) {
      arrows[2].style.transform = 'rotate(0deg)';
      hiddenMenu.classList.remove('active');
    } else {
      arrows[2].style.transform = 'rotate(180deg)';
      hiddenMenu.classList.add('active');
    }
  });

//change source of arrow on desktop breakpoint
if (window.matchMedia('screen and (min-width:48rem)').matches) {
  for (let arrow of arrows) {
    arrow.setAttribute('src', whiteArrow);
  }
}
