// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee.js");


class Intern extends Employee {
    constructor (name,id, email, school){
    super(name, id, email); // The function auto pulls name, id and email for the engineer from Employee function(inheritance)
    this.school = school;
    //this.role = "Intern";
}

    getSchool () {
         return this.school;
    }

    getRole (){
        return "Intern";
    }

}
    


module.exports = Intern;