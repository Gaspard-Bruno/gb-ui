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
      options: [{ label: 'Portugal', value: 1 }]
    },
    {
      key: 'district',
      widget: 'district',
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
      label: 'Serviços',
      type: 'uniq-array',
      value: [],
      options: [
        { label: 'Aulas de Música', value: 'music_lessons' },
        {
          label: 'Apoio Familiar a crianças',
          value: 'babysitting'
        },
        {
          label: 'Apoio Familiar a Seniores',
          value: 'elder_company'
        },
        {
          label: 'Chef Em Casa',
          value: 'chef_at_home'
        },
        { label: 'Jardinagem', value: 'gardening' },
        { label: 'Reparações', value: 'repairs' },
        { label: 'Petsitting (Estadia)', value: 'petsitting' },
        { label: 'Petcare (Visitas e passeios)', value: 'petcare' },
        { label: 'Passar a Ferro', value: 'ironing' },
        { label: 'Costura', value: 'sewing' },
        { label: 'Limpezas', value: 'cleaning' },
        { label: 'Aulas de Línguas', value: 'language_lessons' }
      ],
      children: [
        //! Aulas de Música
        {
          type: 'object',
          key: 'music_lessons',
          widget: 'mini-form',
          dependencyType: 'value-includes',
          dependencyValue: 'music_lessons',
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
                'Qual o nível de ensino do(s) instrumento(s) que pode realizar?',
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
              label: 'Qual o local onde poderá realizar-se a aula?',
              options: [
                { label: 'Na minha casa', value: 0, isSelected: false },
                {
                  label: 'Na casa do Cliente',

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
        //!Apoio Familiar a Seniores
        {
          type: 'object',
          widget: 'mini-form',
          key: 'elder_company',
          dependencyType: 'value-includes',
          dependencyValue: 'elder_company',
          label: 'Apoio Familiar a Seniores',
          questions: [
            {
              key: 'seniorSupportType',
              title: 'Apoio Familiar a Seniores',
              type: 'checkbox-group',
              label:
                'Este serviço tem varias tipologias, quais gostaria de fazer?',
              options: [
                {
                  label: 'Companhia ao domicílio',
                  value: 0,
                  isSelected: false
                },
                {
                  label:
                    'Acompanhamento em deslocações (ida ao médico, à farmácia, ao supermercado, aos Correios, etc.). Passeios',
                  value: 1,
                  isSelected: false
                },
                {
                  label:
                    'Apoio em tarefas domésticas (não inclui cuidados de saúde ou de higiene)',
                  value: 2,
                  isSelected: false
                },
                {
                  label: 'Possibilidade de preparação de refeição ligeira',
                  value: 3,
                  isSelected: false
                },
                {
                  label: 'Outro',
                  value: 4,
                  isSelected: false
                }
              ],
              children: [
                {
                  key: 'seniorSupportTypeOther',
                  type: 'text',
                  label: 'Outro',
                  dependencyType: 'value',
                  dependencyValue: 4
                }
              ]
            }
          ]
        },
        //!chef At Home
        {
          type: 'object',
          widget: 'mini-form',
          key: 'chefAtHome',
          dependencyType: 'value-includes',
          dependencyValue: 'chef_at_home',
          label: 'Chef em Casa',
          questions: [
            {
              key: 'chefAtHomeFoodType',
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
                {
                  label: 'Finger food (salgados, quiches, folhados, etc.)',
                  value: 5,
                  isSelected: false
                },
                { label: 'Outro', value: 6, isSelected: false }
              ],
              children: [
                {
                  key: 'chefAtHomeFoodTypeOther',
                  label: 'Outro',
                  dependencyType: 'value',
                  dependencyValue: 6,
                  type: 'text'
                }
              ]
            },
            {
              key: 'chefAtHomeNumberOfPersons',
              type: 'checkbox-group',
              label: 'Sente-se confortável cozinhar para quantas pessoas?',
              options: [
                { label: 'Até 8 pessoas', value: 0, isSelected: false },
                { label: 'Até 12 pessoas', value: 1, isSelected: false },
                {
                  label: 'Até 20 pessoas (com ajuda)',
                  value: 2,
                  isSelected: false
                },
                {
                  label: 'Mais de 20 pessoas (com ajuda)',
                  value: 3,
                  isSelected: false
                }
              ]
            }
          ]
        },
        //!Petcare
        {
          type: 'object',
          key: 'petcare',
          widget: 'mini-form',
          dependencyType: 'value-includes',
          dependencyValue: 'petcare',
          label: 'Petcare',
          questions: [
            {
              key: 'petcareAnimalType',
              title: 'Pet Care (Visitas e Passeios)',
              type: 'checkbox-group',
              label: 'Qual é o tipo de animal que pode cuidar?',
              options: [
                { label: 'Cão', value: 0, isSelected: false },
                { label: 'Gato', value: 1, isSelected: false },
                { label: 'Peixe', value: 2, isSelected: false },
                { label: 'Pequeno Roedor', value: 3, isSelected: false },
                { label: 'Réptil', value: 4, isSelected: false },
                {
                  label: 'Outro',
                  value: 5,
                  isSelected: false
                }
              ],
              children: [
                {
                  key: 'petcareAnimalTypeOther',
                  label: 'Outro',
                  dependencyType: 'value',
                  dependencyValue: 5,
                  type: 'text'
                },
                {
                  type: 'footnote',
                  label: '',
                  dependencyType: 'value',
                  dependencyValue: 5
                },
                {
                  key: 'petcareAnimalSize',
                  label: 'Qual o porte do cão que pode cuidar?',
                  type: 'checkbox-group',
                  dependencyType: 'value',
                  dependencyValue: 0,
                  options: [
                    { label: 'Pequeno', value: 0, isSelected: false },
                    { label: 'Médio', value: 1, isSelected: false },
                    { label: 'Grande', value: 2, isSelected: false }
                  ]
                }
              ]
            }
          ]
        },
        //! Petsitting
        {
          type: 'object',
          key: 'petsitting',
          widget: 'mini-form',
          dependencyType: 'value-includes',
          dependencyValue: 'petsitting',
          label: 'Pet Sitting (Estadia)',
          questions: [
            {
              key: 'petsittingExteriorSpace',
              title: 'Petsitting (Estadia)',
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
                { label: 'Cão', value: 0, isSelected: false },
                { label: 'Gato', value: 1, isSelected: false },
                { label: 'Peixe', value: 2, isSelected: false },
                { label: 'Pequeno Roedor', value: 3, isSelected: false },
                { label: 'Réptil', value: 4, isSelected: false },
                {
                  label: 'Outro',
                  value: 5,
                  isSelected: false
                }
              ],
              children: [
                {
                  key: 'petsittingAnimalAnimalTypeOther',
                  label: 'Outro',
                  dependencyType: 'value',
                  dependencyValue: 5,
                  type: 'text',
                  excludeFromGroup: true
                },
                {
                  type: 'footnote',
                  label: '',
                  dependencyType: 'value',
                  dependencyValue: 5
                },
                {
                  key: 'petsittingAnimalAnimalSize',
                  label: 'Qual o porte do cão que pode cuidar?',
                  type: 'checkbox-group',
                  dependencyType: 'value',
                  dependencyValue: 0,
                  options: [
                    { label: 'Pequeno', value: 0, isSelected: false },
                    { label: 'Médio', value: 1, isSelected: false },
                    { label: 'Grande', value: 2, isSelected: false }
                  ]
                }
              ]
            }
          ]
        },

        //! Gardening
        {
          type: 'object',
          widget: 'mini-form',
          dependencyType: 'value-includes',
          dependencyValue: 'gardening',
          label: 'gardening',
          key: 'gardening',
          questions: [
            {
              key: 'gardeningType',
              title: 'Jardinagem',
              type: 'checkbox-group',
              label: 'Este serviço tem várias tipologias, quais pode fazer?',
              options: [
                {
                  label: 'Manutenção e conservação de jardins',
                  value: 0,
                  isSelected: false
                },
                {
                  label: 'Pequenos trabalhos (rega, poda, limpeza)',
                  value: 1,
                  isSelected: false
                },
                {
                  label:
                    'Trabalhos especializados (plantação, fertilização, aconselhamento, etc.)',
                  value: 2,
                  isSelected: false
                },
                {
                  label:
                    'Criação de novos jardins, varandas ou terraços (matéria-prima não incluída)',
                  value: 3,
                  isSelected: false
                },
                { label: 'Consultoria', value: 4, isSelected: false },
                { label: 'Outro', value: 5, isSelected: false }
              ],
              children: [
                {
                  key: 'gardeningTypeOther',
                  label: 'Outros',
                  dependencyType: 'value',
                  dependencyValue: 5,
                  type: 'text'
                }
              ]
            },
            {
              key: 'gardeningTools',
              label:
                'Tem as ferramentas necessárias para realizar este serviço?',
              type: 'radio',
              isVerticalAligned: true,
              options: [
                { label: 'Sim', value: 1 },
                { label: 'Não', value: 0 }
              ]
            }
          ]
        },
        //! BabySitting
        {
          type: 'object',
          widget: 'mini-form',
          dependencyType: 'value-includes',
          key: 'babysitting',
          dependencyValue: 'babysitting',
          label: 'Apoio Familiar a crianças',
          questions: [
            {
              key: 'babysittingChildrenNumber',
              title: 'Apoio Familiar a crianças',
              type: 'checkbox-group',
              label: 'Quantas crianças pode acompanhar ao mesmo tempo?',
              options: [
                { label: 'Apenas 1', value: 0, isSelected: false },
                { label: 'Mais do que 1', value: 1, isSelected: false }
              ]
            },
            {
              key: 'babysittingChildAge',
              type: 'checkbox-group',
              label:
                'Prefere realizar este serviço para crianças com que idade?',
              options: [
                { label: 'Dos 3 meses até 1 ano', value: 0, isSelected: false },
                {
                  label: 'De 1 ano até os 2 anos',
                  value: 1,
                  isSelected: false
                },
                {
                  label: 'Dos 2 anos até os 10 anos',
                  value: 2,
                  isSelected: false
                },
                { label: 'Maiores de 10 anos', value: 3, isSelected: false }
              ]
            },
            {
              key: 'babysittingServiceToDo',
              type: 'checkbox-group',
              label: 'Que tipos de serviço gostaria de fazer?',
              options: [
                {
                  label: 'Companhia ao domicílio',
                  value: 0,
                  isSelected: false
                },
                {
                  label: 'Acompanhamento em rotinas diárias',
                  value: 1,
                  isSelected: false
                },
                {
                  label: 'Apoio nos trabalhos de casa',
                  value: 2,
                  isSelected: false
                },
                {
                  label:
                    'Deslocações a pé ou de carro (escola, ATL, atividades extracurriculares, etc.)',
                  value: 3,
                  isSelected: false
                },
                {
                  label: 'Outro',
                  value: 4,
                  isSelected: false
                }
              ],
              children: [
                {
                  key: 'babysittingServiceToDoOther',
                  label: 'Outro',
                  type: 'text',
                  dependencyType: 'value',
                  dependencyValue: 4
                }
              ]
            },
            {
              type: 'footnote',
              label:
                'Se o serviço requerer a utilização da viatura própria, serão pagos os km.'
            },
            {
              type: 'footnote',
              label:
                'Informamos que por lei, todas as pessoas que trabalhem com crianças deverão proceder à entrega do Registo Criminal atualizado.'
            },
            {
              key: 'files',
              label:
                'Por favor, partilhe connosco se possível os seus documentos',
              widget: 'file-uploader'
            }
          ]
        },
        //! Repairs
        {
          type: 'object',
          widget: 'mini-form',
          dependencyType: 'value-includes',
          dependencyValue: 'repairs',
          label: 'Reparações',
          key: 'repairs',
          questions: [
            {
              key: 'repairsType',
              title: 'Reparações',
              type: 'checkbox-group',
              label: 'Este serviço tem várias tipologias, quais pode fazer?',
              options: [
                {
                  label:
                    'Bricolage (furos, pinturas, pequenas reparações, etc.)',
                  value: 0,
                  isSelected: false
                },
                { label: 'Canalizações', value: 1, isSelected: false },
                { label: 'Eletricidade', value: 2, isSelected: false },
                { label: 'Outro', value: 3, isSelected: false }
              ],
              children: [
                /* {
                  label: '',
                  dependencyType: 'value',
                  dependencyValue: 3,
                  type: 'footnote'
                }, */
                {
                  key: 'repairsTypeOther',
                  label: 'Outro',
                  dependencyType: 'value',
                  dependencyValue: 3,
                  type: 'text'
                },
                {
                  key: 'repairsSubTypeBricolage',
                  label: 'Que subtipo de reparações de Bricolage quer fazer?',
                  type: 'checkbox-group',
                  excludeFromGroup: true,
                  dependencyType: 'value',
                  dependencyValue: 0,
                  options: [
                    {
                      label: 'Montagem de Móveis e Estantes',
                      value: 0,
                      isSelected: false
                    },
                    {
                      label: 'Instalação de Calhas e Cortinados',
                      value: 1,
                      isSelected: false
                    },
                    {
                      label:
                        'Instalação de Objetos na Parede (ex.: quadros, espelhos, etc.). Limitado ao peso/dimensão (incluem-se obras de arte)',
                      value: 2,
                      isSelected: false
                    },
                    {
                      label:
                        'Reparação / Substituição de Dobradiças, Portas e Janelas (excluem-se portas blindadas)',
                      value: 3,
                      isSelected: false
                    },
                    {
                      label:
                        'Reparação /Substituição de Fechaduras e Puxadores',
                      value: 4,
                      isSelected: false
                    },
                    {
                      label: 'Reparação / Substituição de Vidros',
                      value: 5,
                      isSelected: false
                    },
                    {
                      label: 'Preparação de Paredes para Pintura',
                      value: 6,
                      isSelected: false
                    },
                    {
                      label: 'Serviços de Pintura',
                      value: 7,
                      isSelected: false
                    },
                    {
                      label: 'Colocação Silicone',
                      value: 8,
                      isSelected: false
                    },
                    {
                      label: 'Colocação Toalheiros',
                      value: 9,
                      isSelected: false
                    },
                    {
                      label:
                        'Reparação de Estores (afinação de estores e substituição de réguas)',
                      value: 10,
                      isSelected: false
                    },
                    {
                      label: 'Reparação de Estendais',
                      value: 11,
                      isSelected: false
                    },
                    {
                      label: 'Colocação de Varões de Cortinados',
                      value: 12,
                      isSelected: false
                    },
                    {
                      label: 'Colocação de Candeeiros',
                      value: 13,
                      isSelected: false
                    },
                    {
                      label: 'Colocação de Maçanetas e Puxadores',
                      value: 14,
                      isSelected: false
                    },
                    {
                      label: 'Abertura de Fechaduras',
                      value: 15,
                      isSelected: false
                    },
                    { label: 'Outro', value: 16, isSelected: false }
                  ],
                  children: [
                    /* {
                      label: '',
                      dependencyType: 'value',
                      dependencyValue: 16,
                      type: 'footnote'
                    }, */
                    {
                      key: 'repairsSubTypeBricolageOther',
                      label: 'Outro',
                      dependencyType: 'value',
                      dependencyValue: 16,
                      type: 'text'
                    }
                  ]
                },
                {
                  key: 'repairsSubTypePluming',
                  label: 'Que subtipo de reparações de Canalização quer fazer?',
                  type: 'checkbox-group',
                  excludeFromGroup: true,
                  dependencyType: 'value',
                  dependencyValue: 1,
                  options: [
                    {
                      label: 'Desentupimento de Canalizações',
                      value: 0,
                      isSelected: false
                    },
                    {
                      label: 'Descalcificação de Tubagens',
                      value: 1,
                      isSelected: false
                    },
                    {
                      label: 'Limpeza de Canalizações',
                      value: 2,
                      isSelected: false
                    },
                    {
                      label: 'Reparação / Substituição de Torneiras',
                      value: 3,
                      isSelected: false
                    },
                    {
                      label: 'Reparação / Substituição de Louças Sanitárias',
                      value: 4,
                      isSelected: false
                    },
                    {
                      label: 'Reparação / Substituição de Autoclismos',
                      value: 5,
                      isSelected: false
                    },

                    {
                      label: 'Colocação de Chuveiros',
                      value: 6,
                      isSelected: false
                    },
                    {
                      label: 'Reparação de Fugas de Água',
                      value: 7,
                      isSelected: false
                    },
                    { label: 'Outro', value: 8, isSelected: false }
                  ],
                  children: [
                    /* {
                      label: '',
                      dependencyType: 'value',
                      dependencyValue: 8,
                      type: 'footnote'
                    }, */
                    {
                      key: 'repairsSubTypeElectricityOther',
                      label: 'Outro',
                      dependencyType: 'value',
                      dependencyValue: 8,
                      type: 'text'
                    }
                  ]
                },
                {
                  key: 'repairsSubTypeElectricity',
                  label:
                    'Que subtipo de reparações de Eletricidade quer fazer?',
                  type: 'checkbox-group',
                  excludeFromGroup: true,
                  dependencyType: 'value',
                  dependencyValue: 2,
                  options: [
                    {
                      label: 'Montagem de Interruptores e Tomadas Elétricas',
                      value: 0,
                      isSelected: false
                    },
                    {
                      label: 'Montagem de Candeeiros',
                      value: 1,
                      isSelected: false
                    },
                    {
                      label: 'Reparação de Estores Elétricos',
                      value: 2,
                      isSelected: false
                    },
                    {
                      label:
                        'Instalação de Calhas para a passagem de Cabos Elétricos',
                      value: 0,
                      isSelected: false
                    },
                    {
                      label: 'Colocação de Lâmpadas',
                      value: 3,
                      isSelected: false
                    },
                    {
                      label:
                        'Montagem e Reparação de Termoacumulador e Esquentador',
                      value: 0,
                      isSelected: false
                    },
                    {
                      label: 'Revisões e Reparações de Quadros Elétricos',
                      value: 4,
                      isSelected: false
                    },
                    { label: 'Outro', value: 5, isSelected: false }
                  ],
                  children: [
                    /* {
                      label: '',
                      dependencyType: 'value',
                      dependencyValue: 5,
                      type: 'footnote'
                    }, */
                    {
                      key: 'repairsSubTypeElectricityOther',
                      label: 'Outro',
                      dependencyType: 'value',
                      dependencyValue: 5,
                      type: 'text'
                    }
                  ]
                }
              ]
            },
            {
              key: 'repairsTools',
              label:
                'Tem as ferramentas necessárias para realizar este(s) serviço(s)?',
              type: 'radio',
              isVerticalAligned: true,
              options: [
                { label: 'Sim', value: 1 },
                { label: 'Não', value: 0 }
              ]
            }
          ]
        },
        //! ironing
        {
          type: 'object',
          widget: 'mini-form',
          dependencyType: 'value-includes',
          dependencyValue: 'ironing',
          label: 'Reparações',
          key: 'repairs',
          questions: [
            {
              key: 'ironingClothType',
              type: 'radio',
              label:
                'Qual é o tipo (ou tipos) de roupa que sabe passar a ferro?',
              options: [
                { label: 'Camisas', value: 1, isSelected: false },
                {
                  label: 'Roupa de bebé / criança',
                  value: 2,
                  isSelected: false
                },
                {
                  label: 'Atoalhados e roupa de cama',
                  value: 3,
                  isSelected: false
                },
                { label: 'Tecidos delicados', value: 4, isSelected: false },
                { label: 'Restantes', value: 5, isSelected: false },
                { label: 'Outro', value: 6, isSelected: false }
              ],
              children: [
                {
                  key: 'ironingClothTypeOther',
                  type: 'text',
                  label: 'Outro',
                  dependencyType: 'value',
                  dependencyValue: 6
                }
              ]
            },
            {
              key: 'ironingCar',
              type: 'radio',
              label: 'Tem disponibilidade para recolher e entregar a roupa?',
              options: [
                { label: 'Sim', value: 0 },
                { label: 'Não', value: 0 }
              ]
            },
            {
              type: 'footnote',
              label:
                'Se o serviço requerer a utilização da viatura própria, serão pagos os km,'
            }
          ]
        },
        // !sewing
        {
          type: 'object',
          widget: 'mini-form',
          dependencyType: 'value-includes',
          dependencyValue: 'sewing',
          label: 'Costura',
          key: 'sewing',
          questions: [
            {
              key: 'sewingType',
              type: 'radio',
              label: 'Qual é o tipo de costura que pode fazer?',
              options: [
                { label: 'Bainhas à mão', value: 0, isSelected: false },
                { label: 'Bainhas à máquina', value: 1, isSelected: false },
                { label: 'Peças feitas de raiz', value: 2, isSelected: false },
                {
                  label: 'Diminuir o tamanho de uma peça.',
                  value: 3,
                  isSelected: false
                },
                {
                  label: 'Ajuste de uma peça ao corpo.',
                  value: 4,
                  isSelected: false
                },
                { label: 'Remendos', value: 5, isSelected: false },
                { label: 'Pregar botões', value: 6, isSelected: false },
                { label: 'Bainhas de cortinados', value: 7, isSelected: false },
                {
                  label: 'Aplicações (emblemas e bordados simples)',
                  value: 8,
                  isSelected: false
                },
                { label: 'Outro', value: 9, isSelected: false }
              ],
              children: [
                {
                  key: 'sewingTypeOther',
                  type: 'text',
                  label: 'Outro',
                  dependencyType: 'value',
                  dependencyValue: 9
                }
              ]
            },
            {
              key: 'sewingBasicMaterial',
              type: 'radio',
              label: 'Dispõe de material básico de costura (agulhas e linhas)?',
              options: [
                { label: 'Sim', value: 0 },
                { label: 'Não', value: 0 }
              ]
            },
            {
              key: 'sewingCar',
              type: 'radio',
              label: 'Tem disponibilidade para recolher e entregar a roupa?',
              options: [
                { label: 'Sim', value: 0 },
                { label: 'Não', value: 0 }
              ]
            },
            {
              type: 'footnote',
              label:
                'Se o serviço requerer a utilização da viatura própria, serão pagos os km,'
            }
          ]
        },
        //! cleaning
        {
          type: 'object',
          widget: 'mini-form',
          dependencyType: 'value-includes',
          dependencyValue: 'cleaning',
          label: 'Limpezas',
          key: 'cleaning',
          questions: [
            {
              key: 'cleaningType',
              type: 'radio',
              label: 'Qual é o tipo (ou tipos) de limpeza que quer fazer?',
              options: [
                {
                  label: 'Limpeza profunda casa privada',
                  value: 0,
                  isSelected: false
                },
                {
                  label: 'Limpeza profunda escritório',
                  value: 1,
                  isSelected: false
                },
                {
                  label: 'Limpeza geral casa privada',
                  value: 2,
                  isSelected: false
                },
                {
                  label: 'Limpeza geral escritório',
                  value: 3,
                  isSelected: false
                },
                { label: 'Vidros', value: 4, isSelected: false },
                {
                  label: 'Limpeza superfícies altas',
                  value: 5,
                  isSelected: false
                },
                {
                  label: 'Outro (deve de aparecer um campo de texto livre)',
                  value: 6,
                  isSelected: false
                }
              ],
              children: [
                {
                  key: 'cleaningTypeOther',
                  type: 'text',
                  label: 'Outro',
                  dependencyType: 'value',
                  dependencyValue: 6
                }
              ]
            }
          ]
        },
        // !language_lessons
        {
          type: 'object',
          key: 'language_lessons',
          widget: 'mini-form',
          dependencyType: 'value-includes',
          dependencyValue: 'language_lessons',
          label: 'Aulas de Música',
          questions: [
            {
              key: 'instruments',
              title: 'Aulas de Música',
              type: 'checkbox-group',
              label: 'Qual a língua (ou línguas) que pode ensinar?',
              options: [
                { label: 'Inglês', value: 0, isSelected: false },
                {
                  label: 'Francês',
                  value: 1,
                  isSelected: false
                },
                { label: 'Espanhol', value: 2, isSelected: false },
                { label: 'Outro', value: 3, isSelected: false }
              ],
              children: [
                {
                  key: 'languageLessonsOtherLanguage',
                  label: 'Outros',
                  dependencyType: 'value',
                  dependencyValue: 3,
                  type: 'text'
                }
              ]
            },
            {
              key: 'languageLessonsLevel',
              type: 'checkbox-group',
              label:
                'Qual o nível de ensino da(s) língua(s) que pode realizar?',
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
              key: 'languageLessonsPlace',
              type: 'checkbox-group',
              label: 'Qual o local onde poderá realizar-se a aula?',
              options: [
                { label: 'Na minha casa', value: 0, isSelected: false },
                {
                  label: 'Na casa do Cliente',

                  value: 1,
                  isSelected: false
                },
                { label: 'Outro Espaço', value: 2, isSelected: false }
              ],
              children: [
                {
                  key: 'languageLessonsOtherPlace',
                  label: 'Outro Espaço',
                  dependencyType: 'value',
                  dependencyValue: 2,
                  type: 'text'
                }
              ]
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
      key: 'known55',
      label: 'Como soube da 55+',
      type: 'text-area'
    },
    {
      key: 'mainMotivation',
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
  'Contactos',
  'Morada',
  'Situação Profissional e Experiência',
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
