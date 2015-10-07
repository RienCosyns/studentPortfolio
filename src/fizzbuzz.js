'use strict';

(function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    let fizz = i % 3 === 0;
    let buzz = i % 5 === 0;
    console.log(fizz
        ? buzz ? 'FizzBuzz' : 'Fizz'
        : buzz ? 'Buzz' : i
    );
  }
})();

