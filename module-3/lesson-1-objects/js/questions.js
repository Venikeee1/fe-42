// Вернуть последний элемент массива
const apartment = {
  tags: ['premium', 'promoted', 'top'],
};
const lastTag = apartment.tags[apartment.tags.length - 1];

const user = {
  name: 'Too',
  age: 10,
};

// console.log(user.name);
// console.log(user['name']);

// Метод hasOwnProperty

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Манго';
dog.legs = 15;

// console.log(dog === animal);
// console.log(animal);
// console.log(dog);
// console.log(animal.legs);

// Разница работы функций

// function includes(array, value) {
//   for (const element of array) {
//     return element === value;
//   }
// }

// function includes(array, value) {
//   for (element of array) {
//     if (element === value) {
//       return true;
//     }
//   }

//   return false;
// }

const userProperty = 'name';

{
  const user = {
    name: 'Jacques Gluke',
    tag: 'gluke',
    location: {
      country: {
        a: 1,
        b: 1,
      },
      city: 'Ocho Rios',
    },
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };

  const getUserPropertyByName = function (obj, propertyName) {
    // console.log(obj.propertyName);
    return `Property "${propertyName}": ${obj[propertyName]}`;
  };

  // console.log(user.location.country.b);
  // console.log(user['location']['country']['b']);

  user.name = 'Tom Tom';
  // console.log(getUserPropertyByName(user, 'tag'));
  // console.log(getUserPropertyByName(user, 'name'));
}

// написать функцию создания юзера
{
  const createUser = function (name, age) {
    // полная версия записи
    // {
    //   name: name,
    //   age: age,
    // }
    const salary = 1000;

    // сокращенная запись объекта
    return {
      name,
      age,
      salary,
    };
  };

  const user = createUser('John', 25);
  // console.log(user);
}

// Написать функцию которая добавляет свойства к объекту

{
  const user = {
    name: 'John',
    age: 30,
  };

  const addProps = function (obj, key, value) {
    return {
      ...obj,
      [key]: value,
    };

    // добавление нового свойства без использования вычисляемых свойств
    // objCopy[key] = value;
  };

  const superUser = addProps(user, 'salary', 3000);

  // console.log(superUser);
  // console.log(user === superUser);

  const cat1 = 'Mouse';
  const cat2 = 'Lion';

  const cats = {
    cat1: {
      legs: 4,
    },
    [cat1]: {
      legs: 4,
    },
    [cat2]: {
      legs: 5,
    },
  };

  // console.log(cats);
}

/**
 *
 * Задача на собеседовании
 * Что отобразится в консоле?
 *
 * */
{
  const obj = {
    name: 'Name',
    showName() {
      console.log(this.name);
    },
  };

  const showName = obj.showName;
  // const showName = function() {
  //   console.log(this.name);
  // };
  console.log(showName);

  // showName();
}

// разбить все имена на буквы
const getAllFrends = function (allFriends) {
  const result = [];
  for (const friend of allFriends) {
    const letters = friend.name.split('');

    for (const letter of letters) {
      result.push(letter);
    }
  }
  return result;
};
console.log(getAllFrends(friends).join('-'));
