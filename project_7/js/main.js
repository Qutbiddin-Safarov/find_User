let num = prompt('Enter num (over:9999) :')
if (isNaN(num)){
    alert('please enter num :')
}
if (num < 10){
    alert('a single-digit num');
} 
else if(num >= 10 && num < 100){
    alert('a two-digit num');
}
 else if(num >= 100 && num < 1000){
    alert('a three-digit num');
}
else if(num >= 1000 && num < 10000){
    alert('a four-digit num');
}