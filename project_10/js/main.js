const tbody = document.querySelector('#tbody');
const pNameInput = document.querySelector('#p_name');
const pPriceInput = document.querySelector('#p_price');
const pWeightInput = document.querySelector('#p_weight');

let fruits = [
    { product_name: "Apple", product_price: 2.1, product_weight: 320 },
    { product_name: "Banana", product_price: 1.7, product_weight: 84 },
    { product_name: "Orange", product_price: 2.5, product_weight: 86 },
    { product_name: "Pineapple", product_price: 3.0, product_weight: 126 },
    { product_name: "Kiwi", product_price: 4.0, product_weight: 550 },
    { product_name: "Mango", product_price: 2.7, product_weight: 328 },
    { product_name: "Cherry", product_price: 1.8, product_weight: 360 },
    { product_name: "Berry", product_price: 1.9, product_weight: 77 },
    { product_name: "Strawberry", product_price: 2.9, product_weight: 620 },
];

let to_Check = fruits.product_name;

pNameInput.addEventListener('input', (e) => {
    e.target.classList.remove('is-invalid');
});
pPriceInput.addEventListener('input', (e) => {
    e.target.classList.remove('is-invalid');
});
pWeightInput.addEventListener('input', (e) => {
    e.target.classList.remove('is-invalid');
})
function addProduct(e) {
    

    e.preventDefault();
    console.log(e);
    let len = fruits.length;

    let newProduct = {
        product_name: e.target[0].value,
        product_price: +e.target[1].value,
        product_weight: +e.target[2].value,
    };
    if(newProduct.product_name === ''
    && newProduct.product_price === 0
    && newProduct.product_weight === 0
    ){
        e.target[0].classList.add('is-invalid');
        e.target[1].classList.add('is-invalid');
        e.target[2].classList.add('is-invalid');
        
    }
    else if(newProduct.product_price === 0
        && newProduct.product_weight === 0){
        e.target[1].classList.add('is-invalid');
        e.target[2].classList.add('is-invalid');
        }
    else if(newProduct.product_name === ''
            && newProduct.product_weight === 0){
            e.target[0].classList.add('is-invalid');
            e.target[2].classList.add('is-invalid');
            }
    else if(newProduct.product_name === ''
                && newProduct.product_price === 0){
                e.target[0].classList.add('is-invalid');
                e.target[1].classList.add('is-invalid');
            }
    else if(newProduct.product_name === ''){
            e.target[0].classList.add('is-invalid');
    }else if(newProduct.product_price === 0){
            e.target[1].classList.add('is-invalid');
    }else if(newProduct.product_weight === 0){
            e.target[2].classList.add('is-invalid');
    }else if(to_Check = e.target[0].value){
        alert("Error. This fruit is in catalog. Try another fruit.")
    }
    else {
        e.target[0].classList.remove('is-invalid');
        e.target[1].classList.remove('is-invalid');
        e.target[2].classList.remove('is-invalid');
        fruits.push(newProduct);

        let { product_name, product_price, product_weight } = newProduct;

        tbody.innerHTML += `<tr>
        <td>${fruits.length}</td>
        <td>${product_name}</td>
        <td>${product_price}</td>
        <td>${product_weight}</td>
    </tr>`

        e.target.reset();

        if (len < fruits.length) {
            alert("Your product successfully created!");
        }
    }
}

function writeToTable() {
    tbody.innerHTML = "";
    for (let f = 0; f < fruits.length; f++) {
        tbody.innerHTML += `<tr>
            <td>${f + 1}</td>
            <td>${fruits[f].product_name}</td>
            <td>${fruits[f].product_price}</td>
            <td>${fruits[f].product_weight}</td>
        </tr>`
    }
}



writeToTable();