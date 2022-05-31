
// i is multiple of 3 AND 5 print FizzBuzz
// i is multiple of 3 AND NOT 5 print Fizz
// i is multiples 0f 5 AND NOT 3 print Buzz
// not a multiple print i
//
function fizzBuzz(n) {

  let range = Array.from(Array(n)).map((e, i) => i + 1)
  
  for (let num of range) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log('FizzBuzz')
    } else if (num % 3 === 0) {
      console.log('Fizz')
    }
    else if (num % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(num)
    }
  }

}

fizzBuzz(15)
