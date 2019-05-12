var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('07. Graph/04.1707.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function dfs(v, c) {
    var ix, next;

    check[v] = c;

    for (ix = 0; ix < graph[v].length; ix++) {
        next = graph[v][ix];
        if (!check[next]) {
            if(!dfs(next, 3 - c)) {
                return false;
            }
        } else if (check[next] === check[v]) {
            return false;
        }
    }
    return true;
}

var k = +input[0].trim();
var ix, jx,
    info, v, e, tc = 1, graph = [], edge;
var isIntegrated, check = [], v1, v2;

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

        if (graph[v]) {
            graph[v2].push(v1);
        }
    }

    check.length = 0;
    isIntegrated = true;

    for (jx = 1; jx <= v; jx++) {
        if (!check[jx]) {
            if(!dfs(jx, 1)) {
                isIntegrated = false;
            }
        }
    }

    tc += e + 1;
    console.log(isIntegrated ? 'YES' : 'NO');
}
