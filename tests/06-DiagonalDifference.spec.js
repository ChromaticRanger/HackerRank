
const { expect } = require('chai')
const { diagonalDifference } = require('../JavaScript/06-DiagonalDifference')

describe('JavaScript/06-DiagonalDifference: The diagonalDifference function', function() {

    let i1 = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
    it('should return the absolute difference of the sums of its diagonals', function() {
        expect(diagonalDifference(i1)).to.be.eq(15)
    })

});