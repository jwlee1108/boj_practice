var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('04. Recursion/07.15658.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function calc(a, b, op) {
    switch (op) {
        case 0:
            return a + b;
        case 1:
            return a - b;
        case 2:
            return a * b;
        case 3:
            return a < 0 ? -Math.floor((-a) / b) : Math.floor(a / b);
    }
}

function insertOperation(num, index, acc, plus, minus, mul, div) {
    if (index === num.length) {
        min = Math.min(min, acc);
        max = Math.max(max, acc);
        return;
    }

    if (plus > 0) {
        insertOperation(num, index + 1, calc(acc, num[index], 0), plus - 1, minus, mul, div);
    }

    if (minus > 0) {
        insertOperation(num, index + 1, calc(acc, num[index], 1), plus, minus - 1, mul, div);
    }

    if (mul > 0) {
        insertOperation(num, index + 1, calc(acc, num[index], 2), plus, minus, mul - 1, div);
    }

    if (div > 0) {
        insertOperation(num, index + 1, calc(acc, num[index], 3), plus, minus, mul, div - 1);
    }
}

var num = [], op = [];
var ix;
var min = 1000000000, max = -1000000000;
var a = input[1].split(' '), o = input[2].split(' ');

for (ix = 0; ix < a.length; ix++) {
    num.push(+a[ix]);
}

for (ix = 0; ix < o.length; ix++) {
    op.push(+o[ix]);
}

insertOperation(num, 1, num[0], op[0], op[1], op[2], op[3]);
console.log(max);
console.log(min);