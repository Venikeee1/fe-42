const employee1 = {
  id: 1,
  name: 'Hom',
  salary: 2000,
  bonus: 100,
};

const employee2 = {
  id: 2,
  name: 'John',
  salary: 4000,
};

const employee3 = {
  id: 3,
  name: 'John',
  salary: 4000,
};

const company = {
  employees: [],
  budget: 60000,
  income: 0,

  addEmployee: function (employee) {
    this.employees.push(employee);
  },

  deleteEmployee(id) {
    const newEmployeesList = [];

    // Более длинная запись
    // for (const employee of this.employees) {
    //   if (employee.id === id) {
    //     continue;
    //   }

    //   newEmployeesList.push(employee);
    // }

    for (const employee of this.employees) {
      if (employee.id !== id) {
        newEmployeesList.push(employee);
      }
    }

    this.employees = newEmployeesList;
  },

  // сокращенная запись метода объекта
  calculateEmployeesSalary() {
    let sum = 0;

    for (const employee of this.employees) {
      const bonus = employee.bonus ?? 0;
      sum += employee.salary + bonus;
    }

    return sum;
  },

  calculateCompanyIncome() {
    const employeesSalary = this.calculateEmployeesSalary();

    this.income = this.budget - employeesSalary;
  },
};

company.addEmployee(employee1);
company.addEmployee(employee2);
company.addEmployee(employee3);

company.deleteEmployee(2);

// console.log(company.calculateEmployeesSalary());
console.log(company.calculateCompanyIncome());
console.log(company);

const friends = [
  { name: 'Sergey' },
  { name: 'Andrey' },
  { name: 'Ruslan' },
  { name: 'Evgenii' },
];
