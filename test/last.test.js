const _ = require('../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    expect(_.last(['a', 'b', 'c'])).toEqual('c');
  });

  it('returns the last 2 elements of an array', () => {
    expect(_.last(['a', 'b', 'c'], 2)).toEqual(['b', 'c']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.last(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('returns an empty array with no elemens if asked for no elements', () => {
    expect(_.last(['a', 'b', 'c'], 0)).toEqual([]);
  });

  it('returns an array with only one element if given an array of length 1 and asked for more elements than it has', () => {
    expect(_.last(['a'], 2)).toEqual(['a']);
  });

  it('returns only an element when given an array of length 1 and asked for all its elements', () => {
    expect(_.last(['a'], 1)).toEqual('a');
  });
});