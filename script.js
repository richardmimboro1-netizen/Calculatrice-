const nombre1 = document.getElementById("nombre1");
const nombre2 = document.getElementById("nombre2");
const operation = document.getElementById("operation");

const calculer = document.getElementById("calculer");
const resultat = document.getElementById("resultat");
const reset = document.getElementById("reset");


calculer.addEventListener("click", function() {

    const n1 = Number(nombre1.value);
    const n2 = Number(nombre2.value);

    if (nombre1.value === "" || nombre2.value === "") {

        resultat.textContent = "Veuillez remplir les deux nombres.";
        return;
    }

    if (operation.value === "") {

        resultat.textContent = "Veuillez choisir une opération.";
        return;
    }


    let resultatCalcul;


    if (operation.value === "addition") {

        resultatCalcul = n1 + n2;

    } else if (operation.value === "soustraction") {

        resultatCalcul = n1 - n2;

    } else if (operation.value === "multiplication") {

        resultatCalcul = n1 * n2;

    } else if (operation.value === "division") {

        if (n2 === 0) {

            resultat.textContent = "Impossible de diviser par zéro.";
            return;
        }

        resultatCalcul = n1 / n2;
    }


    resultat.textContent = "Résultat : " + resultatCalcul;

});


reset.addEventListener("click", function() {

    nombre1.value = "";
    nombre2.value = "";

    operation.value = "";

    resultat.textContent = "";

});
