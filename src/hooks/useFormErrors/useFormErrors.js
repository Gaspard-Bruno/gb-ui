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
const inputFieldValidator = (key, value, validationErrors) => {
  if (key === 'email') {
    if (!validator.isEmail(value)) {
      validationErrors[key] = 'O email introduzido não é válido';
    }
  }
  if (key === 'nif') {
    if (!nifValidation(value)) {
      validationErrors[key] = 'O NIF introduzido não é válido';
    }
  }
  if (key === 'telephone') {
    if (!validator.isMobilePhone(value, 'any')) {
      validationErrors[key] = 'O telefone introduzido não é válido';
    }
  }
  if (key === 'postal-code' || key === 'postalCode') {
    if (!validator.isPostalCode(value, 'PT')) {
      validationErrors[key] = 'O código postal introduzido não é válido';
    }
  } else if ((value || value === 0) && validationErrors?.[key]) {
    delete validationErrors[key];
  }
  return validationErrors;
};

const useFormErrors = ({ values, questions }) => {
  const [formErrors, setHandledErrors] = useState({});

  const handledFields = useCallback(
    (field, value) => {
      console.log(
        field,
        value,
        'handling fields,',
        formErrors,
        inputFieldValidator(field, value, formErrors)
      );
      setHandledErrors({
        ...formErrors,
        ...inputFieldValidator(field, value)
      });
      return inputFieldValidator(field, value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formErrors]
  );

  /* const fieldKeys = Object.keys(formProps);
    const fields = {};
    // Parent Keys
    fieldKeys.forEach(field => {

    });

    const schema = Yup.object().shape(fields);
    return schema; */

  const handleValidation = useCallback(() => {
    const payload = { ...values };
    const createValidation = () => {
      // get offer type for specific validation
      const offerType = questions?.find(e => e.key === 'offer-type')
        ?.formOfferType;
      // get specific fields validation
      const detailedFields = getFieldDetails(payload, offerType);
      console.log(
        offerType,
        questions,
        '🚀 ~ file: useFormErrors.js ~ line 87 ~ createValidation ~ detailedFields',
        detailedFields,
        payload,
        formErrors
      );

      // get all fields we need to set required
      const fieldKeys = questions?.map(e => e.key);
      detailedFields.forEach(e => {
        fieldKeys.push(e);
      });

      const fields = {};

      fieldKeys.forEach(field => {
        if (
          field &&
          !payload[field] &&
          payload[field] !== 0 &&
          field !== 'notes' &&
          field !== 'files'
        ) {
          fields[field] = Yup.string().required('required');

          // Do we have a picked service on MINI FORMS?
          if (payload?.services?.length > 0) {
            const pickedServices = payload?.services;
            pickedServices.forEach(service => {
              // get service questions
              const pickedServiceFields = questions
                ?.find(e => e.key === 'services')
                ?.children.find(child => child.key === service)?.questions;

              // add MINI-FORM service opts required fields
              if (pickedServiceFields) {
                pickedServiceFields.forEach(e => {
                  // if fileUploader ignore required status
                  if (e?.key && e?.key !== 'files') {
                    fields[e.key] = Yup.string().required('required');
                  }
                });
              }
            });
          }
        }
      });

      const schema = Yup.object().shape(fields);

      return schema;
    };

    const err = {};
    validateYupSchema(payload, createValidation())
      .then(resp => {
        setHandledErrors(null);
      })
      .catch(e => {
        // format errors {key: value:}
        e.inner.map(el => {
          return (err[el.path] = el.message);
        });
        return setHandledErrors(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors, questions]);

  /*  const validate = useCallback(
    formProps => {
      const errors = {};
      validateYupSchema(formProps, createValidation(formProps))
        .then(resp => {
          setHandledErrors({});
        })
        .catch(e => {
          // format errors {key: value:}
          e.inner.map(el => {
            return (errors[el.path] = el.message);
          });
          setHandledErrors(errors);
        });
    },
    [createValidation]
  ); */

  useEffect(() => {
    handleValidation(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return { formErrors, handledFields };
};

export default useFormErrors;
