import './sass/main.scss';
import { getUserGeoLocation } from './js/geoLocation';
import { wait } from './js/wait';
import { createPreloaderActions } from './js/buttonPreloader';

// вывесьти на экран слово Foo через 2 секунды,
// потом вывесьти слово Bar через 3 секунды,
// потом вывесьти слово FooBar через 2 секунды

// setTimeout(() => {
//   console.log('Foo');

//   setTimeout(() => {
//     console.log('Bar');

//     setTimeout(() => {
//       console.log('FooBar');
//     }, 2000);
//   }, 3000);
// }, 2000);

wait(2000)
  .then(() => {
    // console.log('Foo');

    return wait(3000);
  })
  .then(() => {
    // console.log('Bar');

    return wait(2000);
  })
  .then(() => {
    // console.log('FooBar');
  });

getUserGeoLocation()
  .then(geoCode => {
    const { coords } = geoCode;
    const { latitude, longitude } = coords;

    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`;
    console.log(googleMapsLink);
  })
  .catch(error => console.warn(error));

const buttonRef = document.querySelector('.btn-preloader');
const fakeRequestButton = document.querySelector('.fake-request');
const { enablePreloader, disablePreloader } = createPreloaderActions(buttonRef);

const handleFakeRequest = () => {
  enablePreloader();

  wait(1000)
    .then(() => {
      console.log('server request success');
    })
    .finally(() => {
      disablePreloader();
    });
};

fakeRequestButton.addEventListener('click', handleFakeRequest);

Promise.all([wait(2000), wait(1000), wait(4000)]).then(result => console.log(result));
Promise.allSettled([wait(2000), wait(1000), Promise.reject('error')]).then(result =>
  console.log(result),
);
