const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let inputC = $('#celcius > input');
let inputF = $('#fahrenheit > input');
let inputK = $('#kelvin > input');
let inputs = $$('input')

function round2(value) {
  return Math.round(value*100)/100;
}


function convertFromK() {
  const kTemp = parseFloat(inputK.value);
  const cTemp = (kTemp -273.15);
  const fTemp = 9/5*(kTemp-273) +32;
  inputF.value = round2(fTemp);
  inputC.value = round2(cTemp);
}

function convertFromF() {
  const fTemp = parseFloat(inputF.value);
  const cTemp = (fTemp - 32)*(5/9);
  const kTemp = (fTemp + 459.67)*(5/9);
  inputC.value = round2(cTemp);
  inputK.value = round2(kTemp);
}

function convertFromC() {
  const cTemp = parseFloat(inputC.value);
  const fTemp = (cTemp * (9/5)+32);
  const kTemp = cTemp + 273.15;
  inputF.value = round2(fTemp);
  inputK.value = round2(kTemp);
}

inputF.addEventListener('input', convertFromF);
inputK.addEventListener('input', convertFromK);
inputC.addEventListener('input', convertFromC);

function changeColor() {
  const cTemp = parseFloat(inputC.value);

  if (cTemp < 10) {
    inputs.forEach(input => {
      input.style.backgroundColor = "lightblue";
    });
  } else if (cTemp < 20 && cTemp >= 10) {
    inputs.forEach(input => {
      input.style.backgroundColor = "yellow";
    });
  } else if (cTemp < 30 && cTemp >= 20) {
    inputs.forEach(input => {
        input.style.backgroundColor = "orange";
      });
}
    else if (cTemp < 80 && cTemp >= 30) {
    inputs.forEach(input => {
        input.style.backgroundColor = "red";
      });
  } else {
    inputs.forEach(input => {
        input.style.backgroundColor = "purple";
      });
  }
}

inputs.forEach(input => {
  input.addEventListener('input', changeColor);
});