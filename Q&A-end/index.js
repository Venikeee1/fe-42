const arrayMap = (arr, callBack) => {
  const result = [];

  // arr: [1, 2, 3]
  // callBack:  (val) => val + 2

  const recursiveFn = (index) => {
    if (index > arr.length - 1) {
      return result;
    }

    result.push(callBack(arr[index]));
    return recursiveFn(index + 1);
  };

  recursiveFn(0);

  return result;
};

const result = arrayMap([1, 2, 3], (val) => val + 2);

// const generateCar = (name) => (value) => {
//   return {
//     type: name,
//     horsePower: value,
//   };
// };

const generateCar = (name) => {
  return (value) => {
    return {
      type: name,
      horsePower: value,
    };
  };
};

const carWithAudiName = generateCar('AUdi');
const car = generateCar('AUdi')(1000);
console.log(car);
console.log(carWithAudiName(500));
console.log(carWithAudiName(200));
console.log(carWithAudiName(100));
