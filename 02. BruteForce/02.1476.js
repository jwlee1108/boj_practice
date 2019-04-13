var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('02. BruteForce/02.1476.txt'), 'utf8').toString().trim();
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var ix;
var earth, sun, moon, result;

for (ix = 1; ix <= 7980; ix++) {
    earth = ix % 15 || 15;
    sun = ix % 28 || 28;
    moon = ix % 19 || 19;

    result = earth + ' ' + sun + ' ' + moon;

    if (result === input) {
        console.log(ix);
        break;
    }
}
