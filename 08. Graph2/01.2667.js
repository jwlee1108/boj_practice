var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('08. Graph2/01.2667.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var size = +input[0].trim();
var ix, jx, result = [],
    map = [], mark = [], count = 0,
    dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];

function bfs(x, y, count) {
    var queue = [], v, kx, nx, ny, number = 1;

    queue.push([x, y]);
    mark[x][y] = count;

    while (queue.length) {
        v = queue.shift();

        for (kx = 0; kx < 4; kx++) {
            nx = v[0] + dx[kx];
            ny = v[1] + dy[kx];

            if (0 <= nx && nx < size && 0 <= ny && ny < size) {
                if (map[nx][ny] === 1 && mark[nx][ny] === 0) {
                    queue.push([nx, ny]);
                    mark[nx][ny] = count;
                    number++;
                }
            }
        }
    }

    return number;
}

for (ix = 1; ix <= size; ix++) {
    map[ix - 1] = [];
    mark[ix - 1] = [];

    for (jx = 0; jx < size; jx++) {
        mark[ix - 1][jx] = 0;
        map[ix - 1][jx] = +input[ix][jx];
    }
}

for (ix = 0; ix < size; ix++) {
    for (jx = 0; jx < size; jx++) {
        if (map[ix][jx] === 1 && mark[ix][jx] === 0) {
            result.push(bfs(ix, jx, ++count));
        }
    }
}

console.log(count);
console.log(result.sort(function(a, b) { return a - b; }).join('\n'));
