const chai = require('chai');
const assert = chai.assert;
const quickSort = require('../scripts/quickSort.js');
const randomArrayGenerator = require('../scripts/randomArrayGenerator.js');

describe('Quick Sort', () => {

  it('should be a function', () => {
    assert.isFunction(quickSort);
  });

  it('should sort positive numbers from least to greatest', () => {
    let numbers = [5, 2, 4, 1, 7, 9];
    let sortedNumbers = quickSort(numbers);

    assert.deepEqual(sortedNumbers, [1, 2, 4, 5, 7, 9]);

  })

  it('should sort negative numbers from least to greatest', () => {
    let numbers = [-5, -2, -4, -1, -7, -9];
    let sortedNumbers = quickSort(numbers);

    assert.deepEqual(sortedNumbers, [-9, -7, -5, -4, -2, -1]);

  })

  it('should sort letters alphabetically', () => {
    let letters = ['x', 'a', 's', 'r', 'z'];
    let sortedLetters = quickSort(letters);

    assert.deepEqual(sortedLetters, ['a', 'r', 's', 'x', 'z']);

  })

  it('should be able to sort large arrays of large numbers', () => {
    let randomNumberArray = randomArrayGenerator(1000);
    let prototypeCheatingSortedNumbers = randomNumberArray.sort((a,b) => a - b);
    let quickSortedNumbers = quickSort(randomNumberArray);

    assert.deepEqual(quickSortedNumbers, prototypeCheatingSortedNumbers);

  })

})
