function limit(n) {
    return [n];
}

function lastSeqPos(a) {
    let i = a.length;
    let c = 1

    while (i >= 0 && c > 0) {
        i--;

        if (a[i] == "a") {
            c++;
        } else {
            c--;
        }
    }
    return i;
}

function expand(a, n) {
    let z = a.pop();

    if (z > 0) {
        for (let i = 0; i < n; i++) {
            a = a.concat(z - 1);
        }
    } else if (z == 0) {
        let l = lastSeqPos(a);

        if (l >= 0) {
            let y = a.splice(l);
            y.push("a");
                
            for (let i = 0; i < n; i++) {
                a = a.concat(y);
            }
        }
        while (a[a.length - 1] == "a") {
            a.pop();
        }
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([0,"a",0,"a",0], 3)));
console.log(JSON.stringify(expand([0,0,"a",0,"a","a",0,0,"a",0], 3)));
console.log(JSON.stringify(expand([0,0,0,"a",0,"a",0], 3)));
console.log(JSON.stringify(expand([1,1,0], 3)));
console.log(JSON.stringify(expand([2,2,"a",2], 3)));