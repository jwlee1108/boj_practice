var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('08. Graph2/08.1261.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function Queue(){
    var queue  = [];
    var offset = 0;

    this.getLength = function(){
        return (queue.length - offset);
    }

    this.enqueue = function(item){
        queue.push(item);
    }
    this.dequeue = function(){
        if (!queue.length) {
            return undefined;
        }

        var item = queue[offset];

        if ((++offset) * 2 >= queue.length){
            queue  = queue.slice(offset);
            offset = 0;
        }

        return item;
    }
}

function makeMap(w, h) {
    var ix, jx, data;

    for (ix = 0; ix < h; ix++) {
        map[ix] = [];
        mark[ix] = [];

        data = input[ix + 1].trim().split('');

        for (jx = 0; jx < w; jx++) {
            map[ix][jx] = +data[jx];
            mark[ix][jx] = -1;
        }
    }
}

function bfs(w, h) {
    var zeroQ = new Queue(), oneQ = new Queue(),
        v, kx, nx, ny;

    zeroQ.enqueue([0, 0]);
    mark[0][0] = 0;

    while (zeroQ.getLength()) {
        v = zeroQ.dequeue();

        for (kx = 0; kx < 4; kx++) {
            nx = v[0] + dx[kx];
            ny = v[1] + dy[kx];

            if (0 <= nx && nx < h && 0 <= ny && ny < w) {
                if (mark[nx][ny] === -1) {
                    if (map[nx][ny] === 0) {
                        mark[nx][ny] = mark[v[0]][v[1]];
                        zeroQ.enqueue([nx, ny]);
                    } else {
                        mark[nx][ny] = mark[v[0]][v[1]] + 1;
                        oneQ.enqueue([nx, ny]);
                    }
                }
            }
        }

        if (!zeroQ.getLength()) {
            zeroQ = oneQ;
            oneQ = new Queue();
        }
    }

    return mark[h - 1][w - 1];
}

var info, w, h;
var map = [], mark = [],
    dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];

info = input[0].split(' ');
w = +info[0];
h = +info[1];

makeMap(w, h);
console.log(bfs(w, h));
