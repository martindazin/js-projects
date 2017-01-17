/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var nombresEssais = 0 ;
var perdu = true;

while (nombresEssais !== 6 && perdu === true) {
    var tentative = Number(prompt("Saisir un nombre entier entre 1 et 100"));

    // Cheking if tentative is a number
    while (tentative !== parseInt(tentative, 10)) {
        console.log("Ce n'est pas un nombre");
        tentative = Number(prompt("Saisir un nombre entier entre 1 et 100"));
    }
    
    // Checking tentative and solution
    if (tentative > solution) {
        nombresEssais++;
        console.log(tentative + " est trop grand");
    } else if (tentative < solution) {
        nombresEssais++;
        console.log(tentative + " est trop petit");
    } else {
        nombresEssais++;
        console.log("Bravo ! La solution est " + solution + '\n' + "Vous avez trouvé en " + nombresEssais + " essai(s)");
        perdu = false;
    }
    
    // If it's loose
    if (nombresEssais === 6 && perdu === true) {
        console.log("Perdu... La solution était " + solution);
    }
}