// chap2 partie1

// Bonjour amélioré

function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

var prenom = prompt("Entrez votre prénom !");
var nom = prompt("Entrez votre nom !");
console.log(direBonjour(prenom, nom));

// Carré d'un nombre
function carre(x) {
    console.log(x * x);
}

for (var i = 1; i < 11; i++) {
    carre(i);
}

// Minimum de deux nombres
function min(nombre1, nombre2) {
    if (nombre1 > nombre2) {
        return nombre1;
    } else if (nombre1 < nombre2) {
        return nombre2;
    } else {
        return nombre1;
    }
}

console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1

// Calculatrice
function calculer(nombre1, operande, nombre2) {
    switch (operande) {
        case "+":
            return nombre1 + nombre2;
        case "-":
            return nombre1 - nombre2;
        case "*":
            return nombre1 * nombre2;
        case "/":
            return nombre1 / nombre2;
        default:
            return "Erreur d'opérande";
    }
}
console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity

// Périmètre et aire d'un cercle
function perimetre(rayon) {
    return 2 * Math.PI * rayon;
}
function aire(rayon) {
    return Math.PI * rayon * rayon;
}
var rayon = Number(prompt("Saisir le rayon du cercle"));
console.log(perimetre(rayon));
console.log(aire(rayon));


// chap2 partie2

// Manipulez les chaines de caractères

function minuscules(mot) {
    return mot.toLowerCase();
}
function majuscules(mot) {
    return mot.toUpperCase();
}
function voyellesConsonnes(mot) {
    var consonnes = 0;
    var voyelles = 0;
    for (var i = 0; i < mot.length; i++) {
        if (mot[i] === "a" || mot[i] === "e" || mot[i] === "i" || mot[i] === "o" || mot[i] === "u" || mot[i] === "y") {
            voyelles++;
        } else {
            consonnes++;
        }
    }
    return "Il contient " + voyelles + " voyelles(s) et " + consonnes + " consonne(s)"
}

function inverser(mot) {
    var motInverse = "";
    for (var i = (mot.length - 1); i >= 0; i--) {
        motInverse +=  mot[i];
    }
    return motInverse;
}

function palindrome(mot) {
    mot = minuscules(mot);
    var check = inverser(mot);
    if (mot === check) {
        return "C'est un palindrome";
    } else {
        return "Ce n'est pas un palindrome";
    }
}

function convertirEnLeetSpeak(mot) {
    var motEnLeetSpeak = "";
    mot = minuscules(mot);
    for (var i = 0; i < mot.length; i++) {
      motEnLeetSpeak += trouverLettreLeet(mot[i]);
    }
    return motEnLeetSpeak;
}

function trouverLettreLeet(lettre) {
      switch (lettre) {
            case "a":
                return "4";
            case "b":
                return "8";
            case "e":
                return "3";
            case "l":
                return "1";
            case "o":
                return "0";
            case "s":
                return "5";
            default:
                return lettre;
        }
}

var mot = prompt("Ecrire un mot");

console.log("Il s'écrit en minuscules " + minuscules(mot));
console.log("Il s'écrit en majuscules " + majuscules(mot));
console.log(voyellesConsonnes(mot));

console.log("Il s'écrit à l'envers " + inverser(mot));

console.log(palindrome(mot));
console.log("Il s'écrit en leet speak " + convertirEnLeetSpeak(mot));


// chap2 partie3

// Mini-jeu
var Personnage = {
    // Initialise le personnage
    initPerso: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
    },
    // Attaque un personnage cible
    attaquer: function (cible) {
        if (this.sante > 0) {
            var degats = this.force;
            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
            cible.sante = cible.sante - degats;
            if (cible.sante > 0) {
                console.log(cible.nom + " a encore " + cible.sante + " points de vie");
            } else {
                cible.sante = 0;
                console.log(cible.nom + " est mort !");
            }
        } else {
            console.log(this.nom + " ne peut pas attaquer : il est mort...");
        }
    }
};

var Joueur = Object.create(Personnage);
// Initialise le joueur
Joueur.initJoueur = function (nom, sante, force) {
    this.initPerso(nom, sante, force);
    this.xp = 0; // L'expérience du joueur est toujours initialisée à 0
};
// Renvoie la description du joueur
Joueur.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et " + this.xp + " points d'expérience";
    return description;
};
// Combat un adversaire
Joueur.combattre = function (adversaire) {
    this.attaquer(adversaire);
    if (adversaire.sante === 0) {
        console.log(this.nom + " a tué " + adversaire.nom + " et gagne " +
            adversaire.valeur + " points d'expérience");
        this.xp += adversaire.valeur;
    }
};

var Adversaire = Object.create(Personnage);
// Initialise l'adversaire
Adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
    this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
};

var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Aurora", 150, 25);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Glacius", 130, 30);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog", 40, 20, "orc", 10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire());
console.log(joueur2.decrire());



// Modélisation d'un chien
var chien = {
    nom: "Crockdur",
    race: "mâtin de Naples",
    taille: "75",

    aboyer: function() {
        return "Grrr ! Grrr !";
    }
};
console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());

// Modélisation d'un cercle
var r = Number(prompt("Entrez le rayon d'un cercle :"));
var cercle = {};
cercle.rayon = r;
cercle.perimetre = function() {
    return 2 * Math.PI * this.rayon;
};
cercle.aire = function() {
    return Math.PI * this.rayon * this.rayon;
};
console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());

// Modélisation d'un compte bancaire
var compte = {
    titulaire: "Alex",
    solde: 0,

    crediter: function(montant) {
        this.solde = this.solde + montant;
    },
    debiter: function(montant) {
        this.solde = this.solde - montant;
    },
    decrire: function() {
        var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
        return description;
    }
};

console.log(compte.decrire());
var credit = Number(prompt("Entrez le montant à créditer :"));
compte.crediter(credit);
var debit = Number(prompt("Entrez le montant à débiter :"));
compte.debiter(debit);
console.log(compte.decrire());


// chap2 partie4

// Modélisation de plusieurs chiens
var Chien = {
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    aboyer: function() {
        var aboiement = "Whoua ! Whoua !";
        if(this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
}
var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());
var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());


// Gestion de l'inventaire des personnages
var Personnage = {
    initPerso: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.inventaire = {
            or: 10,
            cles: 1
        };
        
    },
    attaquer: function (cible) {
        if (this.sante > 0) {
            var degats = this.force;
            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
            cible.sante = cible.sante - degats;
            if (cible.sante > 0) {
                console.log(cible.nom + " a encore " + cible.sante + " points de vie");
            } else {
                cible.sante = 0;
                console.log(cible.nom + " est mort !");
            }
        } else {
            console.log(this.nom + " ne peut pas attaquer : il est mort...");
        }
    }
};

var Joueur = Object.create(Personnage);
Joueur.initJoueur = function (nom, sante, force) {
    this.initPerso(nom, sante, force);
    this.xp = 0;  
};
Joueur.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force, " + this.xp + " points d'expérience, " +
        this.inventaire.or + " pièces d'or et " + this.inventaire.cles + " clé(s)";
    return description;
};
Joueur.combattre = function (adversaire) {
    this.attaquer(adversaire);
    if (adversaire.sante === 0) {
        console.log(this.nom + " a tué " + adversaire.nom + " et gagne " +
            adversaire.valeur + " points d'expérience, ainsi que " + adversaire.inventaire.or +
            " pièces d'or et " + adversaire.inventaire.cles + " clé(s)");
        this.xp += adversaire.valeur;
        this.inventaire.or += adversaire.inventaire.or;
        this.inventaire.cles += adversaire.inventaire.cles;
    }
};

var Adversaire = Object.create(Personnage);
Adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
    this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
};

var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Aurora", 150, 25);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Glacius", 130, 30);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog", 40, 20, "orc", 10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire());
console.log(joueur2.decrire());


// Comptes bancaire et comptes épargne
var CompteBancaire = {
    initCB : function(titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = solde;
    }
    ,
    crediter: function(montant) {
        this.solde = this.solde + montant;
    },
    debiter: function(montant) {
        this.solde = this.solde - montant;
    },
    decrire: function() {
        var description = "Titulaire : " + this.titulaire +
        " , solde : " + this.solde + " euros";
        return description;
    }
};

var CompteEpargne = Object.create(CompteBancaire);
CompteEpargne.initCE = function(titulaire, solde, tauxInteret) {
    this.initCB(titulaire, solde);
    this.tauxInteret = tauxInteret;
};

CompteEpargne.ajouterInterets = function() {
    var interets = this.solde * this.tauxInteret;
    this.solde += interets;
};

var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());


// chap2 partie5

// Les mousquetaires
var mousquetaires = ["Arthos", "Porthos", "Aramis"];
console.log("Voici les trois mousquetaires :");
for(var i = 0; i < mousquetaires.length; i++) {
    console.log(mousquetaires[i]);
}
mousquetaires.push("D'Artagnan");
console.log("A présent, ils sont quatre !");
for(var i = 0; i < mousquetaires.length; i++) {
    console.log(mousquetaires[i]);
}


// Somme des valeurs
var valeurs = [11, 3, 7, 2, 9, 10];
var somme = 0;
for(var i = 0; i < valeurs.length; i++) {
    somme += valeurs[i];
}
console.log("La somme des éléments vaut " + somme);


// Maximum des valeurs
var valeurs = [11, 3, 7, 2, 9, 10];
var maximum = 0;
for (var i = 0; i < valeurs.length; i++) {
    if (maximum < valeurs[i]) {
        maximum = valeurs[i];
    }
}
console.log("Le maximum des éléments vaut " + maximum);


// Saisie d'une liste de mots
var mot = prompt("Entrez un mot ou tapez stop pour arrêter :");
var mots = [];
while (mot !== "stop") {
    mots.push(mot);
    var mot = prompt("Entrez un mot ou tapez stop pour arrêter :");
}
for (var i = 0; i < mots.length; i++) {
    console.log(mots[i]);
}


// Liste de films
var Film = {
    init: function(titre, annee, realisateur) {
        this.titre = titre;
        this.annee = annee;
        this.realisateur = realisateur;
    },
    decrire: function() {
        var description = this.titre + " (" + this.annee + ", " + this.realisateur + ")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Le Loup de Wall Street", 2013, "Martin Scorsese");
var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015, "Pete Docter");
var film3 = Object.create(Film);
film3.init("Babysitting", 2013, "Philippe Lacheau et Nicolas Benamou");

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
    console.log(film.decrire());
});


// Gestion d'un chenil
var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};

var chien1 = Object.create(Chien); 
chien1.init("Crokdur", "mâtin de Naples", 75);
var chien2 = Object.create(Chien);
chien2.init("Pupuce", "bichon", 22);
var chien3 = Object.create(Chien);
chien3.init("Médor", "labrador", 58);

var chiens = [];
chiens.push(chien1);
chiens.push(chien2);
chiens.push(chien3);

console.log("Le chenil héberge " + chiens.length + " chien(s)");

for(var i = 0; i < chiens.length; i++) {
    console.log(chiens[i].nom + " est un " + chiens[i].race + " mesurant " + chiens[i].taille + "cm." +
    "Il aboie : " + chiens[i].aboyer());
}
