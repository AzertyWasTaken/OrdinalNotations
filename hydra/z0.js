function limit(n) {
    let a = [];
    
    for (let i = 0; i < n; i++) {
        a = [a];
    }
    return a;
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

    if (z && z.length > 0) {
        let s = lastSeqPos(z.slice(0, -1)) < 0;
        z = expand(z, n);

        if (s) {
            for (let i = 0; i < n; i++) {
                a.push(z);
            }
        } else {
            a.push(z);
        }
    } else if (z) {
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
console.log(JSON.stringify(expand([[],"a",[],"a",[]], 3)));
console.log(JSON.stringify(expand([[],[],"a",[],"a","a",[],[],"a",[]], 3)));
console.log(JSON.stringify(expand([[],[],[],"a",[],"a",[]], 3)));
console.log(JSON.stringify(expand([[[]],[[]],[]], 3)));
console.log(JSON.stringify(expand([[[],"a",[]],[[],"a",[]],"a",[[],"a",[]]], 3)));
console.log(JSON.stringify(expand([[[],[],[]]], 3)));