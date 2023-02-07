const Employee = require("./Employee");
class Engineer {
    constructor(github){
        this.github=github;
    }
    getGitHub(){

    };
    getRole(){
        this.role = "Engineer";
    };
}

module.exports = Engineer;