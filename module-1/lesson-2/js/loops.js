const triangleSize = Number(prompt('Введите размер стороны треугольника'));
let row = '';

// triangleSize = 5;
for (let i = 0; i < triangleSize; i++) {
  // ниже аналог этой записи
  // row = row + 1;
  row += '1'; // '1' '11' '111' '1111' '11111'
  // console.log(row);
}

/** While*/
let rowForWhileLoop = '';
let y = 0;

while (y < triangleSize) {
  rowForWhileLoop += 1;
  // console.log(rowForWhileLoop)
  y += 1;
}

/** Do while*/
let z = 0;
do {
  console.log(z);
  z += 1;
} while (z < triangleSize);

const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
  console.log(`sum: ${sum}`, `i: ${i}`);
}

console.log(sum);
