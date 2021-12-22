const obj = {
  a: 10,
};

const foo = Object.create(obj);
// console.log('foo:', foo);
// console.log('foo.a', foo.a);

const User1 = function (name, age) {
  // env = {
  //   this: {
  //     name: 'Tom',
  //     age: 10
  //   },
  // };
  this.name = name;
  this.age = age;
};

User1.prototype.logName = function () {
  console.log(this.name);
};

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  logName() {
    console.log(this.name);
  }
}

const user = new User1('Tom', 10);
// user.logName();

const dogName = 'Tom';

const userFactory = (name, age) => {
  return {
    name,
    age,
  };
};

{
  class User {
    static #takenEmails = [];

    static isEmailTaken(email) {
      return User.#takenEmails.includes(email);
    }

    #email;

    constructor({ email }) {
      this.#email = email;
      User.#takenEmails.push(email);
    }
  }

  const user = new User({ email: 'sss@sss.com' });
  console.log(User.isEmailTaken('sss@sss.com'));
  console.log(user.isEmailTaken('sss@sss.com'));
}
