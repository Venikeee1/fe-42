{
  const animal = {
    legs: 4,
    move() {
      console.log('I am moving');
    },
  };

  const dog = Object.create(animal);
  dog.name = 'Манго';
  dog.legs = 10;

  // console.log(dog);
  // console.log(dog.legs);
  // console.log(dog.hasOwnProperty('move'));

  for (let key in dog) {
    if (dog.hasOwnProperty(key)) {
      // console.log(key);
    }
  }
}

{
  class Student {
    #rating;
    #guild;

    constructor({ name, age, avatar }) {
      this.name = name;
      this.age = age;
      this.avatar = avatar;
      this.#rating = 0;
      this.#guild = 'Grifindor';
    }

    get guild() {
      return this.#guild;
    }

    set guild(value) {
      if (value.length <= 3) {
        console.warn('Cannot be less then 4 symbols');
        return;
      }

      this.#guild = value;
    }

    setGuild(value) {
      if (value.length <= 3) {
        console.warn('Cannot be less then 4 symbols');
        return;
      }

      this.#guild = value;
    }

    getRating() {
      return this.#rating;
    }

    updateRating(value) {
      this.#rating += value;
    }

    study() {
      console.log(`I am studying`);
    }

    cry() {
      console.log('No more JS please');
    }

    promote() {
      console.log('I am a Junior front end developer');
    }
  }

  const newStudent = new Student({
    name: 'John',
    age: 22,
    avatar: '💀',
  });

  // newStudent.updateRating(15);
  // console.log(newStudent.name);
  // console.log(newStudent.getRating());

  // newStudent.guild = 'Tom';
  // newStudent.setGuild('Tom');
  // console.log('Guild:', newStudent.guild);

  // newStudent.study();
}

{
  class Human {
    constructor(name) {
      this.name = name;
    }
  }

  class SuperHuman extends Human {
    constructor(name) {
      super(name);
    }

    superPunch() {
      console.log('🤜🤜🤜🤜🤜🤜🤜');
    }
  }

  const superHuman = new SuperHuman('Tom');
  console.log(superHuman);
}

{
  class Hero {
    constructor({ name, hp, damage }) {
      this.hp = hp;
      this.name = name;
      this.damage = damage;
    }

    attack() {
      return this.damage;
    }
  }

  class Wizard extends Hero {
    #magicDamage = 10;

    constructor({ name, hp, damage, mana = 100 }) {
      super({ name, hp, damage });
      this.mana = mana;
    }

    attack() {
      return this.damage + this.mana / 30;
    }
  }

  const merlin = new Wizard({
    name: 'Merlin',
    hp: 1000,
    damage: 50,
  });

  console.log(merlin.attack());
}
