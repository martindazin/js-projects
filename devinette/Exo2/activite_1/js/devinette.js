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
var lcI=0;
lcContinue=true;
while (lcI<6 && lcContinue)
    {
        var lcNombreRecu = Number(prompt("Veuillez saisir un nombre entre 1 et 100:"));
        if (lcNombreRecu==solution)
            {
                console.log("Bravo ! La solution était "+solution);
                lcContinue=false;
            }
        else
            {
                if (lcNombreRecu < solution)
                    {
                        console.log(lcNombreRecu + " est trop petit");
                    }
                else 
                    {
                        console.log(lcNombreRecu + " est trop grand");
                    }
            }
        lcI+=1;
    }