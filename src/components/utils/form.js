import petsitting from './schemas/petsitting.json';
import babysitting from './schemas/babysitting.json';
import chefAtHome from './schemas/chef_at_home.json';
import cleaning from './schemas/cleaning.json';
import elderCompany from './schemas/elder_company.json';
import gastro_experience from './schemas/gastro_experience.json';
import ironing from './schemas/ironing.json';
import language_classes from './schemas/language_classes.json';
import musicLessons from './schemas/music_lessons.json';
import repairs from './schemas/repairs.json';
import gardening from './schemas/gardening.json';
import becomeSpecialist from './becomespecialist.js';
import sewing from './schemas/sewing.json';

const petSittingAnswers = {
  'animal-size-1': 0,
  'animal-size-2': 1,
  'animal-species-1': 1,
  'animal-species-2': 1,
  'number-of-animals': 2,
  'offer-type': 2,
  'pack-selection': 1,
  'service-date': '2020-12-12'
};
const repairsAnswers = {
  email: 'sandro.martins@netcabo.pt',
  files: [
    {
      id: 22,
      filename: 'image_1.png',
      url: 'https://d3ugqbne3wd6hp.cloudfront.net/pdjla7qxnejida55ac6sjqiles51'
    }
  ],
  guest: {
    email: 'sandro.martins@netcabo.pt',
    lastName: 'wwew',
    firstName: 'asdsadad asdsad',
    telephone: '23232'
  },
  notes: 'wewe',
  parish: 'Areeiro',
  address: 'asdsadasd',
  district: 'lisboa',
  'last-name': 'wwew',
  telephone: '23232',
  'first-name': 'asdsadad asdsad',
  'offer-type': 0,
  'postal-code': '2323',
  'service-date': '2020-12-08',
  'login-buttons': 'guest',
  'service-offer': 'Reparar Cenas com cuidado',
  'company-status': 0,
  'preferred-hours': '10:00',
  'service-materials': 1
};
const gardeningAnswers = {
  email: 'david@test.com',
  guest: {
    email: 'david@test.com',
    lastName: 'Morais',
    firstName: 'David',
    telephone: '123'
  },

  parish: 'Arroios',
  address: 'Rua Cenas',
  'chosen-language': 1,
  country: 1,
  'service-offer': 1,
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
  files: [{ filename: 'cenas.jpg' }],
  telephone: '123',
  notes: 'Cool stuff',
  'first-name': 'David',
  'offer-type': 1,
  'pack-selection': 1,
  repetition: 2,
  'service-start-date': '2020-12-01',
  'service-end-date': '2020-12-10',
  'preferred-hours-start': '10:00',
  'preferred-hours-end': '10:00',
  'postal-code': '2800*282',
  'number-of-hours': 1,
  recurrence: 1,
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
  foreignLanguageKnowledge: 1,
  'language-selected0': 0,
  languageLevel0: 1,
  language: 1,

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
  petSittingAnswers,
  repairsAnswers,
  gardeningAnswers,
  specialistFormAnswers
};
