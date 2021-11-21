const {shuffleArray} = require('./utils')

var testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
describe('shuffleArray unit tests', () => {

    test('result should be array type', () => {
    let copyLength = shuffleArray(testArr)
    expect(Array.isArray(copyLength)).toBe(true)    
    })
    
    test('result length should be 10', () => {
    let copyLength = shuffleArray(testArr)
    expect(copyLength).toHaveLength(10)     
    })

    test('result contains numbers 1 - 10', () => {
    let copyLength = shuffleArray(testArr)
    for(let i = 1; i < 11; i++){
        expect(copyLength).toContain(i);   
        }
    })
})