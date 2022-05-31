

function plusMinus(arr) {

    let positive = 0
    let negative = 0
    let zero = 0

    // calculate the ratios
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) positive++
        if (arr[i] < 0) negative++
        if (arr[i] === 0) zero++
    }
    
    // Need to handle the situation where there might not be any of a certain type.
    const posResult = isNaN(positive / arr.length) ? 0.000000 : (positive / arr.length).toFixed(6)
    console.log(posResult)
    const negResult = isNaN(negative / arr.length) ? 0.000000 : (negative / arr.length).toFixed(6)
    console.log(negResult)
    const zeroResult = isNaN(zero / arr.length) ? 0.000000 : (zero / arr.length).toFixed(6)
    console.log(zeroResult)

}

let array = [-4, 3, -9, 5, 4, 1]

plusMinus(array)
