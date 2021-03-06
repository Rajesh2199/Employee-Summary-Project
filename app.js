const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// We add user input to this array.
let team =[];



// This functions prompts user with the kind of team they want to build.

function build () {
    inquirer.prompt ([{

        type : "list",
        message: " Please pick a role from the choices to add a team member",
        name: "role",
        choices:["Manager", "Engineer", "Intern", "My team is complete"],
    }
])

.then(input => {
    switch(input.role) {
        case "Manager" :
            addManager();
            break;

        case "Engineer" :
            addEngineer();
            break;

         case "Intern" :
            addIntern();
            break;

        case "My team is complete":
        //render(team);
        createHtml(team);
    }
})
}

// functions for input for each role (Manager, Engineer, and Intern)

function addManager (){
    inquirer.prompt([
{
    type: "input",
    name : "name",
    message: "Enter the name of the Manager",

},
{
    type: "input",
    name : "id",
    message: "Enter the employee ID for the manager."
},
{
    type: "input",
    name :"email",
    message: "Enter the email for the manager."

},
{
    type: "input",
    name : "officeNumber",
    message: "Enter the office number for the manager"
}
 ])


.then (input => {
    const manager = new Manager (input.name, input.id, input.email, input.officeNumber);
    // Adding variable manager into team array.
    team.push(manager);
    build ();
})

}


// Input for the Engineer.

function addEngineer (){
    inquirer.prompt([
{
    type: "input",
    name : "name",
    message: "Enter the name of the Engineer",

},
{
    type: "input",
    name : "id",
    message: "Enter the employee ID for the engineer."
},
{
    type: "input",
    name :"email",
    message: "Enter the email for the engineer."

},
{
    type: "input",
    name : "github",
    message: "Enter the Github username for the engineer"
}
 ])


.then (input => {
    const engineer = new Engineer (input.name, input.id, input.email, input.github);
    team.push(engineer);
    build ();
})

}


// Input for the intern.
function addIntern (){
    inquirer.prompt([
{
    type: "input",
    name : "name",
    message: "Enter the name of the Intern",

},
{
    type: "input",
    name : "id",
    message: "Enter the employee ID for the intern."
},
{
    type: "input",
    name :"email",
    message: "Enter the email for the intern."

},
{
    type: "input",
    name : "school",
    message: "Enter the school name of the intern"
}
 ])


.then (input => {
    const intern = new Intern (input.name, input.id, input.email, input.school);
    team.push(intern);
    build ();
})

}

build ();

// Function to print all the user input into HTML

function createHtml () {
    fs.writeFileSync(outputPath, render(team));

}

createHtml ();













    























































// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
