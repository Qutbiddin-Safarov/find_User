


const tbody = document.getElementById('tbody');

let users = [
    { name: "Abdussamad", age: 12 },
    { name: "Farhod", age: 19 },
    { name: "Jasur", age: 20 },
    { name: "Soyip", age: 16 },
    { name: "Qodir", age: 18 },
    { name: "Rustam", age: 17 },
    { name: "Nurillo", age: 17 },
    { name: "Samandar", age: 21 },
    { name: "Abror", age: 21 },
];

users = users.sort(function (a, b) {
    if(a.name < b.name) {
        return - 1;
    } 

    if(a.name > b.name) {
        return 1;
    }

    return 0;
});

function z_A(){
} 


for(let i = 0; i < users.length; i++) {
    if(i % 2 === 0) {
        tbody.innerHTML += `<tr">
            <td>${i + 1}</td>
            <td>${users[i].name}</td>
            <td>${users[i].age}</td>
        </tr>`
    } else {
        tbody.innerHTML += `<tr class="bg-secondary">
            <td>${i + 1}</td>
            <td>${users[i].name}</td>
            <td>${users[i].age}</td>
        </tr>`
    }
}