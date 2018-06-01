//Object.prototype
//Person.prototype

//Person constructor
function Person(firstName, lastName, dob) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.birthday = new Date(dob));
  // (this.calculateAge = function() {
  //   const ageDifMs = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(ageDifMs); // miliseconds from epoch
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // });
}

//Calculate age
//This puts the function in Person.prototype.
Person.prototype.calculateAge = function() {
  const ageDifMs = Date.now() - this.birthday.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

//Get full name
Person.prototype.getFullName = function() {
  const fullName = `${this.firstName} ${this.lastName}`;
  return fullName;
};

//Gets married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
};

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');
console.log(mary);
console.log(john.calculateAge());
console.log(mary.getFullName());
mary.getsMarried('Clark');
console.log(mary.getFullName());

//In built object.prototype method
console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));
