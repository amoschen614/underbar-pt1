const _ = require('../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4, 6, 8, 10]);
  });

  it('rejects null values from an object', () => {
    const order = {
      entree: 'burger',
      side: null,
      condiment: 'ketchup',
      drink: null,
      dessert: 'cookie'
    };

    const orderItems = _.reject(order, (value) => value === null);
    expect(orderItems).toEqual(['burger', 'ketchup', 'cookie']);
  });

  it('rejects non-prime numbers from an array', () => {
    let nums = [];
    for (let num = 2; num < 100; num++) {
      nums.push(num);
    }

    const primes = _.reject(nums, (num) => {
      let isPrime = true;
      for (let i = 2; i < num; i++) {
        isPrime = isPrime && (num % i !== 0);
      }
      return !isPrime;
    });
    expect(primes).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
  });

  it('rejects all methods or null values from an object', () => {
    const order = {
      entree: 'burger',
      getEntree: function() { return this.entree; },
      changeEntree: function(entree) { this.entree = entree; },
      side: null,
      condiment: 'ketchup',
      drink: null,
      dessert: 'cookie'
    };

    const relevantItems = _.reject(order, prop => typeof prop === 'function' || prop === null);
    expect(relevantItems).toEqual(['burger', 'ketchup', 'cookie']);
  });
});