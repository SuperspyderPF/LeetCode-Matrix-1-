/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    
    // transpose matrix
    for(let i=0; i<n; i++) {
        for(let j=i; j<n; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    // reverse each row
    for(let i=0; i<n; i++) {
        matrix[i].reverse();
    }
};
