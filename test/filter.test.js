const _ = require('../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.filter(nums, num => num % 2 === 1)).toEqual([5, 7, 11]);
  });

  it('filters an object to only numeric values', () => {
    const characterAttributes = {
      name: 'Thokul Mongothsbeard',
      honorific: 'Lord Thokul Mongothsbeard the Arcane',
      race: 'human',
      class: 'druid',
      strength: 4,
      constitution: 7,
      dexterity: 10,
      intelligence: 16,
      wisdom: 5,
      charisma: 4
    };

    const abilityScores = _.filter(characterAttributes, (value) => !isNaN(value));
    expect(abilityScores).toEqual([4, 7, 10, 16, 5, 4]);
  });

  it('filters an object to an array of non-object datatypes', () => {
    const fn = function(a, b) { a + b; }
    const misc = {
      num: 1, 
      str: 'a', 
      arr: [1, 2], 
      obj: {1: 'a'}, 
      func: fn, 
      bool: false, 
      undef: undefined, 
      null: null
    };
    const nonObjs = _.filter(misc, (value) => typeof value !== 'object');
    expect(nonObjs).toEqual([1, 'a', fn, false, undefined])
  });

  it('filters an array of numbers to prime numbers', () => {
    let nums = [];
    for (let num = 2; num < 100; num++) {
      nums.push(num);
    }

    const primes = _.filter(nums, (num) => {
      let isPrime = true;
      for (let i = 2; i < num; i++) {
        isPrime = isPrime && (num % i !== 0);
      }
      return isPrime;
    });
    expect(primes).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
  });
});