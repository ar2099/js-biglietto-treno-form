// const costoKilometro = 0.21;

// let eta = prompt("Inserisci l'età");

// let costoBiglietto = 5 * costoKilometro;

// console.log( costoBiglietto)

let costoKm = 0.21;

let eta = document.getElementById("inputEta");

let km = prompt("Quanti km devi percorrere?");

km = Number(km)

eta = Number(eta)

let variabileEta;

if (eta < 18) {
    variabileEta = 0.8;
    document.getElementById("vFrase").innerHTML = "Essendo minorenne, il tuo biglietto è scontato del 20%.";

} else if (eta >= 65) {
    variabileEta = 0.6;
    document.getElementById("vFrase").innerHTML = "Essendo +65 anni, il tuo biglietto è scontato del 40%.";

} else {
    variabileEta = 1;
    document.getElementById("vFrase").innerHTML = "Sul tuo biglietto non sono previsti sconti";
}

let costoBiglietto = costoKm * km * variabileEta;

console.log(costoBiglietto)

let costoBigliettoArrotondato = (Math.round(costoBiglietto * 10) / 10)

// parte grafica 

document.getElementById("vEta").innerHTML = ` ${eta} ${" anni."} `;
document.getElementById("vKm").innerHTML = ` ${km} ${" chilometri."} `;
document.getElementById("vBiglietto").innerHTML = ` ${costoBigliettoArrotondato} ${"€."} `;



