const Employee = require("./Employee");
class Manager extends Employee{
    // constructor(inquirer){
    //     // this.officeNumber=officeNumber;
    //     super()
    // }
    
    getRole(){
        this.role = "Manager";
    };
}

module.exports = Manager;