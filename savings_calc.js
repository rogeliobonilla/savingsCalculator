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

  calculate();
};

// data validation

// perform calculations

function calculate () {
  var endAmount = startingAmount * Math.pow(1 + (rateReturn/numberCompound),(numberCompound * years));
  alert('You will have $' + (Math.round(endAmount * 100) / 100) + ' at the end of your investment period.');
};
