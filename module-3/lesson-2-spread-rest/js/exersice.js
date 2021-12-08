/** Вернуть копию объекта либо массива */
{
  const copyInstance = function (instance) {
    if (Array.isArray(instance)) {
      return [...instance];
    }

    return { ...instance };
  };

  const array = [20, 22, 11, 15];
  const newArray = copyInstance(array);
  // console.log(`Is equal ${newArray === array}`);
}

/** Поверхностное копирование массива */
{
  const users = [
    {
      name: 'Alex',
    },
    {
      name: 'John',
    },
  ];

  const newUsers = [...users];
  newUsers[0].name = 'Potato';
  // console.log(users === newUsers);
  // console.log(newUsers, '---newUsers');
  // console.log(users, '---users');
}

/** Написать функцию слияния двух массивов */
{
  const mergeArrays = function (arr1, arr2) {
    return [...arr1, ...arr2];
  };

  // console.log(mergeArrays([1, 4, 1], [2, 5]));
}

/**
 * Написать фнкцию, которая в зависимости от знака(первый аргумент)
 * будет проводить определенное арифметическое действие
 * + -
 */
{
  const mathOperation = function (sign, ...restValues) {
    let result = 0;

    if (sign === '+') {
      for (const value of restValues) {
        result += value;
      }

      return result;
    }

    if (sign === '-') {
      for (const value of restValues) {
        result -= value;
      }

      return result;
    }
  };

  const result1 = mathOperation('-', 1, 2, 2, -5);
  const result2 = mathOperation('+', 1, 2, 2, -5);
  const result3 = mathOperation('+');
  // console.log(result1);
  // console.log(result2);
  // console.log(result3);
}

{
  const DEFAULT_USER_AVATAR = 'https://picture/nature.png';
  const DEFAULT_LOCALE = 'en_GB';

  const generalData = {
    user: {
      name: 'Tom',
      age: 20,
      avatar: undefined,
    },
    locale: 'en_FR',
    cart: [
      {
        name: 'iron',
      },
      {
        name: 'laptop',
      },
    ],
  };

  const { user, locale = DEFAULT_LOCALE, cart } = generalData;
  const { avatar = DEFAULT_USER_AVATAR } = user;

  // console.log(avatar);
  // console.log(locale);
  // console.log(cart);
}

/** сравнить возраст двух юзеров и вернуть того, кто старше */
{
  const firstUser = {
    name: 'Tom',
    age: 20,
  };

  const secondUser = {
    name: 'Jerry',
    age: 18,
  };

  const thirdUser = {
    name: 'Pikachu',
    age: 22,
  };

  const findOldestUser = function (...users) {
    if (users.length === 0) {
      console.error('Users are not defined');
      return;
    }

    // аналог получения первого
    //let oldestUser = users[0];
    let [oldestUser, ...restUsers] = users;
    // console.log(oldestUser);

    for (const user of restUsers) {
      const { age: userAge } = user;
      // аналог
      // const userAge = user.age;
      const { age: oldestUserAge } = oldestUser;

      if (userAge > oldestUserAge) {
        oldestUser = user;
      }
    }

    return oldestUser;
  };

  const oldestUser = findOldestUser(firstUser, secondUser, thirdUser);
  // console.log(oldestUser);
}

/** ☠️☠️☠️☠️☠️ Рекурсия ☠️☠️☠️☠️☠️ */
// 5! = 1 * 2 * 3 * 4 * 5

// n = 3;
const recursionExample = function (n) {
  // console.log('n:', n);

  if (n === 1) {
    return n;
  }

  return recursionExample(n - 1);
};

const result = recursionExample(3);
// factorial(2);
// factorial(1);
// 1
// console.log(result);

// Factorial
const factorial = function (n) {
  if (n <= 2) {
    return n;
  }

  console.log(`n: ${n}`, '---before');
  const res = n * factorial(n - 1);
  console.log(`n: ${n}, res: ${res}`);

  return res;
};

const fact = factorial(5);
//n: 5;  5 * factorial(4)
//n: 4;  5 * 4 * factorial(3)
//n: 3;  5 * 4 * 3 * factorial(2)
//n: 2;  5 * 4 * 3 * 2 * factorial(1)
//n: 1;  5 * 4 * 3 * 2 * 1
// console.log(fact);

/**
 * Объект параметров
 * Если параметров функции больше трех, то лучше передавать один аргумент в виде объекта
 * */
{
  const user = {
    name: 'Tom',
    city: 'Lviv',
    age: 20,
  };

  // плохо
  // const showUserInfo = function(name, city) {
  //   console.log(`User name:${name}. User city ${city}`);
  // }

  const showUserInfo = function ({ city, name }) {
    console.log(`User name:${name}. User city ${city}`);
  };

  showUserInfo(user);
  showUserInfo(user.name, user.city);
}
