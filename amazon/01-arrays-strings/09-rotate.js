
var rotate = function(matrix) {
    const n = matrix.length
    for (let i = 0; i < ~~(n / 2) + (n % 2); i++) {
        for (let j = 0; j < ~~(n / 2); j++) {
            const temp = matrix[n - 1 - j][i]
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
            matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 -i];
            matrix[j][n - 1 - i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
    return matrix
};

const examples = {
    example1: { inputParams: [[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]], expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]},
}

module.exports =  {
    examples,
    answer: rotate
}
