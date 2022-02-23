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








if (!isNaN ( userAge) && ( userAge < 18) && !isNaN( travelLength ) ) {

    teenTicketPrice = fullTicketPrice - teenDiscount;
    console.log(teenTicketPrice.toFixed(2));
    document.getElementById("ticket").innerHTML += teenTicketPrice.toFixed(2);

} else if (!isNaN ( userAge ) && ( userAge > 65 ) && !isNaN( travelLength ) ){
    
    oldTicketPrice = fullTicketPrice - oldDiscount;
    console.log(oldTicketPrice.toFixed(2));
    document.getElementById("ticket").innerHTML += oldTicketPrice.toFixed(2);

} else if (!isNaN( userAge ) && !isNaN( travelLength ) ) {

    document.getElementById("ticket").innerHTML += fullTicketPrice.toFixed(2);

} else {

    console.error("non sono stati inseriti valori numerici");
    document.getElementById("ticket").innerHTML = "ricarica la pagina e inserisci valori numerici per calcolare il costo del biglietto";
    
}








