var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('07. Graph/03.11724.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var info = input[0].trim().split(' ');
var v = +info[0], e = +info[1];

var ix, graph = [], edge, v1, v2, check = [], res, count = 0;

for (ix = 1; ix <= e; ix++) {
    if (input[ix]) {
        edge = input[ix].trim().split(' ');
        v1 = +edge[0];
        v2 = +edge[1];

        if (!graph[v1]) {
            graph[v1] = [];
        }

        if (!graph[v2]) {
            graph[v2] = [];
        }

        if (graph[v1].indexOf(v2) < 0) {
            graph[v1].push(v2);
        }

        if (graph[v2].indexOf(v1) < 0) {
            graph[v2].push(v1);
        }
    }
}

for (ix = 0; ix < graph.length; ix++) {
    if (graph[ix] && graph[ix].length) {
        graph[ix] = graph[ix].sort(function(a, b) { return a - b; });
    }
}


function dfs(v) {
    var ix, next;

    check[v] = true;
    res += v + ' ';

    if (graph[v]) {
        for (ix = 0; ix < graph[v].length; ix++) {
            next = graph[v][ix];
            if (!check[next] && graph[next]) {
                dfs(next);
            }
        }
    }
}

for (ix = 1; ix <= v; ix++) {
    if (!check[ix]) {
        dfs(ix);
        count++;
    }
}

console.log(count);
