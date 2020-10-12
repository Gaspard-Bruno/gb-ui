import petsitting from './petsitting.form.json';
import babysitting from './babysitting.form.json';
import chefAtHome from './chef_at_home.form.json';
import cleaning from './cleaning.form.json';
import elderCompany from './elder_company.form.json';
import gastro_experience from './gastro_experience.form.json';
import ironing from './ironing.form.json';
import language_classes from './language_classes.form.json';
import musicLessons from './music_lessons.form.json';
import repairs from './repairs.form.json';
import gardening from './gardening.form.json';
import becomeSpecialist from './becomespecialist.js';

const gardeningAnswers = {
  email: 'david@test.com',
  guest: {
    email: 'david@test.com',
    lastName: 'Morais',
    firstName: 'David',
    telephone: '123'
  },
  address: 'Rua Cenas',
  country: 1,
  service: 1,
  district: 1,
  location: 'St Tirso 231',
  'area-size': '233 kilos',
  'last-name': 'Morais',
  materials: 1,
  telephone: '123',
  'first-name': 'David',
  'offer-type': 'single',
  'start-date': '2020-10-14',
  'postal-code': '2800*282',
  'service-type': 'standard',
  'login-buttons': 'guest',
  'chosen-language': 1
};

export default {
  petsitting,
  babysitting,
  chefAtHome,
  cleaning,
  elderCompany,
  gastro_experience,
  ironing,
  language_classes,
  musicLessons,
  repairs,
  becomeSpecialist,
  gardening,
  gardeningAnswers
};
