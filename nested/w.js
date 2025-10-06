function limit(n) {
    let a = [];
    
    for (let i = 0; i < n; i++) {
        a = [a];
    }
    return a;
}

function expand(a, n) {
    if (a.length > 0 && a[0].length > 0) {
        a[0] = expand(a[0], n);

    } else {
        a = [];
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([[[[]]]], 3)));