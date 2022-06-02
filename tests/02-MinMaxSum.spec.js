
const { expect } = require('chai')
const { minMaxSum } = require('../JavaScript/02-MinMaxSum')

describe('JavaScript\\02-MinMaxSum: The minMaxSum function', function() {

    let input = [3, 5, 1, 9, 7]
    it('should return the min and max values of 4 integers', function() {
        expect(minMaxSum(input)).to.be.eq('16 24')
    })

});