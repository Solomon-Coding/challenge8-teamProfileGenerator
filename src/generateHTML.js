function cardGenerator(data){ //const cards = 
    let cards = "";
    for (let i=0;i<data.length;i++){
        const name = data[i].getName();
        const id = data[i].getId();
        const email = data[i].getEmail();
        const role = data[i].getRole();
        let roleSpecific = '';
        switch(role){
            case 'Manager':
                const officenumber = data[i].officeNumber;
                roleSpecific = `Office Number: ${officenumber}`;
                break
            case 'Engineer':
                const github = data[i].getGitHub();
                roleSpecific = `GitHub: <a href="https://github.com/${github}" class="card-link">' ${github}`;
                break
            case 'Intern':
                const school = data[i].getSchool();
                roleSpecific = `School: ${school}`;
                break
        }

        cards = cards + `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="#" class="card-link"> ${email}</a></li>
            <li class="list-group-item">${roleSpecific}</li>
            </ul>
            </div>
            </div>`
    }
return cards
}

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
//    <div class="card" style="width: 18rem;">
//    <div class="card-body">
//        <h5 class="card-title">${data.name}</h5>
//        <h6 class="card-subtitle mb-2 text-muted">${data.role}</h6>
//        <ul class="list-group list-group-flush">
//            <li class="list-group-item">ID:${data.id}</li>
//            <li class="list-group-item">Email:${data.email}</li>
//            <li class="list-group-item">ID:${roleSpecific}</li>
//        </ul>
//    </div>
// </div> 
   module.exports = generateHTML;
   