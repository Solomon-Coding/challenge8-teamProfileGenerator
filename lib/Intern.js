const Employee = require("./Employee");
class Intern {
    constructor(school){
        this.school=school;
    }
    getSchool(){

    };
    getRole(){
        this.role = "Intern";
    };
}

module.exports = Intern;