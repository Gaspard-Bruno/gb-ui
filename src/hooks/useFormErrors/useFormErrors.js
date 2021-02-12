import React, { useCallback, useEffect, useMemo, useState } from 'react';
import validator from 'validator';
import * as Yup from 'yup';
import { validateYupSchema } from 'formik';

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
const fieldValidator = (field, value) => {
  const pattern = field.pattern || field.key;
  const { maxLen, minLen, required } = field;
  if (required && (!value || value !== 0)) {
    return 'Obrigatório';
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
    if (pattern === 'telephone') {
      if (!validator.isMobilePhone(value, 'any')) {
        return 'O telefone introduzido não é válido';
      }
    }
    if (pattern === 'postal-code' || pattern === 'postalCode') {
      if (!validator.isPostalCode(value, 'PT')) {
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
      fields.forEach(field => {
        const fieldError = validateField(field, values[field.key]);
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
