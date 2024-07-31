const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    let ageArray = people.map((item) => {
        if (item.yearOfDeath === undefined) {
            item.yearOfDeath = currentYear;
            return item.yearOfDeath - item.yearOfBirth;
        } else {
            return item.yearOfDeath - item.yearOfBirth;
        }
    });
    let oldestPersonIndex = ageArray.indexOf(Math.max(...ageArray));
    return people[oldestPersonIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
