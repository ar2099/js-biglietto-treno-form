let bottone = document.getElementById("invia");

let nome = document.getElementById("inputnomecognome");

let vistaNome = document.getElementById("nome2");

let annulla = document.getElementById("annulla")

annulla.addEventListener("click",

function() {
    let riquadroMagico = document.getElementById("sottoparte2");
    riquadroMagico.classList.add("sparita")
}
)

bottone.addEventListener("click",

    function () {
        

        let riquadroMagico = document.getElementById("sottoparte2");
        riquadroMagico.classList.remove("sparita")
        vistaNome.innerHTML = nome.value ;

        let carrozza = Math.floor(Math.random() * 6) + 1;
        console.log(carrozza)
        let carrozzaVista = document.getElementById("carrozza").innerHTML = carrozza;

        let codice = Math.floor(Math.random() * 100) + 9000;
        console.log(codice)
        let codiceVista = document.getElementById("codice").innerHTML = codice;

        let km = document.getElementById("km");
        let kmVista = km.value;
        kmVista = Number(kmVista);
        console.log(kmVista)

        let eta = document.getElementById("eta");
        let etaVista = eta.value;
        console.log(etaVista)

        let variabileEta;

        if (etaVista == "Minorenne") {
            variabileEta = 0.8;
            document.getElementById("vFrase").innerHTML = "Scontato del 20%.";

        } else if (etaVista == "+65") {
            variabileEta = 0.6;
            document.getElementById("vFrase").innerHTML = "Scontato del 40%.";

        } else {
            variabileEta = 1;
            document.getElementById("vFrase").innerHTML = "Nessuna offerta";
        }

        let costoKm = 0.21;

        let costoBiglietto = costoKm * kmVista * variabileEta;

        console.log(costoBiglietto)

        let costoBigliettoArrotondato = (Math.round(costoBiglietto * 10) / 10)

        document.getElementById("vBiglietto").innerHTML = ` ${costoBigliettoArrotondato} ${"€."} `;
        
    }

)


// ANCHOR COSTO BIGLIETTO 

