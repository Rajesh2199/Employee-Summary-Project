// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
module.exports = Employee;


class Intern extends Employee {
    constructor (name,id, email, school){
    super(name, id, email); // The function auto pulls name, id and email for the engineer from Employee function(inheritance)
    this.school = school;
    this.role = "Intern";
}

    getSchool () {
         return this.school;
    }

}
    


module.exports = Intern;