let bottone = document.getElementById("invia");

let nome = document.getElementById("inputnomecognome");

let vistaNome = document.getElementById("nome2");

bottone.addEventListener("click",

    function () {
        console.log()
        vistaNome.innerHTML = nome.value ;
    }

)

// EVENTO
