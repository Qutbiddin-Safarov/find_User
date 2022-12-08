// Foydalanuvchilar

let users = [
    {id: "1", name: "Abdussamad", age: 30},
    {id: "2", name: "Farhod", age: 30},
    {id: "3", name: "Jasur", age: 30},
    {id: "4", name: "Soyip", age: 30},
    {id: "5", name: "Qodir", age: 30},
    {id: "6", name: "Rustam", age: 30},
    {id: "7", name: "Nurillo", age: 30},
    {id: "8", name: "Samandar", age: 30},
];

// Foydalanuvchilar

findUser();

function findUser(){ 

    // ID kiritish

    let text = prompt("User ID:");
    let isDefined = false;
    
    // Foydalanuvchini IDsini qidirish

for(let i = 0; i < users.length; i++) {
    let nameText = users[i].id.slice(0, text.length);

    // ID ni solishtirish

    if(nameText === text) {
        isDefined = true;
        alert("Ism: " + users[i].name + ". " + "Yoshi: " + users[i].age);
    }
}
if(!isDefined) {
    alert("Foydalanuvchi topilmadi! Qayta qidiring");  
    findUser(); 
}
}


