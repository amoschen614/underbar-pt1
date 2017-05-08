const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns false if no object property value is truthy', () => {
    const obj = {
      1: 0,
      2: false,
      3: null
    };
    expect(_.some(obj, propVal => !!propVal)).toBe(false);
  });

  it('returns true if any element in an array is truthy', () => {
    const arr = [
      0,
      false,
      null,
      function() { return true; }()
    ];
    expect(_.some(arr, el => !!el)).toBe(true);
  });

});