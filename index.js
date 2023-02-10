const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require("./src/generateHTML");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");


// ------ OBJECTS ------ 

const employeeQuestions = [
    {
        type: 'input',
        message: 'Name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'ID',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Email:',
        name: 'email',
    },
];
const managerQuestions = [
    {
        type: 'input',
        message: 'Name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'ID:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Email:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Office Number:',
        name: 'officeNumber',
    },
];
const engineerQuestions = [
    {
        type: 'input',
        message: 'Name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'ID:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Email:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'GitHub:',
        name: 'github',
    },
];
const internQuestions = [
    {
        type: 'input',
        message: 'Name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'ID:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Email:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'School:',
        name: 'school',
    },
];
const menuOptions = [
    {
        type: 'list',
        message: 'Role:',
        name: 'name',
        choices: ['Engineer','Intern','Exit']
    },
];

// Creates a directory of all added employees
var employees = [];


// ------ FUNCTIONS -------

// on startup, runs the teamManager() function.
teamManager();

// teamManager() runs inquirer and find the name, id, 
// email, and office number of the team manager
function teamManager() {
    inquirer
    .prompt(managerQuestions)
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
        employees[0] = manager;
        menu()
    })
    
};

// menu() runs inquirer and allows the user to select 
// a new employee and their role.
function menu(){
    console.log("Select an employee to add!")
    inquirer
    .prompt(menuOptions)
    .then((data) => {
        if(data.name=='Engineer'){
            addEmployee(engineerQuestions,'Engineer')
        } else if (data.name=='Intern'){
            addEmployee(internQuestions,'Intern')
        } else {
            writeToFile(employees)
        }
    })
}

// addEmployee() works for both the Engineer and the
// Intern roles. it runs inquirer and sets the info for 
// each new role created.
function addEmployee(questions,employee){
    inquirer
    .prompt(questions)
    .then((data) => {
        if(employee=='Engineer'){
            const engineer = new Engineer(data.name, data.id, data.email, data.github)
            employees.push(engineer)
            menu()
        } else if (employee=='Intern'){
            const intern = new Intern(data.name, data.id, data.email, data.school)
            employees.push(intern)
            menu()
        } else {
            console.log('Error see function "addEmployee()" on line 147')
        }
    })
}

// writeFile() generates the html file based on the information
// provided.
function writeToFile(data){
    const html = generateHTML(data)
    fs.writeFile("./dist/TeamInfo.html",html, (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log('Success: README.md File Generated!')
        }
    })
}