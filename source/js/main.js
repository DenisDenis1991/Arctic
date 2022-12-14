import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initMenu, initJs} from './modules/menu';
import {map} from './modules/map';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------


  iosVhFix();

  // Modules
  // ---------------------------------
  // initJs();

  initMenu();

  const input = document.getElementsByName('phone');
  const formBtn = document.querySelector('.form__btn');
  const prefixNumber = (str) => {
    if (str === '7') {
      return '7 (';
    }
    if (str === '8') {
      return '8 (';
    }
    if (str === '9') {
      return '7 (9';
    }
    return '7 (';
  };

  input.forEach((element) => element.addEventListener('input', () => {
    const value = element.value.replace(/\D+/g, '');
    const numberLength = 11;
    const minLength = 18;
    let result;
    if (element.value.includes('+8') || element.value[0] === '8') {
      result = '';
    } else {
      result = '+';
    }

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 0:
          result += prefixNumber(value[i]);
          continue;
        case 4:
          result += ') ';
          break;
        case 7:
          result += '-';
          break;
        case 9:
          result += '-';
          break;
        default:
          break;
      }
      result += value[i];
    }
    element.value = result;
    if (element.value.length !== minLength) {
      formBtn.disabled = true;
    } else {
      formBtn.disabled = false;
    }
  })
  );


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
