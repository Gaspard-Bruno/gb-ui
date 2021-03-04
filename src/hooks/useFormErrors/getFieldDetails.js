export const getFieldDetails = (answers, schema) => {
  const offerTypeField = schema.find(q => q.key === 'offer-type');
  const fields = [];
  const offerTypeAnswer = answers['offer-type'];
  const mainDishAnswer = answers['main-dish'];
  const numberOfChildren = answers['number-of-children'];
  const numberOfAnimals = answers['number-of-animals'];
  const loginAnswer = answers['login-buttons'];
  const districtAnswer = answers['district'];
  //──── District Logic ────────────────────────────────────────────────────────────────────
  if (
    typeof districtAnswer === 'string' &&
    districtAnswer?.toLowerCase() === 'outro'
  ) {
    fields.push('district_other', 'district_other_parish');
  } else if (districtAnswer) {
    fields.push('district_parish');
  }
  //──── Offer Types ───────────────────────────────────────────────────────────────────────
  if (offerTypeAnswer || offerTypeAnswer === 0) {
    if (offerTypeAnswer === 0) {
      if (offerTypeField['formOfferType'] !== 'one-time-service-specific') {
        fields.push(
          'service-start-date',
          'preferred-hours-start',
          'preferred-hours-end'
        );
      } else {
        fields.push('service-start-date', 'preferred-hours-start');
      }
    }
    if (offerTypeAnswer === 1) {
      if (answers?.['recurrence'] === 1) {
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
    if (offerTypeAnswer === 2) {
      if (
        offerTypeField['formOfferType'] === 'hour-pack' ||
        offerTypeField['formOfferType'] === 'ready-pack'
      ) {
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
  //──── Gastro Experience ─────────────────────────────────────────────────────────────────
  if (mainDishAnswer || mainDishAnswer === 0) {
    if (mainDishAnswer === 0) {
      fields.push('fish-dish');
    }
    if (mainDishAnswer === 1) {
      fields.push('meat-dish');
    }
    if (mainDishAnswer === 2) {
      fields.push('veggie-dish');
    }
  }
  //──── Babysitting ───────────────────────────────────────────────────────────────────────
  if (numberOfChildren) {
    const size = numberOfChildren;
    for (let i = 1; i <= size; i++) {
      fields.push(`children-age-${i}`);
    }
  }
  //──── Pet Forms ─────────────────────────────────────────────────────────────────────────
  if (numberOfAnimals) {
    const size = numberOfAnimals;
    for (let i = 1; i <= size; i++) {
      fields.push(`animal-size-${i}`, `animal-species-${i}`);
    }
  }
  //──── Login Fields ──────────────────────────────────────────────────────────────────────
  if (loginAnswer === 'guest') {
    fields.push(
      'first-name',
      'email',
      'last-name',
      'telephone',
      'company-status'
    );
  }
  if (loginAnswer === 'login') {
    fields.push('email', 'password');
  }
  if (loginAnswer === 'signup') {
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
