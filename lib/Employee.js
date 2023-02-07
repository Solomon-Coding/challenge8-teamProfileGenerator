class Employee {
    
  getName(){
        require('inquirer')
            .prompt([
                {
                    type: 'input',
                    message: 'Name:',
                    name: 'name',
                },
            ])

            .then((data) => {
                this.name =  data.name; 
            })
            
    };

    getId(){
        require('inquirer')
            .prompt([
                {
                    type: 'input',
                    message: 'ID:',
                    name: 'id',
                },
            ])
            .then((data) => {
                this.id = data.id;
            })
    };

    getEmail(){
        require('inquirer')
            .prompt([
                {
                    type: 'input',
                    message: 'Email:',
                    name: 'email',
                },
            ])
            .then((data) => {
                this.email = data.email;
            })
    };

    getRole(){
        this.role = "Employee";
    };
}

module.exports = Employee;