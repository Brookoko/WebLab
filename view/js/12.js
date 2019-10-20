'use strict';

const phoneRegex = new RegExp(['/^[+]?[0-9]{0,3}[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}',
  '[-s.]?[0-9]{0,2}[-s.]?[0-9]{0,2}$/im'].join(''));

const mailRegex = new RegExp(['[a-z0-9!#$%&\'*+/=?^_`{|}~-]+',
  '(?:.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*',
  '@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?']
  .join(''));

// eslint-disable-next-line no-unused-vars
function validateName(form) {
  const fullname = form.person_name.value;
  const engRes = fullname.match(/([A-Z]{1}[a-z]*\s*)+$/y);
  const rusRes = fullname.match(/([А-Я]{1}[а-я]*\s*)+$/y);
  if (xor(engRes, rusRes)) form.result.value = 'Correct';
  else form.result.value = 'Incorrect';

}

// eslint-disable-next-line no-unused-vars
function validateMail(form) {
  const email = form.person_mail.value;
  const res = email.match(mailRegex);
  form.result.value = res === null ? 'Incorrect' : 'Correct';
}

// eslint-disable-next-line no-unused-vars
function validatePhone(form) {
  const phoneNumber = form.person_phone.value;
  const res = phoneNumber.match(phoneRegex);
  form.result.value = res === null ? 'Incorrect' : 'Correct';
}

function xor(a, b) {
  if ((a && !b) || (!a && b)) return true;
  return false;
}
