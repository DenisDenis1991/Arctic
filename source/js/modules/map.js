const map = () => ymaps.ready(() => {
  let myMap = new ymaps.Map('map', {
    center: [59.937595, 30.322805],
    zoom: 16,
    controls: [
      'zoomControl', // Ползунок масштаба
      'routeButtonControl', // Панель маршрутизации
      'fullscreenControl' // Полноэкранный режим
    ],
  });

  let myPlacemark = new ymaps.Placemark([59.937595, 30.322805], {
    hintContent: 'Круизы в Антарктику',
    balloonContent: 'Волшебный мир айсбергов и пингвинов',
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/sprite/mark.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [-18, -11],
  });

  let zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: 'small',
    },
  });

  myMap.controls.add(zoomControl);
  myMap.geoObjects.add(myPlacemark);
});

export {map};
