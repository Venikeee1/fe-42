{
  // небольшая тафтология
  const user1 = {
    username: 'Mango',
    userAge: 10,
  };

  // лучше писать имена свойств не привязываясь у миени объекта
  const user2 = {
    name: 'Mango',
    age: 10,
  };
}

{
  const customer = {
    firstName: 'Jacob',
    lastName: 'Mercer',
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };

  function makeMessage(callback) {
    // callback() это вызов метода getFullName без объекта
    console.log(`Обрабатываем заявку от ${callback()}.`);
  }

  const foo = function () {
    // this = customer;
    return `${this.firstName} ${this.lastName}`;
  };

  // Будет ошибка при вызове функции
  // makeMessage(customer.getFullName);
  // makeMessage(foo);

  // makeMessage(customer.getFullName.bind(customer));
  // makeMessage(foo.bind(customer));
  // console.log(window);
}

// лексическое окружение
{
  /*
  лексическое окружение которое не видно разработчику
  Env1 = {
    a: 5,
    b: 10,
  };
  */

  const a = 5;
  const b = 10;

  const foo = function () {
    /*
    Env2 = {
      a: 10,
      parentEnv: Env1
    };
    */

    const a = 10;
    console.log(a);
    console.log(b);
  };
}

{
  const a = 10;
  const logA = function () {
    /*
    Env1 = {
      parentEnv: Env1,
      this: undefined
    };
    */
    // console.log(a);
    // console.log('window: ', this);
    // console.log('window.a: ', this.a);
  };

  // this в стрелочной функции определяется на момент описания
  const foo = () => {
    /*
    Env1 = {
      parentEnv: Env1,
      this: window
    };
    */
    const a = 15;
    logA();
  };

  foo();
}

{
  const user = {
    name: 'Tom',
    age: 22,
    logNameAfterOneSecond() {
      const callback = function () {
        console.log('this:', this);
        console.log('this.name:', this.name);
      };

      const arrowFunctionCallback = () => {
        console.log('this:', this);
        console.log('this.name:', this.name);
      };
      // callback();
      setTimeout(callback.bind(this), 1000);
      setTimeout(arrowFunctionCallback, 3000);
    },
  };

  // user.logNameAfterOneSecond();
}

{
  // Найти максимальное значение
  const arr = [22, 1, 2, -10, 5];

  const maxVal = Math.max(...arr);
  console.log(Math.max(22, 1, 200, 15));
  const maxValue = Math.max.apply({}, arr);
  console.log(maxValue);
}

{
  const user = {
    age: 22,
    say: () => {
      console.log(this.name);
    },
  };

  const foo = function () {
    console.log(this.age);
  };
  /*
    Так работать не будет
    foo.bind(user);
    foo();
  */
  const fooWithContext = foo.bind(user);
  fooWithContext();
}

console.log(window);
