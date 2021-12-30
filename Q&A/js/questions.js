let value = 15;

{
  const logins = ['mango', 'poly', 'ajajjaja'];
  const loginToFind = 'poly';
  let message = '';

  for (let i = 0; i < logins.length; i += 1) {
    const login = logins[i];

    if (login !== loginToFind) {
      message = `user ${loginToFind} not found`;
    } else {
      message = `user ${loginToFind} found`;
      break;
    }
  }

  console.log(message);
}

{
  // const userInput = prompt('Enter login');

  const loginUser = (login) => {
    // делает запрос на сервер для логинизации пользовтеля
  };

  const validateLogin = (login) => {
    if (!login) {
      console.error('Login is not provided');
      return;
    }

    loginUser(login);
  };
}

// Использование колекций для разных типов ролей пользователей
{
  // const getUserRoleSettings = (role) => {
  //   const roles = {
  //     admin: {},
  //     superAdmin: {},
  //     quest: {},
  //     maintainer: {},
  //   };

  //   return roles[role];
  // };

  const getUserRoleSettings = (role) => {
    if (role === 'superAdmin') {
      return {
        role: 'superAdmin',
      };
    }

    if (role === 'admin') {
      return {
        role: 'admin',
      };
    }

    return {
      role: 'quest',
    };
  };

  const user = {
    name: 'Tom',
    email: 'gmail@gmail.com',
    role: 'quest',
  };

  const userRoleSettings = getUserRoleSettings(user.role);
}

{
  const values = [1, 2, 3, 4];
  const newValues = [];

  for (const value of values) {
    newValues.push(value);
  }
}

/** Превратить массив книг в объект, ключи которого являются id каждой книги  */
{
  const books = [
    {
      id: '324fdsfdsf3',
      title: 'Tom',
    },
    {
      id: 'dsfdsfdsfdsf',
      title: 'Tom',
    },
    {
      id: '234njk34bjk',
      title: 'Tom',
    },
    {
      id: 'dsfdsfdsf',
      title: 'Tom',
    },
    {
      id: '8f7ds7fds7f',
      title: 'Tom',
    },
  ];

  const transformToObject = (books) => {
    return books.reduce((acc, item) => {
      // acc = {}
      // acc = {
      //   324fdsfdsf3: {
      //     id: 324fdsfdsf3,
      //     title: 'Tom',
      //   },
      // };
      const { id } = item;
      acc[id] = item;

      return acc;
    }, {});
  };

  const booksCollection = transformToObject(books);
  const searchedBook = booksCollection['324fdsfdsf3'];

  // console.log(booksCollection);
  // console.log(searchedBook);
}

// добавить в массив свойство id(пусть айди равно имени) и отфильтровать по цене выше 200
{
  const products = [
    {
      name: 'kiwi',
      price: 123123,
    },
    {
      name: 'banana',
      price: 222,
    },
    {
      name: 'potato',
      price: 111,
    },
  ];

  const productsWithId = products
    .map((item) => {
      const { name } = item;

      return {
        id: name,
        ...item,
      };
    })
    .filter((item) => item.price > 200);

  // {
  //   name: 'kiwi',
  //   price: 123123,
  // }

  const foo = products.reduce((acc, item) => {
    // acc = [{ id, name, price}]
    const { name, price } = item;

    if (price <= 200) {
      return acc;
    }

    acc.push({
      id: name,
      ...item,
    });

    return acc;
  }, []);

  // console.log(productsWithId);
  // console.log(foo);
}

{
  class User {
    static name = 'TTT';

    #password;
    #login;

    constructor(login, password) {
      this.#login = login;
      this.#password = password;
    }
  }

  const user = new User('login', 'qwerty');
  // console.log(user.#password);
  console.log(User.name);
  console.log(user.name);
}

{
  class NewMath {
    constructor() {
      throw new Error('Math is not a constructor');
    }

    static max(...args) {
      return args.reduce((acc, item) => {
        if (acc < item) {
          return item;
        }

        return acc;
      });
    }

    static min() {}

    static pow() {}

    static random() {}
  }

  // console.log(NewMath.max(2, 5, 10, 2));

  // const newMath = new NewMath();
}

// Замыкания
{
  // const square = (x, y) => {
  //   return x * y;
  // };

  const square = (x) => {
    const b = 20;

    return (y) => {
      return x * y + b;
    };
  };

  const result = square(10)(20);
  const resultWithWidth = square(10);
  console.log(result);
  console.log(resultWithWidth(20));
  console.log(resultWithWidth(30));
}

{
  const add = (initialValue) => {
    let result = initialValue;

    const addRecursive = (value) => {
      if (!value) return result;

      result += value;

      return addRecursive;
    };

    return addRecursive;
  };

  const res = add(1)(2)(10)();

  console.log(res);
}

{
  let options = {
    size: {
      width: 100,
      height: 200,
    },
    items: ['Пончик', 'Пирожное'],
  };

  let {
    title = 'Меню',
    size: { width: w, height: h },
    items: [foo, potato],
  } = options;

  // const { items } = options;
  // const [foo, potato] = items;
  // console.log(foo, potato);
}

{
  const arr = [1, 2, 3, 4];

  const [firstElement, ...restArr] = arr;
}

// На входе функции приходит массив из целых чисел.
// Найдите в массиве все числа, которые окружены нулями.
// Если таких чисел нет - возвращается -1. Например на входе функции получаем [1, 2, 5, 0, 8, 0, 4, 3, 0, 2, 0, 8].
// Получаем на выходе результат - индекс чисел - 4, 9
const arr = [1, 2, 5, 0, 8, 0, 4, 3, 0, 2, 0, 8];

const findIndexesWrappedByZero = (arr) => {
  const result = [];

  for (let i = 1; i < arr.length - 1; i++) {
    const value = arr[i];
    const prevValue = arr[i - 1];
    const nextValue = arr[i + 1];

    if (value === 0) continue;

    if (prevValue === 0 && nextValue === 0) {
      result.push(i);
    }
  }

  return result;
};

console.log(findIndexesWrappedByZero(arr));

const obj = {
  name: 'dasdsa',
  logName() {
    const bar = function () {
      console.log(this.name);
    };

    const foo = () => {
      console.log(this.name);
    };

    // bar.call(this);
    foo();
  },
};

obj.logName();
const method = obj.logName;
method();
