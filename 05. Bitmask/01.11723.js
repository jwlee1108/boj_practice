var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('05. Bitmask/01.11723.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function calc(operator, operand) {
    switch (operator) {
        case 'add':
            accumulatedValue |= (1 << operand);
            break;
        case 'remove':
            accumulatedValue &= ~(1 << operand);
            break;
        case 'check':
            output.push((accumulatedValue & (1 << operand)) ? 1 : 0);
            break;
        case 'toggle':
            accumulatedValue ^= (1 << operand);
            break;
        case 'all':
            accumulatedValue = allValue;
            break;
        case 'empty':
            accumulatedValue = 0;
            break;
        default:
            break;
    }
}

function all() {
    var res = 0, ix;

    for (ix = 1; ix <= 20; ix++) {
        res |= (1 << ix);
    }

    return res;
}

var accumulatedValue = 0, allValue = all(),
    expression, ix, output = [];

for (ix = 1; ix < input.length; ix++) {
    expression = input[ix].trim().split(' ');
    calc(expression[0], +expression[1]);
}

console.log(output.join('\n'));