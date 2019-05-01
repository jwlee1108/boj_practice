var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('06. NandM/02.15650.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function NM(index, start, N, M) {
    var ix;

    if (index === M) {
        output.push(result.join(' '));
        return;
    }

    for (ix = start; ix <= N; ix++) {
        result[index] = ix;
        NM(index + 1, ix, N, M);
    }
}

var N = +input[0].split(' ')[0];
var M = +input[0].split(' ')[1];
var output = [], result = [];

NM(0, 1, N, M);
console.log(output.join('\n'));