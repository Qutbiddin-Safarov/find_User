let oylik = 200;

let money_1 = 500;

let ask_1 = Number(prompt("Muzeyga:"));
let ask_2 = Number(prompt("Mehmonxonaga:"));

let value = ask_1 + ask_2;
let money_2 = money_1 - value;

let needMoney_1 = ask_1 + ask_2 - 500;

let needMoney_2 = needMoney_1 / oylik;

if( value <= money_1){
    alert("Omad. Qolgan pul miqdori: " + money_2);
    if(money_2 >= 100 && money_2 <=199){
        alert("Qolgan pul ovqatlanishga yetadi")
        alert("Yaxshi dam oling!")
    }else if(money_2 >= 200 && money_2 <= 299){
        alert("Qolgan pul ovqatlanish va istirohat bog'iga yetadi")
        alert("Yaxshi dam oling!")
    }else if(money_2 >= 300 && money_2 <= 500){
        alert("Qolgan pul boshqa shaharlarni ham aylanishga yetadi")
        alert("Yaxshi dam oling!")
    }
}
else{
    alert("Pul kam. yetmayotgan pul miqdori: " + needMoney_1);
    alert("Yeg'ishga ketadigan vaqt:" + needMoney_2)
}