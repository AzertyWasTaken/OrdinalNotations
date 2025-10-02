function limit(n) {
    return [n];
}

function expand(a, n) {
    if (a[0] > 0) {
        a[0]--;
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([0], 3)));
console.log(JSON.stringify(expand([3], 3)));