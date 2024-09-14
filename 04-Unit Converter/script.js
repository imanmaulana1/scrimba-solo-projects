const length = document.getElementById('length');
const volume = document.getElementById('volume');
const mass = document.getElementById('mass');

const myForm = document.getElementById('myForm');

function conversionUnit(value, formula) {
  return (value * formula).toFixed(3);
}

function printLength(value) {
  const getFeet = conversionUnit(value, 3.28084);
  const getMeter = conversionUnit(value, 0.3048);

  return `${value} meters = ${getFeet} feet | ${value} feet = ${getMeter} meters`;
}

function printVolume(value) {
  const getGallon = conversionUnit(value, 0.264172);
  const getLiter = conversionUnit(value, 3.78541);

  return `${value} liters = ${getGallon} gallons | ${value} gallons = ${getLiter} liters`;
}

function printMass(value) {
  const getPounds = conversionUnit(value, 2.20462);
  const getKilo = conversionUnit(value, 0.453592);

  return `${value} kilos = ${getPounds} pounds | ${value} pounds = ${getKilo} kilos`;
}

myForm.addEventListener('submit', (e) => {
  e.preventDefault();

  length.textContent = printLength(e.target[0].value);
  volume.textContent = printVolume(e.target[0].value);
  mass.textContent = printMass(e.target[0].value);
});
