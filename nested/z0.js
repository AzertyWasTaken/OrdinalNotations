function limit(n) {
    let a = [];
    
    for (let i = 0; i < n; i++) {
        a = [[],[],a];
    }
    return a;
}

function isSuccessor(a) {
    if (a[0].length == 0) {
        return a[1].length == 0;
    
    } else {
        return isSuccessor(a[0]);
    }
}

function expand(a, n) {
    if (a[0] && a[0].length > 0) {
        a[0] = expand(a[0], n);

    } else if (a[1] && a[1].length > 0) {
        let s = isSuccessor(a[1]);
        a[1] = expand(a[1], n);

        if (s) {
            for (let i = 0; i < n; i++) {
                a[0] = a.slice();
            }
        }
    } else if (a[2] && a[2].length > 0) {
        let s = isSuccessor(a[2]);
        a[2] = expand(a[2], n);

        if (s) {
            for (let i = 0; i < n; i++) {
                a[1] = a.slice();
            }
        }
    } else {
        a = [];
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([[[[],[],[]],[],[]],[],[]], 3)));
console.log(JSON.stringify(expand([[[],[[],[],[]],[]],[[],[],[]],[]], 3)));
console.log(JSON.stringify(expand([[],[[],[[],[],[]],[]],[]], 3)));
console.log(JSON.stringify(expand([[],[],[[[],[],[]],[],[]]], 3)));