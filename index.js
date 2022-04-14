// Code your solution in this file!
// const drvs = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(drivers.length - 2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return fare => fare * multiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, callBack) {
    return callBack(arrayOfDrivers);
}

// console.log(returnFirstTwoDrivers(drvs));
// console.log(returnLastTwoDrivers(drvs));
// console.log(selectDifferentDrivers(drvs, returnFirstTwoDrivers));

