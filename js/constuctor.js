// A simple example of a constructor object and the uses of prototype
function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

User.prototype.emailDomian = '@facebook.com';

User.prototype.getEmailAddress = function() {
  return this.firstName + this.lastName + this.emailDomian;
}

var user1 = new User('John', 'Smith', 26, 'male');
var user200 = new User('Jill', 'Robinson', 25, 'female');
