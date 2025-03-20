let matrix = [ 
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];
var spiralOrder = function (matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let total = n * m;
    let res = [];

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = m - 1;

    while (total > 0) {
        // Top row
        for (let i = left; i <= right && total > 0; i++) {
            res.push(matrix[top][i]);
            total--;
        }
        top++;

        // Right column
        for (let i = top; i <= bottom && total > 0; i++) {
            res.push(matrix[i][right]);
            total--;
        }
        right--;

        // Bottom row
        for (let i = right; i >= left && total > 0; i--) {
            res.push(matrix[bottom][i]);
            total--;
        }
        bottom--;

        // Left column
        for (let i = bottom; i >= top && total > 0; i--) {
            res.push(matrix[i][left]);
            total--;
        }
        left++;
    }

    return res;
};

spiralOrder(matrix);