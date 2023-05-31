const URL= 'https://jsonplaceholder.typicode.com/users';
const response = document.querySelector('#response');


document.addEventListener("DOMContentLoaded",callAPI);

function callAPI(){
    fetch(URL)
        .then( resp => resp.json())
        .then( (data) => showData(data) )
}

const showData =(info) => {
    info.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.username}</td>
        <td>${item.email}</td>
        <td>${item.website}</td>
        `
        response.appendChild(row);
    });
}