
const { expect } = require('chai')
const { countingSort } = require('../JavaScript/07-CountingSort')

describe('JavaScript/07-CountingSort: The countingSort function', function() {

    let i1 = [1,1,3,2,1]
    it('should return the frequence array for the input array', function() {
        expect(countingSort(i1)).to.be.eql([0,3,1,1])
    })

});