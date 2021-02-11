import validator from 'validator';

//! NIF Validation function
const nifValidation = nif => {
  /* eslint-disable eqeqeq */

  let checkDigit = 0;
  if (nif != null && nif.length == 9) {
    const c = nif.charAt(0);
    if (c == '1' || c == '2' || c == '5' || c == '6' || c == '8' || c == '9') {
      checkDigit = c * 9;
      for (let i = 2; i <= 8; i++) {
        checkDigit += nif.charAt(i - 1) * (10 - i);
      }
      checkDigit = 11 - (checkDigit % 11);
      if (checkDigit >= 10) {
        checkDigit = 0;
      }
      if (checkDigit == nif.charAt(8)) {
        return true;
      }
    }
  }
  return false;
};

export const fieldsValidator = (field, values, errors, initialValues) => {
  console.log(
    '🚀 ~ file: fieldsValidator.js ~ line 28 ~ fieldsValidator ~ values',
    values,
    field
  );
  const validationErrors = errors || {};
  const vals = values[field.key] ?? initialValues[field.key];

  console.log(
    '🚀 ~ file: fieldsValidator.js ~ line 30 ~ fieldsValidator ~ vals',
    vals
  );

  if (vals) {
    if (field.key === 'email') {
      if (!validator.isEmail(vals)) {
        validationErrors[field.key] = 'O email introduzido não é válido';
      } else {
        delete validationErrors[field.key];
      }
    }
    if (field.key === 'nif') {
      if (!nifValidation(vals)) {
        validationErrors[field.key] = 'O NIF introduzido não é válido';
      } else {
        delete validationErrors[field.key];
      }
    }
    if (field.key === 'telephone') {
      if (!validator.isMobilePhone(vals, 'any')) {
        validationErrors[field.key] = 'O telefone introduzido não é válido';
      } else {
        delete validationErrors[field.key];
      }
    }
    if (field.key === 'postal-code' || field.key === 'postalCode') {
      if (!validator.isPostalCode(vals, 'PT')) {
        validationErrors[field.key] =
          'O código postal introduzido não é válido';
      } else {
        delete validationErrors[field.key];
      }
    }
  }
  return validationErrors;
};
