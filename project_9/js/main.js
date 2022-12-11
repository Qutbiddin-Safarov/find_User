const catalog = document.getElementById('catalog');

let fruits_Memory = [
    {
        fruit: "Apple",
        fruit_price: 10,
        left_kg: 230, 
    },
    {
        fruit: "Melon",
        fruit_price: 6,
        left_kg: 581, 
    },
    {
        fruit: "Watermelon",
        fruit_price: 7,
        left_kg: 431, 
    },
    {
        fruit: "Kiwi",
        fruit_price: 20,
        left_kg: 568, 
    },
    {
        fruit: "Orange",
        fruit_price: 12,
        left_kg: 605, 
    },
    {
        fruit: "Granade",
        fruit_price: 17,
        left_kg: 279, 
    },
    {
        fruit: "Banana",
        fruit_price: 9,
        left_kg: 680, 
    }
];

for(let i = 0; i < fruits_Memory.length; i++) {
    if(i % 2 === 0) {
        catalog.innerHTML += `<tr">
            <td>${i + 1}</td>
            <td>${fruits_Memory[i].fruit}</td>
            <td>${fruits_Memory[i].fruit_price}</td>
            <td>${fruits_Memory[i].left_kg}</td>
        </tr>`
    } else {
        catalog.innerHTML += `<tr class="bg-secondary">
            <td>${i + 1}</td>
            <td>${fruits_Memory[i].fruit}</td>
            <td>${fruits_Memory[i].fruit_price}</td>
            <td>${fruits_Memory[i].left_kg}</td>
        </tr>`
    }
}