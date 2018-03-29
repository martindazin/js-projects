// Generate a random integer
function getRandomInteger(monNombreMaximum) {
    return Math.floor(Math.random() * Math.floor(monNombreMaximum));
}

// Sum of every boxes in a column
// Add this sum in [numberOfLines + 1][k]
// index is the number of the column
function sumColumn(table, numberOfColumns, numberOfLines) {
    // table[numberOfLines] = new Array();
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

// Sum of the diagonale [0][0] to [numberOfColumns - 1][numberOfLines - 1] if numberOfLines === numberOfColumns
// Add this sum in [numberOfLines][numberOfColumns]
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
// Add this sum in [i][numberOfColumns + 1]
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

// Sum of boxes
function sumOfTable(table, numberOfColumns, numberOfLines) {
    let sum = 0;
    for (let i = 0; i < numberOfLines; i++) {
        for (let j = 0; j < numberOfColumns; j++) {
            sum = sum + table[i][j]; 
        }
    }
    return sum;
}

// Generate the table
function generateTable(table, numberOfColumns, numberOfLines) {
    for (let i = 0; i < numberOfLines; i++) {
        table[i] = new Array();
        for (let j = 0; j < numberOfColumns; j++) {
            table[i][j] = getRandomInteger(10);
        }
    }
    // Define a new Array() for methods :
    // function sumColumn(table, index), sumDiagonal(table)
    table[numberOfLines] = new Array();
}

// Call this function in console.log
// and the other functions do the rest
function displayFinalTable() {
    let myTable = new Array();
    // Define the number of boxes
    const numberOfColumns = 3; 
    const numberOfLines = 7;
    // Execute functions
    generateTable(myTable, numberOfColumns, numberOfLines);
    sumColumn(myTable, numberOfColumns, numberOfLines);
    sumLine(myTable, numberOfColumns, numberOfLines);
    sumDiagonal(myTable, numberOfColumns, numberOfLines);


    return myTable;
};


console.log(displayFinalTable());
