// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information

const inquirer = require('inquirer');
const fs = require('fs');

const positions = [Manager, Engineer, Employee, Intern];
// Creates an array of questions for user input
const questions = [
            {
                type: 'input',
                message: 'Name:',
                name: 'name',
            },
            {
                type: 'list',
                message: 'Job Position:',
                name: 'position',
                choices: positions,
            },
            {
                type: 'input',
                message: 'Email:',
                name: 'email',
            },            
            {
                type: 'input',
                message: 'Name:',
                name: 'name',
                default: 'Project',
            },
        ];

// Creates a function to write README file
function writeToFile(fileName, data) {

    const md = generateMarkdown(data)
    fs.writeFile("README.md",md, (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log('Success: README.md File Generated!')
        }
    })
}

// Creates a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const prompt = {
                title: data.title,
                description: data.description,
                installation: data.installation,
                usage: data.usage,
                license: data.license,
                contributing: data.contributing,
                test: data.test,
                username: data.username,
                email: data.email
            }
        writeToFile(prompt.title,prompt)
});
}

// Function call to initialize app
init();

// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

