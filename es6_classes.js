class Person {
  constructor(firstName, lastName, dob) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.birthday = new Date(dob));
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const zeeshan = new Person('Zeeshan', 'Tamboli', '09-15-1995');

console.log(zeeshan);

console.log(Person.addNumbers(1, 3));
