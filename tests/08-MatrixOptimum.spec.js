
const { expect } = require('chai')
const { matrixOptimum } = require('../JavaScript/08-MatrixOptimum')

describe('JavaScript/08-MatrixOptimum: The matrixOptimum function', function() {

    let i1 = [
        [112, 42, 83, 119],
        [56, 125, 56,  49],
        [15, 78,  101, 43],
        [62, 98, 114, 108]
    ]

    it('should return the highest summed top left quadrant after manipulating the matrix', function() {
        expect(matrixOptimum(i1)).to.be.eq(414)
    })

});