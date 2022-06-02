// Given a list of integers where all of them appear more than
// once, except one of them, find and return the 'lonely' one.
function lonelyInteger(a) {
    const sorted = a.sort((a, b) => (a - b))
    for (let i = 0; i < sorted.length; i++) {
        let value = sorted[i]
        if (sorted.lastIndexOf(value) === i) {
            // we found lonely integer
            return value
        } else {
            // carry on from the next index
            i = sorted.lastIndexOf(value)
        }
    }
}

let result = lonelyInteger([1, 1, 5, 5, 4, 0, 4, 2, 2])
console.log(result)