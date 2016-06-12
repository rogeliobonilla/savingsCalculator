// declare variables

var startingAmount; // the initial amount deposited
var years; // number of years the amount is deposited
var rateReturn; // annual rate of interest
var numberCompound; // number of times the interest is compounded per year
var endAmount;

//get user's input

startingAmount = prompt('How much do you want to save inititally?');
years = prompt('For how many years?');
numberCompound = prompt('How many times would the investment compound per year?');
rateReturn = prompt('What interest rate do you expect?(Enter a decimal)');

// perform calculations

var calculate = function () {
  endAmount = startingAmount * Math.pow(1 + (rateReturn/numberCompound),(numberCompound * years));
  alert('You will have $' + (Math.round(endAmount * 100) / 100) + ' at the end of your investment period.');
};

// user output

calculate();
