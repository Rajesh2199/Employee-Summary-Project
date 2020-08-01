
const Employee = require ("./Employee.js")


class Manager extends Employee {
    constructor (name,id, email,officeNumber){
    super(name, id, email); // The function auto pulls name, id and email for the engineer from Employee function(inheritance)
    this.officeNumber =  officeNumber;
    this.role = "Manager";
}

    getOfficeNUmber () {
         return this.officeNumber;
    }
}


module.exports = Manager;