var path = require('path');
var input = require('fs').readFileSync(path.resolve('./05.1978.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (var i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

var count = input[0];
var number = input[1].split(' ');

var primeCount = 0;
for (var i = 0; i < count; i++) {
    if (isPrime(number[i])) {
        primeCount++;
    }
}

console.log(primeCount);
