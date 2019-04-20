var path = require('path');
var input = require('fs').readFileSync(path.resolve('03. Permutation/05.10971.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var n = +input[0];
var map = [], p = [];
var ix, jx, row, result = 0, pay = 0, chk;

for (ix = 0; ix < n; ix++) {
    p.push(ix + 1);
}

for (ix = 1; ix < input.length; ix++) {
    row = input[ix].split(' ');
    for (jx = 0; jx < row.length; jx++) {
        if (!map[ix]) {
            map[ix - 1] = [];
        }

        map[ix - 1][jx] = +row[jx];
    }
}

do {
    if (p[0] !== 1) {
        break;
    }

    chk = true;

    for (ix = 0; ix < n - 1; ix++) {
        if (!map[p[ix]][p[ix + 1]]) {
            chk = false;
        } else {
            pay += map[p[ix]][p[ix + 1]];
        }
    }

    if (chk && map[p[n - 1]][p[0]]) {
        pay += map[p[n - 1]][p[0]];

        result = Math.max(pay, result);
    }
} while(nextPermutation(p, n));

console.log(result);


function calculateDiff(p, n) {
    var calc = 0;
    for (var ix = 0; ix < (n - 1); ix++) {
        calc += Math.abs(p[ix] - p[ix + 1]);
    }

    return calc;
}

function nextPermutation(p, n) {
    var ix = n - 1;
    while (ix > 0 && +p[ix - 1] >= +p[ix]) {
        ix -= 1;
    }

    if (ix <= 0) {
        return false;
    }

    var jx = n - 1;
    while (+p[jx] <= +p[ix - 1]) {
        jx -= 1;
    }
    swap(p, ix - 1, jx);
    jx = n - 1;
    while (ix < jx) {
        swap(p, ix, jx);
        ix += 1;
        jx -= 1;
    }
    return true;
}

function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}