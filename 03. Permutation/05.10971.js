var path = require('path');
var input = require('fs').readFileSync(path.resolve('03. Permutation/05.10971.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var n = +input[0];
var a = input[1].split(' ');
var p = [], ix;
var result = 0;

for (ix = 0; ix < n; ix++) {
    p.push(+a[ix]);
}
p = p.sort(function(a, b) { return a - b; });



do {
    result = Math.max(calculateDiff(p, n), result);
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