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
function generateRound() {
    const numberTiles=20;
    let blueTiles=20;
    let blackTiles=20;
    let redTiles=20;
    let whiteTiles=20;
    let yellowTiles=20;

    for (let i=0; i < numberTiles; i++) {
        if (getRandomInteger(5)=1) {
            blueTiles--;
        }
        else if (getRandomInteger(5)=2) {
            blackTiles--;
        }
        else if (getRandomInteger(5)=3) {
            --;
        }
        else if (getRandomInteger(5)=4) {
            whiteTiles--;
        }
        else if (getRandomInteger(5)=5) {
            yellowTiles--;
        }

        
    }
   
}


generateRound();