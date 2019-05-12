var path = require('path');
// var input = require('fs').readFileSync(path.resolve('./01.2309.txt'), 'utf8').toString().trim().split('\n');
var input = require('fs').readFileSync(path.resolve('02.1260.txt'), 'utf8').toString().trim().split('\n');
// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var info = input[0].trim().split(' ');
var v = +info[0], e = +info[1], s = +info[2];

var ix,
    graph = [], edge, v1, v2, check = [], res, queue = [];

for (ix = 1; ix <= e; ix++) {
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

for (ix = 0; ix < graph.length; ix++) {
    if (graph[ix] && graph[ix].length) {
        graph[ix].sort(function(a, b) { return a - b; });
    }
}


function dfs(v) {
    var ix, next;

    check[v] = true;
    res += v + ' ';
    for (ix = 0; ix < graph[v].length; ix++) {
        next = graph[v][ix];
        if (!check[next]) {
            dfs(next);
        }
    }
}

function bfs(s) {
    var ix, v, next;

    check[s] = true;
    queue.push(s);

    while (queue.length) {
        v = queue.shift()
        res += v + ' ';

        for (ix = 0; ix < graph[v].length; ix++) {
            next = graph[v][ix];

            if (!check[next]) {
                check[next] = true;
                queue.push(next);
            }
        }
    }
}

if (s <= v && s >= 1) {
    res = '';
    dfs(s);
    console.log(res.trim());
    res = '';
    check.length = 0;
    bfs(s);
    console.log(res.trim());
}
