function limit(n) {
    let a = [0];
    
    for (let i = 0; i < n; i++) {
        a.push("a");
    }
    return a;
}

function popLastSeq(a, n) {
    let i = a.length - 1;

    while (i > 0 && (a[i] == "a" || a[i] >= n)) {
        i--;
    }
    return a.splice(i);
}

function expand(a, n) {
    let z = a.pop();

    if (z && z != 0) {
        let y = popLastSeq(a, z);
    
        for (let i = 0; i < n; i++) {
            a = a.concat(y);
            
            if (z == "a") {
                y[0]++;
            }
        }
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([0,0,0], 3)));
console.log(JSON.stringify(expand([0,1,2,2,2], 3)));
console.log(JSON.stringify(expand([0,"a",1,"a"], 3)));
console.log(JSON.stringify(expand([0,"a","a"], 3)));