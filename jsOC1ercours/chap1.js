// chap1 partie4

console.log("Martin");
console.log(22);

console.log(6 + 3);
console.log(6 - 3);
console.log(6 * 3);
console.log(6 / 3);


// chap1 partie 5

// Bonjour amélioré
var prenom = prompt("Entrez votre prénom !");
var nom = prompt("Entrez votre nom !");
alert("Bonjour, " + prenom + " " + nom);

// Calcul de TVA
var prixHT = Number(prompt("Entrez votre prix HT"));
var TVA = 19.6;
console.log("Le prix TTC est de " + (prixHT + (prixHT * TVA / 100)) + " euros");


// Conversion Celsius/Fahrenheit
var temperatureCelsius = Number(prompt("Entrez une température en Celsius !"));
var temperatureFahrenheit = temperatureCelsius * (9 / 5) + 32;
console.log(temperatureCelsius + "°C = " + temperatureFahrenheit + "°F");

// Permutation de deux variables
var nombre1 = 5;
var nombre2 = 3;
var temp = 0;
temp = nombre2;
nombre2 = nombre1;
nombre1 = temp;
console.log(nombre1);
console.log(nombre2);


// chap1 partie 6

// Jour suivant
var jour = prompt ("Quel jour sommes-nous aujourd'hui ?");
switch (jour) {
    case "dimanche":
        console.log("Demain, nous serons lundi");
        break;
    case "lundi":
        console.log("Demain, nous serons mardi");
        break;
    case "mardi":
        console.log("Demain, nous serons mercredi");
        break;
    case "mercredi":
        console.log("Demain, nous serons jeudi");
        break;
    case "jeudi":
        console.log("Demain, nous serons vendredi");
        break;
    case "vendredi":
        console.log("Demain, nous serons samedi");
        break;
    case "samedi":
        console.log("Demain, nous serons dimanche");
        break;
    default:
        console.log("Veuillez saisir un jour valide");
}

// Comparaison de deux nombres
var nb1 = Number(prompt("Ecrire un premier nombre"));
var nb2 = Number(prompt("Ecrire un second nombre"));
if (nb1 === nb2) {
    console.log(nb1 + " = " + nb2 + " : ces deux nombres sont égaux.");
} else if (nb1 > nb2){
    console.log(nb1 + " > " + nb2 + " : le premier nombre est plus grand que le second.");
} else {
    console.log(nb1 + " < " + nb2 + " : le second nombre est plus grand que le premier.");
}

// Nombre de jours du mois

var jour = Number(prompt ("Saisir le numéro d'un mois"));
switch (jour) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Ce mois comporte 31 jours.");
        break;
    case 2:
        console.log("Ce mois comporte 28 jours.");
        break;
    case 4: 
    case 6:
    case 9:
    case 11:
        console.log("Ce mois comporte 30 jours.");
        break;
    default:
        console.log("Veuillez saisir un numéro de mois valide !");
}

// Heure suivante
var heures = Number(prompt("Saisir le numéro d'heures"));
var minutes = Number(prompt("Saisir le numéro de minutes"));
var secondes = Number(prompt("Saisir le numéro de secondes"));
if (secondes === 59) {
    if (minutes === 59) {
        if (heures === 23) {
            heures = 0;
            minutes = 0;
            secondes = 0;
        } else {
            heures++;
            minutes = 0;
            secondes = 0;
        }
    } else {
        secondes = 0;
        minutes++;
    }
} else {
    secondes++;
}
console.log("Dans une seconde, il sera " + heures + " heures, " + minutes + " minutes et " + secondes + " secondes");


// chap1 partie 7

// Tournez manège
for (var i = 1; i < 11; i++) { 
    console.log("C'est le tour n°" + i);
}

// Nombres pairs
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    } else {
        console.log(i + " est impair");
    }
}

// Contrôle de saisie
var nombre = Number(prompt("Ecrivez un nombre"));
var bool = false;
while (bool === false) {
    if (nombre < 50 || nombre > 100) {
        var nombre = Number(prompt("Ecrivez un nombre"));
    } else {
        bool = true;
    }
}

// Table de multiplication
var table = Number(prompt("Ecrivez un nombre"));
console.log("Voici la table de multiplication de 5");
for (var i = 1; i < 11; i++) {
    console.log(table + " X "+ i + " = " + (table * i));
}

// Ni oui ni non
var texte = prompt("Ecrivez quelque chose or \"oui\" et \"non\"");
var bool = false;
while (bool === false) {
    if (texte === "oui" || texte === "non") {
        bool = true;
    } else {
        var texte = prompt("Ecrivez quelque chose or \"oui\" et \"non\"");
    }
}

// Triangle
var diese = "";
for (var i = 0; i < 7; i++){
    diese = diese + "#";
    console.log(diese);
}

// FizzBuzz
for (var i = 1; i < 101; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            console.log("FizzBuzz");
        } else {
            console.log("Fizz");
        }
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
