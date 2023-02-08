const cards = function cardGenerator(data){
    
    //for loop
    switch(role){
        case 'Engineer':
            return roleSpecific = 'GitHub: https://github.com/'+ data.github;
        case 'Intern':
            return roleSpecific = 'School:' + data.school;
    }

   return `<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data.role}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${data.id}</li>
                <li class="list-group-item">Email: <a href="#" class="card-link">${data.email}</a></li>
                <li class="list-group-item">${roleSpecific}</li>
            </ul>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
  </div>`
}

function generateHTML(data) {

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
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${data.role}</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:${data.id}</li>
                        <li class="list-group-item">Email:${data.email}</li>
                        <li class="list-group-item">ID:${roleSpecific}</li>
                    </ul>
                </div>
            </div>    
            ${cards}
        </div>

    </main>
</body>
</html>
   `;
   }
   
   module.exports = generateHTML;
   