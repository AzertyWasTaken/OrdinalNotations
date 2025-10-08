function limit(n) {
    let a = [0];

    for (let i = 0; i < n; i++) {
        a.push(1);
    }
    return a;
}

function popLastNum(a) {
    let i = a.length - 1;

    while (i > 0 && a[i] == 1) {
        i--;
    }
    return a.splice(i);
}

function expand(a, n) {
    let y = popLastNum(a);
    
    if (y.length > 0) {
        y.pop();
        
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