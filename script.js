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
    document.getElementById('distance').innerHTML = `Devi percorrere ${distanceAsInt} Km`
}

if ((isNaN(passengerAgeInt))) {
    document.getElementById('age').innerHTML = 'Puoi inserire solo numeri';

} else {
    document.getElementById('age').innerHTML = `Hai ${passengerAgeInt} anni`
}




