const fibonacci = function(index) {
    const numbers = [0, 1];
    if (index < 0) {
        return "OOPS";
    } else {
        for (let i = 2; i < index + 1; i++) {
            numbers[i] = numbers[i-1] + numbers[i -2];
        }
    }
    return numbers[index];
};

// Do not edit below this line
module.exports = fibonacci;
