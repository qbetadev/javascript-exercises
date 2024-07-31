const palindromes = function (string) {
    let legalCharacters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let array = string
        .toLowerCase()
        .split('')
        .filter((character) => legalCharacters.includes(character));
    let reversedArray = array.slice().reverse();
    console.log(array);
    console.log(reversedArray);
    return array.toString() === reversedArray.toString();
};

// Do not edit below this line
module.exports = palindromes;
