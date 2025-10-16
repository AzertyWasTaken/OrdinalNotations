function limit(n) {
    let a = [[[]]];
    
    for (let i = 0; i < n; i++) {
        a.unshift([]);
    }
    return a;
}

function firstNonZero(a) {
    let i = 0;

    while (i < a.length - 1 && a[i].length == 0) {
        i++;
    }
    return i;
}

function isSuccessor(a) {
    if (a[0].length == 0) {
        return a.length == 1;
    
    } else {
        return isSuccessor(a[0]);
    }
}

function expand(a, n) {
    if (a.length == 1 && a[0].length == 0) {
        a.pop();

    } else if (a.length > 0 && a[0].length > 0) {
        a[0] = expand(a[0], n);

    } else if (a.length > 0) {
        let p = firstNonZero(a);
        let s = isSuccessor(a[p]);
        let z = expand(a[p], n);
        a[p] = z;

        if (s) {
            for (let i = 0; i < n; i++) {
                a[p - 1] = a.slice();
            }
            while (a[a.length - 1].length == 0 && a.length > 1) {
                a.pop();
            }
        }
    }
    return a;
}

console.log(JSON.stringify(limit(3)));
console.log(JSON.stringify(expand([], 3)));
console.log(JSON.stringify(expand([[[[]]]], 3)));
console.log(JSON.stringify(expand([[[],[[]]],[[]]], 3)));
console.log(JSON.stringify(expand([[],[[],[[]]]], 3)));
console.log(JSON.stringify(expand([[],[],[[]]], 3)));
console.log(JSON.stringify(expand([[],[],[[[]]]], 3)));
console.log(JSON.stringify(expand([[],[],[],[[[]]]], 3)));