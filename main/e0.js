function limit(n) {
    let a = [];
    
    for (let i = 0; i < n; i++) {
        a = [a];
    }
    return a;
}

function expand(a, n) {
    let z = a.pop();

    if (z && z.length > 0) {
        let s = z[z.length - 1].length == 0;
        expand(z, n);

        if (s) {
            for (let i = 0; i < n; i++) {
                a.push(z);
            }
        } else {
            a.push(z);
        }
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([[],[],[]], 3)));
console.log(JSON.stringify(expand([[[],[]],[[],[]]], 3)));
console.log(JSON.stringify(expand([[[[],[],[]]]], 3)));