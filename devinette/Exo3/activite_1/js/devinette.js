/* 
Activité : jeu de devinette
alanleclech@free.fr - le 26-12-2016


PS: j'ai remplacer console.log par des alert(); c'est quand même plus sympa ^^ 
*/


alert("Bienvenue dans ce jeu de devinette !\n");

var nbrEssai = 0;
var solution = Math.floor(Math.random() * 100) + 1;

console.log(solution);


do // boucle exec au moins une foi, tant que l'usr n'as pas la solution et que le nbr d'essai est < à 6.
{
    var solutionUser = parseInt(prompt("Entrez un nombre entre 1 et 100 :"));
        
    if (solutionUser > solution)
        {
           alert("C'est Moins !\n");
            nbrEssai++; // j'incrémente dans la condition pour ne pas incrémenter en cas de mauvaise saisie. 
        }
    else if (solutionUser < solution)
        {
            alert("C'est plus !\n");
            nbrEssai++; // pareil ICI 
        }
    else if (solutionUser === solution)
        {
            alert(solutionUser+ " est bien la solution :)\nvous avez trouvé en " + nbrEssai + " tentatives\n");
            
        }
    else
        {
            alert("Veuillez rentrez des informations correct ! :(\n");
        }
       
    if (nbrEssai > 6)
        alert("PERDU :'( La solution est " + solution);

}while( (solutionUser !== solution) && (nbrEssai <= 6) ); 

