let a = 0;
const start = performance.now();

// for (let i = 0; i < 10000; i++) {
//   a += i;
// }

const end = performance.now();
// console.log(`Прошло времени ${end - start}`);
// console.log(a);

// const animate = () => {
//   requestAnimationFrame(() => {
//     console.log(1111);
//     animate();
//   });
// };

// animate();

const titleRef = document.querySelector('h1');

let time = 0;
const intervalId = setInterval(() => {
  if (time > 1000) {
    clearInterval(intervalId);
    return;
  }

  time += 100;

  titleRef.style.opacity = time / 1000;
}, 100);
