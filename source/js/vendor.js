// Swiper 7.4.1
// import './vendor/swiper';
import './vendor/focus-visible-polyfill';
// import {getApiMap} from './vendor/map';
const getApiMap = () => {
  setTimeout(() => {
    let elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.src = 'https://api-maps.yandex.ru/2.0/?load=package.standard&lang=ru-RU';
    document.getElementsByTagName('footer')[0].after(elem);
  }, 0);
};

getApiMap();
