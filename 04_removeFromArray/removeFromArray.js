const removeFromArray = function(array, ...itemsToDelete) {
    const newArray = [];
    array.forEach((item) => {
        if (!itemsToDelete.includes(item)) {
            newArray.push(item)
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
