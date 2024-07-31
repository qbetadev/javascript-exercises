const reverseString = function(string) {
    // let reversedString = "";
    // let normalStringArray = string.split('');
    // let reversedStringArray = normalStringArray.reverse();
    // reversedStringArray.forEach((s) => reversedString += s);
    // return reversedString;

    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
