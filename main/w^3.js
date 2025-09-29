function limit(n) {
    let a = [];
    for (let i = 0; i < n; i++) {
        a.push(2);
    }
    return a;
}

function expand(a, n) {
    let z = a.pop();
    
    if (z == 2) {
        for (let i = 0; i < n; i++) {
            a.push(1);
        }
    } if (z == 1) {
        for (let i = 0; i < n; i++) {
            a.push(0);
        }
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([0,0,0], 3)));
console.log(JSON.stringify(expand([1,1], 3)));
console.log(JSON.stringify(expand([2,2], 3)));