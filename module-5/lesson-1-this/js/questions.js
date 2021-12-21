// const foo = function () {
//   console.log(this);
// };

// const obj = {
//   log: foo,
// };

// console.log(obj.log === foo);
// obj.log();

{
  const foo = function (value, value1) {
    console.log(`${this.name}: ${value}; ${value1}`);
  };

  const bar = {
    name: 'Hello',
    logName: foo,
  };

  // bar.logName();
  // foo.call(bar, 5, 10);
  // foo.apply(bar, [5, 10]);
  // foo.call({ name: 'sdsd' }, 5, 10);
}

{
  const robot = {
    name: 'Robot',
    great() {
      console.log(`Hello i am ${this.name}`);
    },
  };

  const cat = {
    name: 'Cat',
    legs: 4,
    getLegsAmount() {
      return this.legs;
    },
  };

  robot.getCatsLegsAmount = cat.getLegsAmount.bind(cat);
  // console.log(robot);
  // console.log(robot.getCatsLegsAmount());

  // console.log(cat.getLegsAmount());
}

{
  const dog = {
    name: 'dog',
  };

  const cat = {
    name: 'cat',
  };

  const logName = function () {
    console.log(this.name);
  };

  const logDogName = logName.bind(dog);
  const logCatName = logName.bind(cat);
  // повторный bind не может перебить контекст
  const logCatName1 = logDogName.bind(cat);
  logDogName();
  logCatName();
  // контекст остается объект dog
  logCatName1();
}
