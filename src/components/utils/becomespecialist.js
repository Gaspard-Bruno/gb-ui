import React from 'react';

const stepOne = () => {
  return [
    {
      label: 'Complete os seus dados pessoais',
      type: 'footnote'
    },
    {
      key: 'sex-type',
      label: 'Sexo',
      type: 'radio',
      options: [
        { value: 0, label: 'Feminino' },
        { value: 1, label: 'Masculino' }
      ]
    },
    { key: 'name', type: 'text', label: 'Nome' },
    { key: 'lastName', type: 'text', label: 'Apelido' },
    { key: 'birthDate', type: 'date', label: 'Data de Nascimento' },
    { key: 'nif', type: 'number', label: 'NIF' },
    { label: 'Complete os seus dados pessoais', type: 'footnote' },
    {
      key: 'maritalStatus',
      type: 'radio',
      label: 'Estado Civil',
      options: [
        { label: 'Casado', value: 0 },
        { label: 'Solteiro', value: 1 },
        { label: 'Divorciado', value: 2 },
        { label: 'Viúvo', value: 3 }
      ]
    }
  ];
};

const stepTwo = () => {
  return [
    {
      label: 'Diga-nos como prefere ser contactado',
      type: 'footnote'
    },
    {
      key: 'telephone',
      label: 'Número de Telemóvel',
      type: 'text'
    },
    {
      key: 'email',
      label: 'Endereço de Email',
      type: 'email'
    },
    {
      key: 'preferredContact',
      type: 'radio',
      label: 'Método de contacto preferencial',
      options: [
        { label: 'Telefone', value: 0 },
        { label: 'Email', value: 1 },
        { label: 'WhatsApp', value: 2 }
      ]
    }
  ];
};

const stepThree = () => {
  return [
    {
      label: 'Diga-nos como prefere ser contactado',
      type: 'footnote'
    },
    {
      key: 'country',
      label: 'País',
      type: 'dropdown',
      options: [{ label: 'Portugal', value: 0 }]
    },
    {
      key: 'district',
      label: 'Distrito',
      type: 'dropdown',
      options: [{ label: 'Lisboa', value: 0 }]
    },
    {
      key: 'address',
      label: 'Morada',
      type: 'text'
    },
    {
      key: 'PostalCode',
      label: 'Código Postal',
      type: 'text'
    },
    {
      key: 'location',
      label: 'Localidade',
      type: 'text'
    }
  ];
};

const stepFour = () => {
  return [
    {
      label: 'Diga-nos como prefere ser contactado',
      type: 'footnote'
    },
    {
      key: 'professionalStatus',
      label: 'Situação Profissional',
      type: 'radio',
      options: [
        { label: 'Pré Reforma', value: 0 },
        { label: 'Desempregado', value: 1 },
        { label: 'Trabalhador', value: 2 },
        { label: 'Reformado', value: 3 }
      ]
    },
    {
      key: 'professionalExperience',
      label: 'Experiência Profissional anterior',
      type: 'text-area',
      placeholder: 'Conte-nos um pouco sobre a sua Experiência Profissional'
    }
  ];
};

const stepFive = () => {
  return [
    {
      label: 'Diga-nos como prefere ser contactado',
      type: 'footnote'
    },
    {
      label: 'Tem carro disponível caso seja necessário em algum serviço ?',
      type: 'radio',
      options: [
        { label: 'Sim', value: 1 },
        { label: 'Não', value: 0 }
      ]
    },
    {
      key: 'services',
      type: 'array',
      widget: 'services',
      options: [
        {
          label: 'Apoio Familiar a crianças',
          value: 'Apoio Familiar a crianças'
        },
        {
          label: 'Apoio Familiar a Seniores',
          value: 'Apoio Familiar a Seniores'
        },
        { label: 'Aulas de Música', value: 'Aulas de Música' },
        {
          label: 'Experiência Gastronómica',
          value: 'Experiência Gastronómica'
        },
        { label: 'Jardinagem', value: 'Jardinagem' },
        { label: 'Reparações', value: 'Reparações' },
        { label: 'Petsitting', value: 'Petsitting' },
        { label: 'Petcare', value: 'Petcare' }
      ],
      optionWidgets: {
        // Aulas de Música
        'Aulas de Música': [
          {
            key: 'music-lessons',
            title: 'Aulas de Música',
            type: 'checkbox-group',
            label: 'Qual o instrumento (ou instrumentos) que pode ensinar?',
            options: [
              { label: 'Viola', value: 0, isSelected: false },
              {
                label: 'Piano',
                value: 1,
                isSelected: false
              },
              { label: 'Violino', value: 2, isSelected: false },
              { label: 'Acordeão', value: 3, isSelected: false },
              { label: 'Bateria / Percução', value: 4, isSelected: false },
              { label: 'Flauta', value: 5, isSelected: false },
              { label: 'Outro', value: 6, isSelected: false }
            ]
          },
          {
            key: 'music-lessons-other-instrument',
            type: 'text'
          },
          {
            key: 'music-lessons-level',
            type: 'checkbox-group',
            label:
              'Qual o nível de ensino do/s instrumento/s que pode realizar?',
            options: [
              { label: 'Básico', value: 0, isSelected: false },
              {
                label: 'Intermédio',

                value: 1,
                isSelected: false
              },
              { label: 'Avançado', value: 2, isSelected: false }
            ]
          },
          {
            key: 'music-lessons-place',
            type: 'checkbox-group',
            label:
              'Qual o nível de ensino do/s instrumento/s que pode realizar?',
            options: [
              { label: 'Na minha casa', value: 0, isSelected: false },
              {
                label:
                  'Na casa do Cliente (se o serviço requerer a utilização de carro próprio, são pagos os Kms )',

                value: 1,
                isSelected: false
              },
              { label: 'Outro Espaço', value: 2, isSelected: false }
            ]
          },
          {
            key: 'music-lessons-other-place',
            type: 'text'
          }
        ],
        //Apoio Familiar a Seniores
        'Apoio Familiar a Seniores': [
          {
            key: 'senior-company',
            title: 'Apoio Familiar a Seniores',
            type: 'checkbox-group',
            label:
              'Este serviço tem varias tipologias, quais gostaria de fazer?',
            options: [
              { label: 'Companhia', value: 0, isSelected: false },
              {
                label:
                  'Deslocações (se o serviço requerer a utilização de carro próprio, são pagos os Kms )',
                value: 1,
                isSelected: false
              },
              { label: 'Refeição', value: 2, isSelected: false }
            ]
          }
        ],
        //Experiência Gastronómica
        'Experiência Gastronómica': [
          {
            key: 'gastronomical-experience',
            title: 'Experiência Gastronómica',
            type: 'checkbox-group',
            label: 'Qual é o tipo de comida que quer fazer?',
            options: [
              { label: 'Tradicional Portuguesa', value: 0, isSelected: false },
              {
                label: 'Caseira',
                value: 1,
                isSelected: false
              },
              { label: 'Vegetariana', value: 2, isSelected: false },
              { label: 'Internacional', value: 3, isSelected: false },
              { label: 'Vegan', value: 4, isSelected: false },
              { label: 'Outro', value: 5, isSelected: false }
            ]
          },
          {
            key: 'petCare-animal-type-other',
            type: 'text'
          }
        ],
        //Petcare
        Petcare: [
          {
            key: 'petcare-animal-type',
            title: 'Petcare (visitas e/ ou passeios)',
            type: 'checkbox-group',
            label: 'Qual é o tipo de animal que pode cuidar?',
            options: [
              { label: 'Cães', value: 0, isSelected: false },
              {
                label: 'Gatos',
                value: 1,
                isSelected: false
              },
              { label: 'Outro', value: 2, isSelected: false }
            ]
          },
          {
            key: 'petCare-animal-type-other',
            type: 'text'
          },
          {
            key: 'petCare-animal-size',
            label: 'Qual o porte do cão que pode cuidar?',
            type: 'checkbox-group',
            options: [
              { label: 'Pequeno', value: 1, isSelected: false },
              { label: 'Médio', value: 1, isSelected: false },
              { label: 'Grande', value: 2, isSelected: false }
            ]
          }
        ],
        //Petsitting
        Petsitting: [
          {
            key: 'petsitting-exterior-space',
            title: 'Petsitting (estadia)',
            label:
              'Caso possa ficar na sua casa, tem um espaço exterior para o animal?',
            type: 'radio',
            options: [
              { label: 'Sim', value: 1 },
              { label: 'Não', value: 0 }
            ]
          },
          {
            key: 'petsitting-animal-type',
            type: 'checkbox-group',
            label: 'Qual é o tipo de animal que pode cuidar?',
            options: [
              { label: 'Cães', value: 0, isSelected: false },
              {
                label: 'Gatos',
                value: 1,
                isSelected: false
              },
              { label: 'Outro', value: 2, isSelected: false }
            ]
          },
          {
            key: 'petsitting-animal-type-other',
            type: 'text'
          },
          {
            key: 'petsitting-animal-size',
            label: 'Qual o porte do cão que pode cuidar?',
            type: 'checkbox-group',
            options: [
              { label: 'Pequeno', value: 1, isSelected: false },
              { label: 'Médio', value: 1, isSelected: false },
              { label: 'Grande', value: 2, isSelected: false }
            ]
          }
        ],
        // Repairs
        Reparações: [
          {
            key: 'Repairs',
            title: 'Reparações',
            type: 'checkbox-group',
            label: 'Este serviço tem várias tipologias, quais pode fazer?',
            options: [
              { label: 'Canalizaçãoda', value: 0, isSelected: false },
              {
                label: 'Carpintaria',
                value: 1,
                isSelected: false
              },
              { label: 'Electricidade', value: 2, isSelected: false },
              { label: 'Furos', value: 3, isSelected: false },
              { label: 'Isolamentos', value: 4, isSelected: false },
              { label: 'Pinturas', value: 5, isSelected: false },
              { label: 'Outro', value: 6, isSelected: false }
            ]
          },
          {
            key: 'repairs-other',
            type: 'text'
          },
          {
            key: 'repairs-tools',
            label: 'Tem as ferramentas necessários para realizar este serviço?',
            type: 'radio',
            options: [
              { label: 'Sim', value: 1 },
              { label: 'Não', value: 0 }
            ]
          }
        ],
        // Gardening
        Jardinagem: [
          {
            key: 'Gardening',
            title: 'Jardinagem',
            type: 'checkbox-group',
            label: 'Este serviço tem varias tipologias, quais pode fazer?',
            options: [
              { label: 'Poda', value: 0, isSelected: false },
              {
                label: 'Criação de novos jardins',
                value: 1,
                isSelected: false
              },
              { label: 'Consultoria', value: 2, isSelected: false },
              { label: 'Outro', value: 3, isSelected: false }
            ]
          },
          {
            key: 'gardening-other',
            type: 'text'
          },
          {
            key: 'gardening-tools',
            label: 'Tem as ferramentas necessários para realizar este serviço?',
            type: 'radio',
            options: [
              { label: 'Sim', value: 1 },
              { label: 'Não', value: 0 }
            ]
          }
        ],
        // BabySitting
        'Apoio Familiar a crianças': [
          {
            key: 'babysitting',
            title: 'Apoio Familiar a crianças',
            type: 'checkbox-group',
            label: 'Quantas Crianças pode acompanhar ao mesmo tempo ?',
            options: [
              { label: 'Apenas 1', value: 0, isSelected: false },
              { label: 'Mais do que 1', value: 1, isSelected: false },
              { label: 'Outro', value: 2, isSelected: false }
            ]
          },
          { key: 'babysitting-child-number-other', type: 'text' },
          {
            key: 'babysitting-child-age',
            type: 'checkbox-group',
            label:
              'Que idades nas crianças prefere para realizar este serviço?',
            options: [
              {
                label: 'De 6 meses até os 2 anos',
                value: 0,
                isSelected: false
              },
              {
                label: 'Dos 2 anos até os 10 anos',
                value: 1,
                isSelected: false
              },
              { label: 'Maiores de 10 anos', value: 2, isSelected: false }
            ]
          },
          {
            key: 'babysitting-service-to-do',
            type: 'checkbox-group',
            label: 'Que tipos de serviço gostaria de fazer',
            options: [
              {
                label: 'Companhia',
                value: 0,
                isSelected: false
              },
              {
                label:
                  'Deslocações (se o serviço requerer a utilização de carro próprio, são pagos os Kms )',
                value: 1,
                isSelected: false
              },
              { label: 'Acompanhamento TPC', value: 2, isSelected: false },
              { label: 'Explicações', value: 3, isSelected: false }
            ]
          },
          { key: 'babysitting-service-to-do-other', type: 'text' },
          {
            type: 'footnote',
            label:
              'Informamos que por lei, todas as pessoas que trabalhem com crianças deveram proceder à entrega do Registo Criminal atualizado.'
          }
        ]
      }
    }
  ];
};

const stepSix = () => {
  return [
    {
      label:
        'Qual é a sua preferência durante a semana? fim-se-semana para prestar os serviços?',
      type: 'footnote'
    },
    {
      key: 'hour-preference',
      label: 'Seleccione',
      type: 'text'
    },
    { key: 'week-hours', type: 'array', widget: 'schedule-picker' }
  ];
};
const stepSeven = () => {
  return [
    {
      label:
        'Qual é a sua disponibilidade durante a semana / fim-de-semana para prestar serviços?',
      type: 'footnote'
    },
    {
      key: 'professionalActivity',
      label: 'Tem actividade aberta ?',
      type: 'radio',
      options: [
        { label: 'Sim', value: 1 },
        { label: 'Não', value: 0 }
      ]
    },
    {
      key: 'paymentMethod',
      label: 'Método de Pagamento Preferencial',
      type: 'radio',
      options: [
        { label: 'Recibos Mensais', value: 0 },
        {
          label: 'Acto Isolado (Acumular todos os serviços ao longo do ano)',
          value: 1
        },
        {
          label: 'Acumular o valor para usufruir serviços 55+ gratuitos',
          value: 2
        }
      ]
    }
  ];
};
const stepEight = () => {
  return [
    {
      label:
        'Qual é a sua disponibilidade durante a semana / fim-de-semana para prestar serviços?',
      type: 'footnote'
    },
    {
      key: 'languageProfessionalActivity',
      label: 'Tem actividade aberta ?',
      type: 'radio',
      options: [
        { label: 'Sim', value: 1 },
        { label: 'Não', value: 0 }
      ]
    },
    {
      key: 'languages',
      type: 'array',
      options: [
        { value: 'Português', label: 'Português' },
        { value: 'Inglês', label: 'Inglês' },
        { value: 'Francês', label: 'Francês' },
        { value: 'Espanhol', label: 'Espanhol' }
      ], // Array to mutate
      children: {
        type: 'dropdown',
        key: 'language-level',
        options: [
          { label: 'Básico', value: 0 },
          { label: 'Intermédio', value: 1 },
          { label: 'Avançado', value: 2 }
        ]
      }
    }
  ];
};
const stepNine = () => {
  return [
    {
      label:
        'Qual é a sua disponibilidade durante a semana / fim-de-semana para prestar serviços?',
      type: 'footnote'
    },
    {
      key: 'known55',
      label: 'Como soube da 55+',
      type: 'text-area'
    },
    {
      key: 'main-motivation',
      label:
        'Porque quer fazer parte da 55+? Qual é a sua principal motivação?',
      type: 'text-area'
    },
    {
      key: 'otherInfo',
      label: 'Outras Informações',
      type: 'text-area'
    }
  ];
};

const steps = [
  stepOne(),
  stepTwo(),
  stepThree(),
  stepFour(),
  stepFive(),
  stepSix(),
  stepSeven(),
  stepEight(),
  stepNine()
];
const formSteps = {
  type: 'form',
  questions: steps.map((step, stepIndex) => ({
    type: 'object',
    children: step
  }))
};

export default formSteps;
