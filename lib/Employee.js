// TODO: Write code to define and export the Employee class
const Employee = function (name,id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    getName = function () {
        return this.name;
    }

    getId = function () {
        return this.id;
    }
    getEmail = function () {
        return this.Email;
    }
     getRole = function () {
         return this.name
     }
    }
  


module.exports = Employee;