// Infos


// Two persons are playing


// We decide that :
// - value 1 = blueTiles
// - value 2 = blackTiles
// - value 3 = redTiles
// - value 4 = whiteTiles
// - value 5 = yellowTiles



// Generate a random integer
function getRandomInteger(monNombreMaximum) {
    return Math.floor(Math.random() * Math.floor(monNombreMaximum));
}

// Generate the table
function generateRound(arrayTile) {

    // console.log(arrayTile);
  
    const numberTiles=20;

    for (let i=0; i < numberTiles; i++) {
        
        let nonZero=0;
        let value=getRandomInteger(5);
        

        // Pas de valeurs négatives

        while(nonZero==0) {
            if((arrayTile[0]==0 && value==0)
                || (arrayTile[1]==0 && value==1)
                || (arrayTile[2]==0 && value==2)
                || (arrayTile[3]==0 && value==3)
                || (arrayTile[4]==0 && value==4)) {
                    console.log("La valeur " + value + " n'est plus dispo");
                    value=getRandomInteger(5);
            }
            else {
                nonZero++;
            }
        }

        // Factories


        if (value==0) {
            arrayTile[0]--;
            
        }
        else if (value==1) {
            arrayTile[1]--;
        }
        else if (value==2) {
            arrayTile[2]--;
        }
        else if (value==3) {
            arrayTile[3]--;
        }
        else if (value==4) {
            arrayTile[4]--;
        }

        console.log(arrayTile);
    }

    console.log("show bag " + arrayTile);


    console.log(arrayTile[0]+arrayTile[1]+arrayTile[2]+arrayTile[3]+arrayTile[4]);

    return arrayTile;
   
}


let bag=100;
let blueTiles=20;
let blackTiles=20;
let redTiles=20;
let whiteTiles=20;
let yellowTiles=20;
let arrayTile=[blueTiles, blackTiles, redTiles, whiteTiles, yellowTiles];


function initialize(blueTiles, blackTiles, redTiles, whiteTiles, yellowTiles, arrayTile) {

    
    arrayTile=[blueTiles, blackTiles, redTiles, whiteTiles, yellowTiles];
    
    console.log("params " + arrayTile);

    return arrayTile;

    
    

}

function showBag(arrayTile) {

    console.log("showBag " + arrayTile);

    return arrayTile;

    
    

}



initialize(blueTiles, blackTiles, redTiles, whiteTiles, yellowTiles, arrayTile);

// showBag(arrayTile);
generateRound(arrayTile);
//showBag(arrayTile);
generateRound(arrayTile);
//showBag(arrayTile);
generateRound(arrayTile);
//showBag(arrayTile);
generateRound(arrayTile);
//showBag(arrayTile);
generateRound(arrayTile);
//showBag(arrayTile);
// generateRound(blueTiles, blackTiles, redTiles, whiteTiles, yellowTiles);
