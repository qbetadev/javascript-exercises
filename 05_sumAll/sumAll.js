const sumAll = function(startNum, stopNum) {
    let sum = 0;
    if (startNum < 0 || stopNum < 0) return "ERROR";
    if (!Number.isInteger(startNum) || !Number.isInteger(stopNum)) return "ERROR";
    for (let i = Math.min(startNum, stopNum); i <= Math.max(startNum, stopNum); i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
