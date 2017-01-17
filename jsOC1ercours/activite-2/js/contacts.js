/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

// Managing the Contact objecy
let Contact = {
    init: function(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },

    decrire: function() {
        const description = 'Nom : ' + this.nom + ', ' + 'prénom : ' + this.prenom;
        return description;
    }
}

// Adding the two persons
const personne1 = Object.create(Contact);
personne1.init('Lévisse', 'Carole');
const personne2 = Object.create(Contact);
personne2.init('Nelsonne', 'Mélodie');
let personnes = [];
personnes.push(personne1);
personnes.push(personne2);

// Listing opts
console.log('Bienvenue dans le gestionnaire de contacts' + '\n' + '1 : Lister les contacts' + '\n' + '2 : Ajouter un contact' + '\n' + '0 : Quitter');
let option = Number(prompt('Choississez une option :'));
// While the choice isn't 0 we loop
while (option !== 0) {
    // If the choice is 1, we list all the persons in personnes
    if (option === 1) {
        personnes.forEach(function(personne) {
            console.log(personne.decrire());
        });
    // If the choice is 2, we adding a new Contact in personnes
    } else if (option === 2) {
        const nom = prompt('Entrez le nom du nouveau contact');
        const prenom = prompt('Entrez le prénom du nouveau contact');
        const personne = Object.create(Contact);
        personne.init(nom, prenom);
        personnes.push(personne);
        console.log('Le contact a bien été ajouté !');
    }

    // Listing opts
    console.log('1 : Lister les contacts' + '\n' + '2 : Ajouter un contact' + '\n' + '0 : Quitter');
    option = Number(prompt('Choississez une option :'));
}
// If the choice is 0 we display a message
console.log('Au revoir !');