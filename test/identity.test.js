const _ = require('../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(5)).toBe(5);
  });

  it('returns the same array if given an array', () => {
    const val = [1, 2, 3];
    expect(_.identity(val)).toBe(val);
  });

  it('returns the same object if given an object', () => {
    const val = {
      'foo': 'bar'
    };
    expect(_.identity(val)).toBe(val);
  });

  it('returns the boolean when given a boolean', () => {
    expect(_.identity(false)).toBe(false);
  });

  it('returns the same string when given a string', () => {
    const str = 'hello';
    expect(_.identity(str)).toBe(str);
  });

  it('returns the same function if given a function', () => {
    const fn = function() { return 1 + 2; };
    expect(_.identity(fn())).toBe(fn());
  });
});