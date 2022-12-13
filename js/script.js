'use strict'

const continueButton = document.getElementById('confirm-button');
const lettersOnly = /^[a-zA-Z ]*$/;

const inputName = document.getElementById('input-card-name');
const inputNumber = document.getElementById('input-card-number');
const inputMonth = document.getElementById('input-card-month');
const inputYear = document.getElementById('input-card-year');
const inputCvc = document.getElementById('input-card-cvc');

const inputNameChecked = document.getElementById('input-name-checked');
const inputNumberChecked = document.getElementById('input-number-checked');
const inputMonthChecked = document.getElementById('input-month-checked');
const inputYearChecked = document.getElementById('input-year-checked');
const inputCvcChecked = document.getElementById('input-cvc-checked');

const errorName = document.getElementById('error-card-name');
const errorNumber = document.getElementById('error-card-number');
const errorMonthYear = document.getElementById('error-card-month-year');
const errorCvc = document.getElementById('error-card-cvc');
const errorProceed = document.getElementById('error-proceed');

const outputNumber = document.getElementById('output-card-number');
const outputName = document.getElementById('output-card-name');
const outputMonthYear = document.getElementById('output-card-monthyear');
const outputCvc = document.getElementById('output-card-cvc');

// function nameValidation() {

//   if (inputName.value === '') {
//     errorName.classList.add('show');
//     errorName.textContent = 'Name required.';
//     return false;
//   }

//   if (!inputName.value.match(/ /)) {
//     errorName.classList.add('show');
//     errorName.textContent = 'Write your fullname.';
//   }

//   if (!inputName.value.match(lettersOnly)) {
//     errorName.classList.add('show');
//     errorName.textContent = 'Allows alphabets only.';
//     return false;
//   }

//   errorName.classList.remove('show');
//   return true;

// }

// function numberValidation() {
//   let number = document.getElementById('input-card-number').value;

//   if (number.length === 0) {
//     errorNumber.classList.add('show');
//     errorNumber.textContent = 'Enter field';
//   }
// }

inputNumber.addEventListener('input', function (e) {
  var target = e.target, position = target.selectionEnd, length = target.value.length;

  target.value = target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  target.selectionEnd = position += ((target.value.charAt(position - 1) === ' ' && target.value.charAt(length - 1) === ' ' && length !== target.value.length) ? 1 : 0);
});

// /^[A-Za-z]*\s{1}[A-Za-z]*$/

function nameValidation() {

  let nameValidate = inputName.value;

  if (nameValidate === '') {
    errorName.textContent = 'name is required.';
    inputName.classList.add('show');
    errorName.classList.add('show');

    inputNameChecked.classList.remove('checked');
    inputName.classList.remove('correct');
    return false;
  }

  if (!nameValidate.match(lettersOnly)) {
    errorName.textContent = 'name consist of letters only.';
    inputName.classList.add('show');
    errorName.classList.add('show');

    inputNameChecked.classList.remove('checked');
    inputName.classList.remove('correct');
    return false;
  }

  if (!nameValidate.match(/[A-Za-z]{2,3}\s[A-Za-z]{2,3}/)) {
    errorName.textContent = 'enter your full name.';
    inputName.classList.add('show');
    errorName.classList.add('show');

    inputNameChecked.classList.remove('checked');
    inputName.classList.remove('correct');
    return false;
  }

  inputNameChecked.classList.add('checked');
  inputName.classList.add('correct');
  errorName.classList.remove('show');

  errorProceed.classList.remove('show');
  return true;
}

function numberValidation() {
  let numberValidate = inputNumber.value;

  if (numberValidate === '') {
    errorNumber.textContent = 'card number is required.'
    inputNumber.classList.add('show');
    errorNumber.classList.add('show');

    inputNumber.classList.remove('correct');
    inputNumberChecked.classList.remove('checked');
    return false;
  }

  if (numberValidate.length <= 18) {
    errorNumber.textContent = 'card number should consist of 16 digits.';
    inputNumber.classList.add('show');
    errorNumber.classList.add('show');

    inputNumber.classList.remove('correct');
    inputNumberChecked.classList.remove('checked');
    return false;
  }

  // if (!numberValidate.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
  //   errorNumber.textContent = 'card number should consist of digits only.'
  //   inputNumber.classList.add('show');
  //   errorNumber.classList.add('show');

  //   inputNumber.classList.remove('correct');
  //   inputNumberChecked.classList.remove('checked');
  //   return false;
  // }

  inputNumberChecked.classList.add('checked');
  inputNumber.classList.add('correct');
  errorNumber.classList.remove('show');

  errorProceed.classList.remove('show');
  return true;
}

function monthValidation() {
  let monthValidate = inputMonth.value;

  if (monthValidate === '') {
    errorMonthYear.textContent = 'card month is required.'
    inputMonth.classList.add('show');
    errorMonthYear.classList.add('show');

    inputMonth.classList.remove('correct');
    inputMonthChecked.classList.remove('month-checked');
    return false;
  }

  if (monthValidate.length <= 1) {
    errorMonthYear.textContent = 'should consist of 2 digits.'
    inputMonth.classList.add('show');
    errorMonthYear.classList.add('show');

    inputMonth.classList.remove('correct');
    inputMonthChecked.classList.remove('month-checked');
    return false;
  }

  inputMonthChecked.classList.add('month-checked');
  inputMonth.classList.add('correct');
  errorMonthYear.classList.remove('show');

  errorProceed.classList.remove('show');
  return true;

}

function yearValidation() {
  let yearValidate = inputYear.value;

  if (yearValidate === '') {
    errorMonthYear.textContent = 'card year is required.'
    inputYear.classList.add('show');
    errorMonthYear.classList.add('show');

    inputYear.classList.remove('correct');
    inputYearChecked.classList.remove('year-checked');
    return false;
  }

  if (yearValidate.length <= 1) {
    errorMonthYear.textContent = 'should consist of 2 digits.'
    inputYear.classList.add('show');
    errorMonthYear.classList.add('show');

    inputYear.classList.remove('correct');
    inputYearChecked.classList.remove('year-checked');
    return false;
  }

  inputYearChecked.classList.add('year-checked');
  inputYear.classList.add('correct');
  errorMonthYear.classList.remove('show');

  errorProceed.classList.remove('show');
  return true;
}

function cvcValidation() {
  let cvcValidate = inputCvc.value

  if (cvcValidate === '') {
    errorMonthYear.textContent = 'cvc is required.'
    inputCvc.classList.add('show');
    errorMonthYear.classList.add('show');

    inputCvcChecked.classList.remove('checked');
    inputCvc.classList.remove('correct');
    return false;
  }

  if (cvcValidate.length <= 2) {
    errorMonthYear.textContent = 'should consist of 3 digits.'
    inputCvc.classList.add('show');
    errorMonthYear.classList.add('show');

    inputCvcChecked.classList.remove('checked');
    inputCvc.classList.remove('correct');
    return false;
  }

  inputCvcChecked.classList.add('checked');
  inputCvc.classList.add('correct');
  errorMonthYear.classList.remove('show');

  errorProceed.classList.remove('show');
  return true;

}

continueButton.addEventListener('click', (e) => {

  if (!nameValidation()) {
    console.log('wrong')
    errorProceed.textContent = "Please enter cardholder's name."
    errorProceed.classList.add('show');
    return false;
  }

  if (!numberValidation()) {
    console.log('wrong');
    errorProceed.textContent = "Please enter card's number."
    errorProceed.classList.add('show');
    return false;
  }

  if (!monthValidation()) {
    console.log('wrong');
    errorProceed.textContent = "Please enter the month of card."
    errorProceed.classList.add('show');
    return false;
  }

  if (!yearValidation()) {
    console.log('wrong');
    errorProceed.textContent = "Please enter the year of card."
    errorProceed.classList.add('show');
    return false;
  }

  if (!cvcValidation()) {
    console.log('wrong');
    errorProceed.textContent = "Please enter the CVC of card."
    errorProceed.classList.add('show');
    return false;
  }


  outputName.textContent = inputName.value.toUpperCase();
  outputNumber.textContent = inputNumber.value;
  outputMonthYear.textContent = (`${inputMonth.value}/${inputYear.value}`);
  outputCvc.textContent = inputCvc.value;

  inputName.value = '';
  inputNumber.value = '';
  inputMonth.value = '';
  inputYear.value = '';
  inputCvc.value = '';

  errorName.classList.remove('show');
  inputName.classList.remove('show');
  inputNumber.classList.remove('show');
  inputMonth.classList.remove('show');
  inputYear.classList.remove('show');
  inputCvc.classList.remove('show');

  inputNameChecked.classList.remove('checked');
  inputName.classList.remove('correct');

  inputNumber.classList.remove('correct');
  inputNumberChecked.classList.remove('checked');

  inputMonth.classList.remove('correct');
  inputMonthChecked.classList.remove('month-checked');

  inputYear.classList.remove('correct');
  inputYearChecked.classList.remove('year-checked');

  inputCvcChecked.classList.remove('checked');
  inputCvc.classList.remove('correct');

})

// function nameValidation() {
//   if (inputName.value !== '') {
//     errorName.classList.remove('show');
//     inputName.classList.remove('show');
//   }
// }

// function numberValidation() {
//   if (inputNumber.value !== '') {
//     errorNumber.classList.remove('show');
//     inputNumber.classList.remove('show');
//   }
// }

// function monthValidation() {
//   if (inputMonth.value !== '') {
//     errorMonthYear.classList.remove('show');
//     inputMonth.classList.remove('show');
//   }
// }

// function yearValidation() {
//   if (inputYear.value !== '') {
//     errorMonthYear.classList.remove('show');
//     inputYear.classList.remove('show');
//   }
// }

// function cvcValidation() {
//   if (inputCvc.value !== '') {
//     errorCvc.classList.remove('show');
//     inputCvc.classList.remove('show');
//   }
// }

// continueButton.addEventListener('click', function () {

//   if (inputName.value === '') {

//     errorName.textContent = 'Name required.';
//     errorName.classList.add('show');
//     inputName.classList.add('show');
//     nameValidation();

//   } else if (!inputName.value.match(/ /)) {
//     errorName.textContent = 'Write fullname.';
//     errorName.classList.add('show');
//     inputName.classList.add('show');
//   }

//   else if (!inputName.value.match(lettersOnly)) {

//     errorName.textContent = 'Letters only.';
//     errorName.classList.add('show');
//     inputName.classList.add('show');

//   } else if (inputNumber.value === '') {

//     errorNumber.textContent = 'Card number required.';
//     errorNumber.classList.add('show');
//     inputNumber.classList.add('show');
//     numberValidation();

//   } else if (inputNumber.value.length <= 18) {
//     errorNumber.textContent = 'Should consist of 16 digits.';
//     errorNumber.classList.add('show')
//     inputNumber.classList.add('show');

//   } else if (inputMonth.value === '') {
//     errorMonthYear.textContent = 'Field required.';
//     errorMonthYear.classList.add('show');
//     inputMonth.classList.add('show');
//     monthValidation()

//   } else if (inputMonth.value.length <= 1) {
//     errorMonthYear.textContent = 'Should consist of 2 digits.'
//     errorMonthYear.classList.add('show');
//     inputMonth.classList.add('show');

//   } else if (inputYear.value === '') {
//     errorMonthYear.textContent = 'Field required.';
//     errorMonthYear.classList.add('show')
//     inputYear.classList.add('show');
//     yearValidation()

//   } else if (inputYear.value.length <= 1) {
//     errorMonthYear.textContent = 'Should consist of 2 digits.';
//     errorMonthYear.classList.add('show');
//     inputYear.classList.add('show');

//   } else if (inputCvc.value === '') {
//     errorCvc.textContent = 'CVC Required';
//     errorCvc.classList.add('show')
//     errorMonthYear.textContent = 'CVC Required';
//     errorMonthYear.classList.add('show');
//     inputCvc.classList.add('show');
//     cvcValidation()

//   } else if (inputCvc.value.length <= 2) {
//     errorCvc.textContent = 'Should consist of 3 digits.';
//     errorCvc.classList.add('show')
//     errorMonthYear.textContent = 'Should consist of 3 digits.';
//     errorMonthYear.classList.add('show');
//     inputCvc.classList.add('show');
//   }

//   else {

//     console.log(inputNumber.value.length);

//     outputName.textContent = inputName.value.toUpperCase();
//     outputNumber.textContent = inputNumber.value;
//     outputMonthYear.textContent = (`${inputMonth.value}/${inputYear.value}`);
//     outputCvc.textContent = inputCvc.value;

//     inputName.value = '';
//     inputNumber.value = '';
//     inputMonth.value = '';
//     inputYear.value = '';
//     inputCvc.value = '';

//     errorName.classList.remove('show');
//     inputName.classList.remove('show');
//     inputNumber.classList.remove('show');
//     inputMonth.classList.remove('show');
//     inputYear.classList.remove('show');
//     inputCvc.classList.remove('show');

//   }

// })
