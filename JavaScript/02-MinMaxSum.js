
// Given five positive integers, find the minimum and maximum values that can be calculated 
// by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.
//


function minMaxSum(arr) {

  // Key here is having the values sorted
  const sorted = arr.sort((a, b) => (a - b))

  // now the values are sorted the minimum is the first 4
  const minArr = sorted.slice(0, 4)
  const maxArr = sorted.slice(1)

  const min = minArr.reduce((p, c) => p + c, 0)
  const max = maxArr.reduce((p, c) => p + c, 0)

  console.log(`${min} ${max}`)

}

let input = [3, 5, 1, 9, 7]

minMaxSum(input)

