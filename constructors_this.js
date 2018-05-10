//Constructor function
function Person(name, dob) {
  (this.name = name),
    (this.birthday = new Date(dob)),
    (this.getAge = function() {
      const ageDifMs = Date.now() - this.birthday.getTime();
      const ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    });
}

//New instances of the constructor
const zeeshan = new Person('Zeeshan', '09-15-1993');
const aditya = new Person('Aditya', 22);

console.log(zeeshan.getAge());
