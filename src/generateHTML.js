// cardGenerator() loops through each of the employees and
// gets each employees name, id, email, job role, and a 
// attribute unique to their role.
function cardGenerator(data){
    let cards = "";
    for (let i=0;i<data.length;i++){
        const name = data[i].getName();
        const id = data[i].getId();
        const email = data[i].getEmail();
        const role = data[i].getRole();
        const roleSpecific = employeeSpecificRoles(role,data[i])
        cards += cardsFunction(name,role,id,email,roleSpecific)
    }
return cards
}

// employeeSpecificRoles() finds the unique detail for each 
// of the three roles.
function employeeSpecificRoles(role,data){
    if (role == 'Manager'){
        const officenumber = data.officeNumber;
        return `Office Number: ${officenumber}`;
    } else if (role == 'Engineer'){
        const github = data.getGitHub();
        return  `GitHub: <a href="https://github.com/${github}" class="card-link"></a> ${github}`;
    } else if (role == 'Intern') {
        const school = data.getSchool();
        return `School: ${school}`;
    } else {
        console.log("Error! No condition has been met. generateHTML.js (ln 25)");
    }
}

// cardsFunction() generates the bootstrap cards and sets 
// the relevant information for each of the employees.
function cardsFunction(name,role,id,email,roleSpecific){
    return `<div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="#" class="card-link"> ${email}</a></li>
                        <li class="list-group-item">${roleSpecific}</li>
                    </ul>
                </div>
            </div>`;
}

// generateHTML() generates the code for the html script and
// returns it to the index.js script
function generateHTML(data) {
    const cards = cardGenerator(data)
     return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
        crossorigin="anonymous">
    <link rel="stylesheet" href="./styles.css">
    <title>Team Info</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        <div id="cardbox">   
            ${cards}
        </div>

    </main>
</body>
</html>
   `;
   }

module.exports = generateHTML;
   