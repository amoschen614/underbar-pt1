_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });
  it('maps every function in an array to their output given parameters (3, 2)', () => {
    const arr = [
        function(a, b) { return a + b; },
        function(a, b) { return a * b; },
        function(a, b) { return a - b; },
        function(a, b) { return a + ', ' + b}
    ];
    const mappedArr = _.map(arr, (fn) => fn(3, 2));
    expect(mappedArr).toEqual([5, 6, 1, '3, 2']);
  });
});