// get variables from html form
function getVariables() {
  var startingAmount = document.savingscalc.initial.value;
  var rateReturn = document.savingscalc.period.value / 100;
  var numberCompound = document.savingscalc.compound.value;
  var years = document.savingscalc.interest.value;

// make the variables global
  window.startingAmount = startingAmount;
  window.rateReturn = rateReturn;
  window.numberCompound = numberCompound;
  window.years = years;

// data validation
if ((document.savingscalc.initial.value == null) ||
(document.savingscalc.initial.value.length == 0) ||

(document.savingscalc.period.value == null) ||
(document.savingscalc.period.value.length == 0) ||

(document.savingscalc.compound.value == null) ||
(document.savingscalc.compound.value.length == 0) ||

(document.savingscalc.interest.value == null) ||
(document.savingscalc.interest.value.length == 0))

{
  missing();
}
else if (
  (isNaN(document.savingscalc.initial.value) == true) ||
  (isNaN(document.savingscalc.period.value) == true) ||
  (isNaN(document.savingscalc.compound.value) == true) ||
  (isNaN(document.savingscalc.interest.value) == true))
 {
  nan();
}

else if (
  (document.savingscalc.initial.value < 0) ||
  (document.savingscalc.period.value < 0) ||
  (document.savingscalc.compound.value < 0))
{
  negative();
}

else {
  calculate();
}
};
//get user's input

/*startingAmount = prompt('How much do you want to save inititally?');
years = prompt('For how many years?');
numberCompound = prompt('How many times would the investment compound per year?');
rateReturn = prompt('What interest rate do you expect?(Enter a decimal)');*/

// data validation alerts to user
function missing () {
  alert('Please enter the mising information');
};

function nan () {
  alert('Please enter a numeric value');
};

function negative () {
  alert('Please enter a positive number');
};

// perform calculations

function calculate () {
  var endAmount = startingAmount * Math.pow(1 + (rateReturn/numberCompound),(numberCompound * years));
  alert('You will have $' + (Math.round(endAmount * 100) / 100) + ' at the end of your investment period.');
};
