import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {map} from './modules/map';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  const openMenu = document.querySelector('.header__button');
  const userNav = document.querySelector('.user-nav');
  const headerBox = document.querySelector('.header__box');

  openMenu.addEventListener('click', (evt) => {
    evt.preventDefault();
    openMenu.classList.toggle('header__button--close');
    userNav.classList.toggle('user-nav--menu');
    headerBox.classList.toggle('header__box--menu');
  });

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    map();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)


// const GET = 'https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU%22%3E';

// const asd = ()=>{

// };

// const getData = (resolve, rejected) => {
//   fetch(GET)
//       .then((response) => response.json())
//       .then((bookings) => {
//         console.log(bookings);
//         resolve(bookings);
//       })
//       .catch(() => {
//         rejected(console.log('asdasd'));
//       });
// };

// getData((data) => {
//   console.log(data);
// }, asd);
