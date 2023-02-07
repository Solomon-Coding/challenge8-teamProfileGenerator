const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// Creates a function to initialize app
// init(){
//     const manager = new Manager();
//     manager.getName();
// }

const manager = new Manager();
manager
// manager.getName();
// manager.getId();
// manager.getEmail();
// manager.getRole();

//   myPromise
    //  .then(console.log("SOMETHING"))
//     .then(handleFulfilledB, handleRejectedB)
//     .then(handleFulfilledC, handleRejectedC);
  