
const { expect } = require('chai')
const { minMaxSum, lonelyInteger } = require('../JavaScript/05-LonelyInteger')

describe('JavaScript\\05-LonelyInteger: The lonelyInteger function', function() {

    let i1 = [1, 1, 5, 5, 4, 0, 4, 2, 2]
    it('should return the lonely integer', function() {
        expect(lonelyInteger(i1)).to.be.eq(0)
    })

    let i2 = [9]
    it('should return the lonely integer', function() {
        expect(lonelyInteger(i2)).to.be.eq(9)
    })

});