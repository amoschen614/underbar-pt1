const _ = require('../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });
});
  
  describe('processing other datatypes', () => {
    it('returns true if all the entries in an array are objects and we test for object datatypes', () => {
      const objs = [{}, {}, {}, {}, {}];
      expect(_.every(objs, obj => typeof obj === 'object')).toBe(true);
    });

    it('returns true if every property value in an object has a non-negative length and we test for their lengths', () => {
      const obj = {
        str: 'string',
        fn: function() { return true; },
        arr: [1, 2, 3]
      };
      expect(_.every(obj, propVal => propVal.length >= 0)).toBe(true);
    });
  });
});