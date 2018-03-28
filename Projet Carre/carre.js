// Generate a random integer
function getRandomInteger(monNombreMaximum) {
    return Math.floor(Math.random() * Math.floor(monNombreMaximum));
}

// Sum of every boxes in a column
// Add this sum in [5][i]
// index is the number of the column
function sumColumn(table, index) {
    table[5] = new Array();
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (index === j) {
                console.log("Mon i : " + i + " Mon j : " + j);
                sum = sum + table[i][index];
                console.log(sum);
                // if (index === i) {
                    // console.log("Coucou");
                    // table[j + 1][index] = sum;
                // }
                
            }
            if (i === 4 && j === 4) {
                
            }
        }
       
    }
 
    
}

// Sum of the diagonale [0][0] to [4][4]
// Add this sum in [5][5]
function sumDiagonal(table) {

}

// Sum of every boxes in a line
// Add this sum in [i][5]
// index is the number of the line
function sumLine(table, index) {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        sum = sum + table[index][i];
        if (i === 4 ) {
            table[index][i + 1] = sum;
        }
    }
}

// Sum of boxes
function sumOfTable(table) {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            sum = sum + table[i][j]; 
        }
    }
    return sum;
}

// Add a box to the table
function addBox(box) {
    // box.push();
}

// Generate the table
function generateTable(table) {
    for (let i = 0; i < 5; i++) {
        table[i] = new Array();
        for (let j = 0; j < 5; j++) {
            table[i][j] = getRandomInteger(10);
        }
    }
}

// Call this function in console.log
// and the other functions do the rest
function displayFinalTable() {
    let myTable = new Array();
    generateTable(myTable);
    
    // console.log(sumOfTable(myTable));
    for (let i = 0; i < 5; i++) {
        
        sumColumn(myTable, i);
        sumLine(myTable, i);
        
    }
    

    return myTable;

};


console.log(displayFinalTable());

