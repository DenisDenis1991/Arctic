// Swiper 7.4.1
// import './vendor/swiper';
import './vendor/focus-visible-polyfill';
const getApiMap = () => {
  setTimeout(() => {
    let elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.src = 'https://api-maps.yandex.ru/2.0/?apikey=2b551293-1586-44a8-bdd7-1d6240e7eb55&load=package.standard&lang=ru-RU';
    document.getElementsByTagName('footer')[0].after(elem);
  }, 0);
};

getApiMap();
