const stepOne = () => {
  return [
    {
      label: 'Complete os seus dados pessoais',
      type: 'footnote'
    },
    {
      key: 'sexType',
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
    {
      key: 'maritalStatus',
      type: 'radio',
      isVerticalAligned: true,
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
      isVerticalAligned: true,
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
      key: 'postalCode',
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
      isVerticalAligned: true,
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
      key: 'hasCar',
      type: 'radio',
      isVerticalAligned: true,
      options: [
        { label: 'Sim', value: 1 },
        { label: 'Não', value: 0 }
      ]
    },
    {
      key: 'services',
      type: 'uniq-array',
      value: [],
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
      children: [
        // Aulas de Música
        {
          type: 'object',
          key: 'musicLessons',
          widget: 'mini-form',
          dependencyType: 'value-includes',
          dependencyValue: 'Aulas de Música',
          label: 'Aulas de Música',
          questions: [
            {
              key: 'instruments',
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
              ],
              children: [
                {
                  key: 'musicLessonsOtherInstrument',
                  label: 'Outros',
                  dependencyType: 'value',
                  dependencyValue: 6,
                  type: 'text'
                }
              ]
            },
            {
              key: 'musicLessonsLevel',
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
              key: 'musicLessonsPlace',
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
              ],
              children: [
                {
                  key: 'musicLessonsOtherPlace',
                  label: 'Outro Espaço',
                  dependencyType: 'value',
                  dependencyValue: 2,
                  type: 'text'
                }
              ]
            }
          ]
        },
        //Apoio Familiar a Seniores
        {
          type: 'object',
          widget: 'mini-form',
          key: 'seniorSupport',
          dependencyType: 'value-includes',
          dependencyValue: 'Apoio Familiar a Seniores',
          label: 'Apoio Familiar a Seniores',
          questions: [
            {
              key: 'seniorSupportType',
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
          ]
        },
        //Experiência Gastronómica
        {
          type: 'object',
          widget: 'mini-form',
          key: 'gastroExperience',
          dependencyType: 'value-includes',
          dependencyValue: 'Experiência Gastronómica',
          label: 'Experiência Gastronómica',
          questions: [
            {
              key: 'gastroExperienceFoodType',
              title: 'Experiência Gastronómica',
              type: 'checkbox-group',
              label: 'Qual é o tipo de comida que quer fazer?',
              options: [
                {
                  label: 'Tradicional Portuguesa',
                  value: 0,
                  isSelected: false
                },
                {
                  label: 'Caseira',
                  value: 1,
                  isSelected: false
                },
                { label: 'Vegetariana', value: 2, isSelected: false },
                { label: 'Internacional', value: 3, isSelected: false },
                { label: 'Vegan', value: 4, isSelected: false },
                { label: 'Outro', value: 5, isSelected: false }
              ],
              children: [
                {
                  key: 'gastroExperienceOther',
                  label: 'Outro',
                  dependencyType: 'value',
                  dependencyValue: 6,
                  type: 'text'
                }
              ]
            }
          ]
        },
        //Petcare
        {
          type: 'object',
          key: 'petcare',
          widget: 'mini-form',
          dependencyType: 'value-includes',
          dependencyValue: 'Petcare',
          label: 'Petcare',
          questions: [
            {
              key: 'petcareAnimalType',
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
              ],
              children: [
                {
                  key: 'petcareAnimalTypeOther',
                  label: 'Outro',
                  dependencyType: 'value',
                  dependencyValue: 2,
                  type: 'text'
                }
              ]
            },
            {
              key: 'petcareAnimalSize',
              label: 'Qual o porte do cão que pode cuidar?',
              type: 'checkbox-group',
              options: [
                { label: 'Pequeno', value: 1, isSelected: false },
                { label: 'Médio', value: 1, isSelected: false },
                { label: 'Grande', value: 2, isSelected: false }
              ]
            }
          ]
        },
        //Petsitting
        {
          type: 'object',
          key: 'petsitting',
          widget: 'mini-form',
          dependencyType: 'value-includes',
          dependencyValue: 'Petsitting',
          label: 'Petsitting',
          questions: [
            {
              key: 'petsittingExteriorSpace',
              title: 'Petsitting (estadia)',
              label:
                'Caso possa ficar na sua casa, tem um espaço exterior para o animal?',
              type: 'radio',
              isVerticalAligned: true,
              options: [
                { label: 'Sim', value: 1 },
                { label: 'Não', value: 0 }
              ]
            },
            {
              key: 'petsittingAnimalType',
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
              ],
              children: [
                {
                  key: 'petsittingAnimalTypeOther',
                  label: 'Outros',
                  dependencyType: 'value',
                  dependencyValue: 2,
                  type: 'text'
                }
              ]
            },
            {
              key: 'petsittingAnimalSize',
              label: 'Qual o porte do cão que pode cuidar?',
              type: 'checkbox-group',
              options: [
                { label: 'Pequeno', value: 1, isSelected: false },
                { label: 'Médio', value: 1, isSelected: false },
                { label: 'Grande', value: 2, isSelected: false }
              ]
            }
          ]
        },
        // Repairs
        {
          type: 'object',
          widget: 'mini-form',
          dependencyType: 'value-includes',
          dependencyValue: 'Reparações',
          label: 'Reparações',
          key: 'repairs',
          questions: [
            {
              key: 'repairsType',
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
              ],
              children: [
                {
                  key: 'repairsTypeOther',
                  label: 'Outro',
                  dependencyType: 'value',
                  dependencyValue: 6,
                  type: 'text'
                }
              ]
            },
            {
              key: 'repairsTools',
              label:
                'Tem as ferramentas necessários para realizar este serviço?',
              type: 'radio',
              isVerticalAligned: true,
              options: [
                { label: 'Sim', value: 1 },
                { label: 'Não', value: 0 }
              ]
            }
          ]
        },
        // Gardening
        {
          type: 'object',
          widget: 'mini-form',
          dependencyType: 'value-includes',
          dependencyValue: 'Jardinagem',
          label: 'Jardinagem',
          key: 'gardening',
          questions: [
            {
              key: 'gardeningType',
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
              ],
              children: [
                {
                  key: 'gardeningTypeOther',
                  label: 'Outros',
                  dependencyType: 'value',
                  dependencyValue: 3,
                  type: 'text'
                }
              ]
            },
            {
              key: 'gardeningTools',
              label:
                'Tem as ferramentas necessários para realizar este serviço?',
              type: 'radio',
              isVerticalAligned: true,
              options: [
                { label: 'Sim', value: 1 },
                { label: 'Não', value: 0 }
              ]
            }
          ]
        },
        // BabySitting
        {
          type: 'object',
          widget: 'mini-form',
          dependencyType: 'value-includes',
          key: 'babysitting',
          dependencyValue: 'Apoio Familiar a crianças',
          label: 'Apoio Familiar a crianças',
          questions: [
            {
              key: 'babysittingChildrenNumber',
              title: 'Apoio Familiar a crianças',
              type: 'checkbox-group',
              label: 'Quantas Crianças pode acompanhar ao mesmo tempo ?',
              options: [
                { label: 'Apenas 1', value: 0, isSelected: false },
                { label: 'Mais do que 1', value: 1, isSelected: false },
                { label: 'Outro', value: 2, isSelected: false }
              ],
              children: [
                {
                  key: 'babysittingChildrenNumberOther',
                  label: 'Outro',
                  dependencyType: 'value',
                  dependencyValue: 2,
                  type: 'text'
                }
              ]
            },
            {
              key: 'babysittingChildAge',
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
              key: 'babysittingServiceToDo',
              type: 'checkbox-group',
              label: 'Que tipos de serviço gostaria de fazer',
              options: [
                {
                  label: 'Companhia',
                  value: 0,
                  isSelected: false
                },
                {
                  label: 'Deslocações',
                  value: 1,
                  isSelected: false
                },
                { label: 'Acompanhamento TPC', value: 2, isSelected: false },
                { label: 'Explicações', value: 3, isSelected: false }
              ]
            },
            {
              key: 'babysittingServiceToDoOther',
              label: 'Outros',
              type: 'text'
            },
            {
              type: 'footnote',
              label:
                'Informamos que por lei, todas as pessoas que trabalhem com crianças deveram proceder à entrega do Registo Criminal atualizado.'
            }
          ]
        }
      ]
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
      label: 'Seleccione',
      type: 'footnote'
    },
    { key: 'weekHours', type: 'uniq-array', widget: 'schedule-picker' }
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
      isVerticalAligned: true,
      options: [
        { label: 'Sim', value: 1 },
        { label: 'Não', value: 0 }
      ]
    },
    {
      key: 'paymentMethod',
      label: 'Método de Pagamento Preferencial',
      type: 'radio',
      isVerticalAligned: true,
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
      key: 'foreignLanguageKnowledge',
      label: 'Tem conhecimento ou fala fluentemente alguma língua estrangeira?',
      type: 'radio',
      isVerticalAligned: true,
      options: [
        { label: 'Sim', value: 1 },
        { label: 'Não', value: 0 }
      ],
      children: [
        {
          key: 'languages',
          type: 'number',
          dependencyType: 'value',
          dependencyValue: 1,
          value: 1,
          widget: 'add-field',
          label: 'Adicionar língua +',
          fields: [
            {
              type: 'dropdown',
              key: 'language-selected',
              label: '',
              options: [
                { value: 0, label: 'Português' },
                { value: 1, label: 'Inglês' },
                { value: 2, label: 'Francês' },
                { value: 3, label: 'Espanhol' }
              ]
            },
            {
              type: 'dropdown',
              key: 'languageLevel',
              label: '',
              options: [
                { label: 'Básico', value: 0 },
                { label: 'Intermédio', value: 1 },
                { label: 'Avançado', value: 2 }
              ]
            }
          ]
        }
      ]
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
      key: 'main-Motivation',
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

const STEP_LABELS = [
  'Dados Pessoais',
  'Morada',
  'Situação Profissional e Experiência',
  'Contactos',
  'Serviços',
  'Preferência Horária',
  'Pagamentos',
  'Linguas Estrangeiras',
  'Outros'
];
const formSteps = {
  type: 'form',
  questions: steps.map((step, stepIndex) => ({
    type: 'object',
    key: `become-form-${stepIndex}`,
    label: STEP_LABELS[stepIndex],
    questions: step
  }))
};

export default formSteps;
