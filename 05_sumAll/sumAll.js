const sumAll = function(a, b) {
    if ((a < 0) || (b < 0) || (typeof(b) != "number") || (typeof(a) != "number")) return "ERROR"
    let total = 0;
    if (a > b) {
        let c = a;
        a = b;
        b = c;
    }
    for (let i = a; i <= b; i++) {
        total += i
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
