var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('08. Graph2/02.4963.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function makeMap(start, w, h) {
    var ix, jx, data;

    for (ix = 0; ix < h; ix++) {
        map[ix] = [];
        mark[ix] = [];

        data = input[start + ix].trim().split(' ');

        for (jx = 0; jx < w; jx++) {
            map[ix][jx] = +data[jx];
            mark[ix][jx] = 0;
        }
    }
}

function checkMap(w, h) {
    var ix, jx, count = 0;
    for (ix = 0; ix < h; ix++) {
        for (jx = 0; jx < w; jx++) {
            if (map[ix][jx] === 1 && mark[ix][jx] === 0) {
                bfs(ix, jx, ++count, w, h);
            }
        }
    }

    return count;
}

function bfs(x, y, count, w, h) {
    var queue = [], v, kx, nx, ny;

    queue.push([x, y]);
    mark[x][y] = count;

    while (queue.length) {
        v = queue.shift();

        for (kx = 0; kx < 8; kx++) {
            nx = v[0] + dx[kx];
            ny = v[1] + dy[kx];

            if (0 <= nx && nx < h && 0 <= ny && ny < w) {
                if (map[nx][ny] === 1 && mark[nx][ny] === 0) {
                    queue.push([nx, ny]);
                    mark[nx][ny] = count;
                }
            }
        }
    }
}

var tc = 0, w, h, data;
var map = [], mark = [],
    dx = [1, -1, 0, 0, -1, -1, 1, 1], dy = [0, 0, 1, -1, -1, 1, -1, 1];

while (tc < input.length - 1) {
    data = input[tc].trim().split(' ');
    w = +data[0];
    h = +data[1];

    makeMap(tc + 1, w, h);
    console.log(checkMap(w, h));

    tc += h + 1;
    map.length = 0;
    mark.length = 0;
}

