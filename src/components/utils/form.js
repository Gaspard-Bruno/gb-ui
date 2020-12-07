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
import sewing from './sewing.form.json';

const gardeningAnswers = {
  email: 'david@test.com',
  guest: {
    email: 'david@test.com',
    lastName: 'Morais',
    firstName: 'David',
    telephone: '123'
  },
  'preferred-hours-start': '10:00',
  parish: 'Arroios',
  address: 'Rua Cenas',
  'chosen-language': 1,
  country: 1,
  service: 1,
  'service-date': '2020-10-10',
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
  'number-of-hours': 1,
  recurrence: 2,
  'login-buttons': 'guest'
};

const specialistFormAnswers = {
  nif: '2332',
  name: 'David',
  email: '3@cenas.com',
  address: '2',
  country: 1,
  known55: '1',
  district: 1,
  lastName: 'Morais',
  location: '4',
  services: ['music_lessons', 'babysitting'],
  sexType: 1,
  birthDate: '1111-11-26',
  otherInfo: '3',
  telephone: '1',
  postalCode: '3',
  weekHours: {
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
  mainMotivation: '2',
  preferredContact: 0,
  professionalStatus: 2,
  files: [
    {
      id: 21,
      filename: 'image_1.png',
      url: 'https://d3ugqbne3wd6hp.cloudfront.net/1rw9qgle2svbaecdir8clau6om6h'
    }
  ],
  professionalActivity: 0,
  babysittingChildAge: [
    { value: 0, question: 'De 6 meses até os 2 anos' },
    {
      value: 1,
      question: 'Dos 2 anos até os 10 anos',
      isSelected: true
    },
    { value: 2, question: 'Maiores de 10 anos' }
  ],
  professionalExperience: 'dd',
  babysittingServiceToDo: [
    { value: 0, question: 'Companhia', isSelected: true },
    { value: 1, question: 'Deslocações' },
    { value: 2, question: 'Acompanhamento TPC' },
    { value: 3, question: 'Explicações' }
  ],
  foreignLanguageKnowledge: 0,
  babysittingChildrenNumber: [
    { value: 0, question: 'Apenas 1' },
    { value: 1, question: 'Mais do que 1' },
    { value: 2, question: 'Outro', isSelected: true }
  ],
  babysittingChildrenNumberOther: 'Puto mais velho'
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
  sewing,
  gardening,
  gardeningAnswers,
  specialistFormAnswers
};
