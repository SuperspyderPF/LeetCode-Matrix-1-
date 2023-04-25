/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    let firstRowHasZero = false;
    let firstColHasZero = false;
    
    // check if first row has zero
    for(let j=0; j<cols; j++) {
        if(matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }
    
    // check if first column has zero
    for(let i=0; i<rows; i++) {
        if(matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }
    
    // mark zeros on first row and column
    for(let i=1; i<rows; i++) {
        for(let j=1; j<cols; j++) {
            if(matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }
    
    // use mark to set elements
    for(let i=1; i<rows; i++) {
        for(let j=1; j<cols; j++) {
            if(matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    // set zeros for first row and column if needed
    if(firstRowHasZero) {
        for(let j=0; j<cols; j++) {
            matrix[0][j] = 0;
        }
    }
    
    if(firstColHasZero) {
        for(let i=0; i<rows; i++) {
            matrix[i][0] = 0;
        }
    }
};
