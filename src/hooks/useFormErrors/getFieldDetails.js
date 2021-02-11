export const getFieldDetails = (payload, offerType) => {
  const fields = [];
  // offer-types
  if (payload['offer-type'] !== 'undefined') {
    if (payload['offer-type'] === 0) {
      if (offerType !== 'one-time-service-specific') {
        fields.push(
          'service-start-date',
          'preferred-hours-start',
          'preferred-hours-end'
        );
      } else {
        fields.push('service-start-date', 'preferred-hours');
      }
    }
    if (payload['offer-type'] === 1) {
      if (payload?.['recurrence'] === 1) {
        fields.push('week-select');
      }
      fields.push(
        'number-of-hours',
        'recurrence',
        'repetition',
        'service-start-date',
        'service-end-date',
        'preferred-hours-start',
        'preferred-hours-end'
      );
    }
    if (payload['offer-type'] === 2) {
      if (offerType === 'hour-pack' || offerType === 'ready-pack') {
        fields.push('pack-selection', 'service-start-date');
      } else {
        fields.push(
          'recurrence',
          'repetition',
          'service-start-date',
          'preferred-hours-start',
          'preferred-hours-end'
        );
      }
    }
  }
  // gastro form
  if (payload['main-dish'] !== 'undefined') {
    if (payload['main-dish'] === 0) {
      fields.push('fish-dish');
    }
    if (payload['main-dish'] === 1) {
      fields.push('meat-dish');
    }
    if (payload['main-dish'] === 2) {
      fields.push('veggie-dish');
    }
  }
  // babysitting forms specific fields
  if (payload['number-of-children']) {
    const size = payload['number-of-children'];
    for (let i = 1; i <= size; i++) {
      fields.push(`children-age-${i}`);
    }
  }
  // pet forms specific fields
  if (payload['number-of-animals']) {
    const size = payload['number-of-animals'];
    for (let i = 1; i <= size; i++) {
      fields.push(`animal-size-${i}`, `animal-species-${i}`);
    }
  }
  // login fields
  if (payload['login-buttons'] === 'guest') {
    fields.push(
      'first-name',
      'email',
      'last-name',
      'telephone',
      'company-status'
    );
  }
  if (payload['login-buttons'] === 'login') {
    fields.push('email', 'password');
  }
  if (payload['login-buttons'] === 'signup') {
    fields.push(
      'first-name',
      'email',
      'last-name',
      'telephone',
      'password',
      'company-status'
    );
  }
  return fields;
};
