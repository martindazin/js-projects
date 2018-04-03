// Generate the table
function generateTable(table, numberOfColumns, numberOfLines) {
    for (let i = 0; i < numberOfLines; i++) {
        table[i] = new Array();
        for (let j = 0; j < numberOfColumns; j++) {
            table[i][j] = getRandomInteger(10);
        }
    }
    // Define a new Array() for methods :
    // function sumColumn(myTable, numberOfColumns, numberOfLines), sumDiagonal(myTable, numberOfColumns, numberOfLines)
    table[numberOfLines] = new Array();
}

// Generate a random integer
function getRandomInteger(monNombreMaximum) {
    return Math.floor(Math.random() * Math.floor(monNombreMaximum));
}

// Sum of every boxes in a column
// Add this sum in [numberOfLines][indexOfColumn]
function sumColumn(table, numberOfColumns, numberOfLines) {
    for (let i = 0; i < numberOfColumns; i++) { 
        let sum = 0;
        for (let j = 0; j < numberOfLines; j++) {
            for (let k = 0; k < numberOfColumns; k++) {
                if (i === k) {
                    sum = sum + table[j][k];
                }
                if ((numberOfLines === j + 1) && (numberOfColumns === k + 1)) {
                    table[numberOfLines][i] = sum;
                } 
            }
        }
    }
}

// if (numberOfLines === numberOfColumns) {
    // Sum of the diagonale [0][0] to [numberOfColumns - 1][numberOfLines - 1] 
    // Add this sum in [numberOfLines][numberOfColumns]
// }
// else {
    // return null;   
// }
function sumDiagonal(table, numberOfColumns, numberOfLines) {
    if (numberOfColumns === numberOfLines) {
        let sum = 0;
        for (let i = 0; i < numberOfLines; i++) {
            for (let j = 0; j < numberOfColumns; j++) {
                if (i === j) {
                    sum = sum + table[i][j];
                }
                if ((numberOfLines === i + 1) && (numberOfColumns === j + 1)) {
                    table[numberOfLines][numberOfColumns] = sum;
                }   
            }
        }
    }
    else {
        return null;
    }
}

// Sum of every boxes in a line
// Add this sum in [indexOfLine][numberOfColumns]
function sumLine(table, numberOfColumns, numberOfLines) {
    for (let i = 0; i < numberOfLines; i++) { 
        let sum = 0;
        for (let j = 0; j < numberOfColumns; j++) {
            sum = sum + table[i][j];
            if (j === numberOfColumns - 1) {
                table[i][j + 1] = sum;
            }
        }
    }
}

// Sum of every boxes in the table
// Return the variable sum which is a integer
function sumOfTable(table, numberOfColumns, numberOfLines) {
    let sum = 0;
    for (let i = 0; i < numberOfLines; i++) {
        for (let j = 0; j < numberOfColumns; j++) {
            sum = sum + table[i][j]; 
        }
    }
    return sum;
}

// Call this function in console.log
// and the other functions do the rest
// Don't change the content of this function !
function displayFinalTable() {
    let myTable = new Array();
    // Define the number of boxes
    const numberOfColumns = 5; 
    const numberOfLines = 5;
    // Execute functions
    generateTable(myTable, numberOfColumns, numberOfLines);
    sumColumn(myTable, numberOfColumns, numberOfLines);
    sumDiagonal(myTable, numberOfColumns, numberOfLines);
    sumLine(myTable, numberOfColumns, numberOfLines);
    sumOfTable(myTable, numberOfColumns, numberOfLines)


    return myTable;
};


console.log(displayFinalTable());
