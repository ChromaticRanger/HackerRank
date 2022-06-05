
function matrixOptimum(arr) {

    let newArr = []
    
    for (let c = 0; c < arr.length; c++) {
        // sum the first half of the rows
        first = arr[c].slice(0, arr.length / 2)
        firstSum = first.reduce((n,m) => n + m, 0)
        // then the second half
        second = arr[c].slice(-(arr.length / 2))
        secondSum = second.reduce((n,m) => n + m, 0)
        if (secondSum > firstSum)
            arr[c].reverse()
    }
    
    console.log(arr)

}

let i1 = [
    [112, 42, 83, 119],
    [56, 125, 56,  49],
    [15, 78,  101, 43],
    [62, 98, 114, 108]
]

matrixOptimum(i1)

module.exports = {
    matrixOptimum,
}