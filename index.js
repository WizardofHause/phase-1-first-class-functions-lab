const scuberDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (scuberDrivers) {
    return scuberDrivers.slice(0, 2);
}
const returnLastTwoDrivers = function (scuberDrivers) {
    return scuberDrivers.slice(2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
    return function (value) {
        return multiplier * value;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (scuberDrivers, value) {
    return value(scuberDrivers); 
}