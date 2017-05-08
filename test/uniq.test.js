const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups a list of strings', () => {
    const strs = ['a', 'b', 'c', 'b', 'c', 'd'];
    expect(_.uniq(strs)).toEqual(['a', 'b', 'c', 'd']);
  });

  it('de-dups a list of heterogeneous object properties', () => {
    const obj = {
      a : 'a',
      b : 'b',
      c : 'b',
      d : '2',
      e : true,
      f : '2',
      g : false,
      h : [1, 2, 3],
      i : [1, 2, 3],
      j : false,
      k : {}
    };
    expect(_.uniq(obj)).toEqual(['a', 'b', '2', true, false, [1, 2, 3], {}]);
  });
});