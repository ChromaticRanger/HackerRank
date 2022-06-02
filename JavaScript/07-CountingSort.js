
function countingSort(arr) {
    const high = Math.max(...arr) 
    let range = Array.from(Array(high + 1)).map((i) => 0)
    // Go through the original array and increment at the
    // index of the range array by one for each occurance
    for (const num of arr) {
        range[num]++
    }
    return range
}

module.exports = {
    countingSort,
}