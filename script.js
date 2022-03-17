let bottone = document.getElementById("invia");

let nome = document.getElementById("inputnomecognome");

let vistaNome = document.getElementById("nome2");



bottone.addEventListener("click",

    function () {
        
        vistaNome.innerHTML = nome.value ;

        let carrozza = Math.floor(Math.random() * 6) + 1;
        console.log(carrozza)
        let carrozzaVista = document.getElementById("carrozza").innerHTML = carrozza;

        let codice = Math.floor(Math.random() * 100) + 9000;
        console.log(codice)
        let codiceVista = document.getElementById("codice").innerHTML = codice;
        
    }

)


// ANCHOR COSTO BIGLIETTO 

