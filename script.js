// richiesta dati
let distance = prompt('Quanti Km devi percorrere?');
let passengerAge = prompt('Quanti anni hai?');

// conversione stringhe in int
let distanceAsInt = parseInt(distance);
let passengerAgeInt = parseInt(passengerAge);

// controllo dati
if ((isNaN(distanceAsInt))) {
    document.getElementById('distance').innerHTML = 'Puoi inserire solo numeri';

} else {
    document.getElementById('distance').innerHTML = `Devi percorrere ${distanceAsInt} Km`;
}

if ((isNaN(passengerAgeInt))) {
    document.getElementById('age').innerHTML = 'Puoi inserire solo numeri';

} else {
    document.getElementById('age').innerHTML = `Hai ${passengerAgeInt} anni`;
}

// calcolo prezzo totale

let totalPrice = (distance * 0.21);

if (passengerAgeInt < 18) {
    totalPrice = ((distance * 0.21) - ((totalPrice * 20) / 100));
}
console.log(totalPrice);

if (passengerAgeInt > 65) {
    totalPrice = ((distance * 0.21) - ((totalPrice * 40) / 100));
}

document.getElementById('price').innerHTML = `Il tuo biglietto costa ${totalPrice} euro`


