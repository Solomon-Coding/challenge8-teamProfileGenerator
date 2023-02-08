const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// Constants/variables/objects 
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
        message: 'Name:',
        name: 'name',
        choices: ['Engineer','Intern','Done']
    },
];

// Creates a directory of all added employees
var employees = [];

// on startup, finds the information for the team manager
teamManager();

// Functions
function teamManager() {
    inquirer
    .prompt(managerQuestions)
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
        employees[0] = manager;
        menu()
    })
    
};

function menu(){
    console.log(employees)
    inquirer
    .prompt(menuOptions)
    .then((data) => {
        console.log(data)
        if(data.name=='Engineer'){
            addEmployee(engineerQuestions,'Engineer')
        } else if (data.name=='Intern'){
            addEmployee(internQuestions,'Intern')
        } else {
            writeFile()
        }
    })
}

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
            console.log('error')
        }
    })
}

function writeFile(){
    console.log("Done!")
}