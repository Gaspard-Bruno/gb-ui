import { useCallback } from 'react';
import validator from 'validator';

import { getFieldDetails } from './getFieldDetails';

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
const fieldValidator = (field = {}, value) => {
  const pattern = field.pattern || field.key;
  const { maxLen, minLen, required } = field;
  if (required && ((!value && value !== 0) || !value?.trim?.())) {
    return 'Obrigatório';
  }
  if (
    value &&
    value.length &&
    (value.length > maxLen || value.length < minLen)
  ) {
    return value.length >= maxLen
      ? `Máximo de ${maxLen} caractéres`
      : `Mínimo de ${minLen} caractéres`;
  }
  if (value || value === 0) {
    if (pattern === 'email') {
      if (!validator.isEmail(value)) {
        return 'O email introduzido não é válido';
      }
    }
    if (pattern === 'nif') {
      if (!nifValidation(value)) {
        return 'O NIF introduzido não é válido';
      }
    }
    if (pattern === 'telephone' || pattern === 'phone') {
      if (!validator.isMobilePhone(value.toString(), 'any')) {
        return 'O telefone introduzido não é válido';
      }
    }
    if (pattern === 'postal-code' || pattern === 'postalCode') {
      if (!validator.isPostalCode(value.toString(), 'PT')) {
        return 'O código postal introduzido não é válido';
      }
    }
  }
  return false;
};

const useFormErrors = ({}) => {
  const validateField = useCallback((field, value) => {
    const fieldError = fieldValidator(field, value);
    if (fieldError) {
      return fieldError;
    }
  }, []);

  const validateAllFields = useCallback(
    (fields, values) => {
      const errors = {};

      const nestedFieldKeys = getFieldDetails(values, fields);

      nestedFieldKeys.forEach(fieldKey => {
        const fieldError = validateField(
          {
            key: fieldKey,
            required: true,
            pattern: fieldKey
          },
          values[fieldKey]
        );
        if (fieldError) {
          errors[fieldKey] = fieldError;
        }
      });
      fields.forEach(field => {
        const fieldError = validateField(field, values[field.key], values);
        if (fieldError) {
          errors[field.key] = fieldError;
        }
      });
      return errors;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { validateField, validateAllFields };
};

export default useFormErrors;
