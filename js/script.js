const userAge = parseInt( prompt("inserisci la tua età"));
console.log(userAge);

const travelLength = parseInt(prompt("inserisci i km che vuoi percorrere"));
console.log(travelLength);

const kmPrice = 0.21;

const fullTicketPrice = travelLength * kmPrice;
console.log(fullTicketPrice.toFixed(2));

let teenDiscount = fullTicketPrice * 20 / 100;
let teenTicketPrice = "";
let oldDiscount = fullTicketPrice * 40 / 100;
let oldTicketPrice = "";

if (userAge < 18) {

    teenTicketPrice = fullTicketPrice - teenDiscount;
    console.log(teenTicketPrice.toFixed(2));
    document.getElementById("ticket").innerHTML += teenTicketPrice;

} else if (userAge > 65 ){
    
    oldTicketPrice = fullTicketPrice - oldDiscount;
    console.log(oldTicketPrice.toFixed(2));
    document.getElementById("ticket").innerHTML += oldTicketPrice;

} else {

    document.getElementById("ticket").innerHTML += fullTicketPrice;
    
}








