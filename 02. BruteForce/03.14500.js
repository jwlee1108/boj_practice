var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('02. BruteForce/03.14500.txt'), 'utf8').toString().trim('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// n : 가로, m : 세로
var blockA = [{ n: 3, m: 0 }, { n: 0, m: 3 }];
var blockB = [{ n: 1, m: 1 }];
var blockC = [{ n: 1, m: 2 }, { n: 2, m: 1 }];

