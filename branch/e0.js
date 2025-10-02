function limit(n) {
    let a = [];
    
    for (let i = 0; i < n; i++) {
        a.push(i);
    }
    return a;
}

function popLastNum(a, n) {
    let i = a.length - 1;

    while (i > 0 && (a[i] >= n)) {
        i--;
    }
    return a.splice(i);
}

function expand(a, n) {
    let z = a.pop();

    if (z && z > 0) {
        let y = popLastNum(a, z);
            
        for (let i = 0; i < n; i++) {
            a = a.concat(y);
        }
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([0,0,0], 3)));
console.log(JSON.stringify(expand([0,1,1,0,1,1], 3)));
console.log(JSON.stringify(expand([0,1,2,2,2], 3)));