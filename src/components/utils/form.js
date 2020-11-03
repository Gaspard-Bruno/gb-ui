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
  'week-select': {
    0: true,
    1: true,
    2: false,
    3: false,
    4: false,
    5: true,
    6: false
  },
  telephone: '123',
  notes: 'Cool stuff',
  'first-name': 'David',
  'offer-type': 1,
  'start-date': '2020-10-14',
  'postal-code': '2800*282',
  'service-type': 1,
  'number-of-hours': 0,
  'login-buttons': 'guest',
  'chosen-language': 1
};

const specialistFormAnswers = {
  nif: '2332',
  name: 'David',
  email: '3@cenas.com',
  address: '2',
  country: 0,
  known55: '1',
  district: 0,
  lastName: 'Morais',
  location: '4',
  services: ['Apoio Familiar a crianças'],
  'sex-type': 1,
  birthDate: '1111-11-26',
  otherInfo: '3',
  telephone: '1',
  PostalCode: '3',
  'question-1': 0,
  'week-hours': {
    friday: [],
    monday: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    sunday: [9, 10, 11, 12, 13, 14, 15, 16],
    tuesday: [],
    saturday: [9, 10, 11, 12, 13, 14, 15, 16],
    thursday: [],
    wednesday: [9, 10, 11, 12, 13, 14, 15, 16]
  },
  maritalStatus: 1,
  paymentMethod: 0,
  'main-motivation': '2',
  preferredContact: 0,
  professionalStatus: 2,
  professionalActivity: 0,
  'babysitting-child-age': [
    { value: 0, question: 'De 6 meses até os 2 anos' },
    {
      value: 1,
      question: 'Dos 2 anos até os 10 anos',
      isSelected: true
    },
    { value: 2, question: 'Maiores de 10 anos' }
  ],
  professionalExperience: 'dd',
  'babysitting-service-to-do': [
    { value: 0, question: 'Companhia', isSelected: true },
    { value: 1, question: 'Deslocações' },
    { value: 2, question: 'Acompanhamento TPC' },
    { value: 3, question: 'Explicações' }
  ],
  'foreign-language-knowledge': 0,
  'babysitting-children-number': [
    { value: 0, question: 'Apenas 1' },
    { value: 1, question: 'Mais do que 1' },
    { value: 2, question: 'Outro', isSelected: true }
  ],
  'babysitting-children-number-other': 'Puto mais velho'
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
  gardeningAnswers,
  specialistFormAnswers
};
