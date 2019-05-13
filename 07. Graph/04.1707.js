var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('07. Graph/04.1707.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function bfs() {
    var ix, jx,
        next, c, n;

    for (ix = 1; ix <= v; ix++) {
        if (!check[ix]) {
            queue.push(ix);
            c = 1;
            check[ix] = c;

            while (queue.length) {
                n = queue.shift();
                c = 3 - check[n];

                if (graph[n]) {
                    for (jx = 0; jx < graph[n].length; jx++) {
                        next = graph[n][jx];

                        if (check[n] === check[next]) {
                            return false;
                        }

                        if (!check[next]) {
                            queue.push(next);
                            check[next] = c;
                        }
                    }
                }

            }
        }
    }

    return true;
}

var k = +input[0].trim();
var ix, jx,
    info, v, e, tc = 1, graph = [], edge;
var check = [], v1, v2, queue = [];

for (ix = 0; ix < k; ix++) {
    info = input[tc].trim().split(' ');
    v = +info[0];
    e = +info[1];

    graph.length = 0;

    for (jx = 1; jx <= v; jx++) {
        graph[jx] = [];
    }

    for(jx = 1; jx <= e; jx++) {
        edge = input[tc + jx].trim().split(' ');
        v1 = +edge[0];
        v2 = +edge[1];

        if (graph[v1]) {
            graph[v1].push(v2);
        }

        if (graph[v2]) {
            graph[v2].push(v1);
        }
    }

    check.length = 0;
    queue.length = 0;

    tc += e + 1;
    console.log(bfs() ? 'YES' : 'NO');
}
