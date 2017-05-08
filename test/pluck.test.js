const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });
  it('returns an array of just names, given an array of people objects', () => {
    const people = [
      {name: 'Harriet', age: 12},
      {name: 'Lazarus', age: 999},
      {name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'name');
    expect(result).toEqual(['Harriet', 'Lazarus', 'Bethany']);
  });
  it('returns an array of return values for functions keyed as \'age\'', () => {
    const people = [
      { name: 'Harriet', age: function() { return 12; }() },
      { name: 'Lazarus', age: function() { return 999; }() },
      { name: 'Bethany', age: function() { return 14; }() }
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  })
});