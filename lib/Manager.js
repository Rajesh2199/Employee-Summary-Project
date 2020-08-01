
class Manager extends Employee {
    constructor (name,id, email,officeNumber){
    super(name, id, email); // The function auto pulls name, id and email for the engineer from Employee function(inheritance)
    this.officeNumber =  officeNumber;
    this.role = "Manager";
}

    getRole () {
         return this.role;
    }
}


module.exports = Manager;