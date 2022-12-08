import {ScrollLock} from '../utils/scroll-lock';

const toggleMenu = document.querySelector('.header__button');
const headerBox = document.querySelector('.header__box');
const introSection = document.querySelector('.intro');

const scrollLock = new ScrollLock();

const initJs = () => {
  headerBox.classList.remove('header__box--menu');
  toggleMenu.classList.remove('header__button--close');
};


const openMenu = () => {
  toggleMenu.classList.add('header__button--close');

  headerBox.classList.add('header__box--menu');
  scrollLock.disableScrolling();
  window.addEventListener('click', onWindowClick);
};

const closeMenu = () => {
  toggleMenu.classList.remove('header__button--close');
  introSection.style.marginTop = '0';
  headerBox.classList.remove('header__box--menu');
  scrollLock.enableScrolling();
  window.removeEventListener('click', onWindowClick);
};

const onWindowClick = ((e) => {
  if (!toggleMenu.contains(e.target)) {
    closeMenu();
  }
});

const onMenuClick = () => {
  if (headerBox.classList.contains('header__box--menu')) {
    closeMenu();
    return;
  } else {
    openMenu();

    return;
  }
};

const initMenu = () => {
  if (toggleMenu) {
    breakpointChecker();
  }
};

const breakpoint = window.matchMedia('(min-width:768px)');

const breakpointChecker = () => {
  if (breakpoint.matches) {
    toggleMenu.removeEventListener('click', onMenuClick);
  } else {
    toggleMenu.addEventListener('click', onMenuClick);
  }
};

breakpoint.addListener(breakpointChecker);

export {initMenu, initJs};
