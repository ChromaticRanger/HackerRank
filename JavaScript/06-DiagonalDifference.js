
function diagonalDifference(arr) {

    //  [11, 2, 4], 
    //  [4, 5, 6], 
    //  [10, 8, -12]

    let left = 0    
    let right = 0

    for (let n = 0, m = arr.length - 1; n < arr.length; n++, m--) {
        left += arr[n][n]
        right += arr[n][m]
    }

    return Math.abs(left - right)
}

module.exports = {
    diagonalDifference,
}