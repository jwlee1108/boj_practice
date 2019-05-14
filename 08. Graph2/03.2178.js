var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('08. Graph2/03.2178.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function makeMap(start, w, h) {
    var ix, jx, data;

    for (ix = 0; ix < h; ix++) {
        map[ix] = [];
        mark[ix] = [];

        data = input[start + ix].trim().split('');

        for (jx = 0; jx < w; jx++) {
            map[ix][jx] = +data[jx];
            mark[ix][jx] = 0;
        }
    }
}

function bfs(x, y, w, h) {
    var queue = [], v, kx, nx, ny;

    queue.push([x, y]);
    mark[x][y] = 1;

    while (queue.length) {
        v = queue.shift();

        for (kx = 0; kx < 4; kx++) {
            nx = v[0] + dx[kx];
            ny = v[1] + dy[kx];

            if (0 <= nx && nx < h && 0 <= ny && ny < w) {
                if (map[nx][ny] === 1 && mark[nx][ny] === 0) {
                    if (nx === (h - 1) && ny === (w - 1)) {
                        return mark[v[0]][v[1]] + 1;
                    }

                    queue.push([nx, ny]);
                    mark[nx][ny] = mark[v[0]][v[1]] + 1;
                }
            }
        }
    }
}

var info, w, h;
var map = [], mark = [],
    dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];

info = input[0].split(' ');
h = +info[0];
w = +info[1];

makeMap(1, w, h);
console.log(bfs(0, 0, w, h));
