function limit(n) {
    return [n];
}

function expand(a, n) {
    let z = a.pop();
    if (z > 0) {
        for (let i = 0; i < n; i++) {
            a.push(z - 1);
        }
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([0,0,0], 3)));
console.log(JSON.stringify(expand([2,2], 3)));