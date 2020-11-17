export default {
  single: [
    {
      key: 'offer-type',
      label: ' ',
      type: 'radio',
      options: [
        {
          key: 'single',
          label: 'Simples',
          value: 0
        },
        {
          key: 'hour-package',
          label: 'Pacote de Horas',
          value: 1
        }
      ],
      children: [
        {
          key: 'number-of-hours',
          type: 'dropdown',
          dependencyType: 'value',
          dependencyValue: 0,
          label: 'Número de Horas',
          options: [{ label: '10', value: 0 }]
        },
        {
          key: 'start-date',
          type: 'date',
          dependencyType: 'value',
          dependencyValue: 0,
          label: 'Data de Início'
        },

        {
          key: 'number-of-hours',
          type: 'dropdown',
          dependencyType: 'value',
          dependencyValue: 1,
          label: 'Número de Horas',
          options: [{ label: '10', value: 0 }],
          children: [{ key }]
        },
        {
          key: 'start-date',
          type: 'date',
          dependencyType: 'value',
          dependencyValue: 1,
          label: 'Data de Início'
        },
        {
          key: 'daily-repetition',
          type: 'dropdown',
          dependencyType: 'value',
          dependencyValue: 1,
          label: 'Repetição',
          options: [
            { label: 'Diariamente', value: 0 },
            { label: 'Semanalmente', value: 1 }
          ]
        },
        {
          key: 'daily-frequency',
          type: 'dropdown',
          dependencyType: 'value',
          dependencyValue: 1,
          label: 'Frequência',
          options: [
            { label: '1 Dia', value: 0 },
            { label: '2 Dias', value: 1 },
            { label: '3 Dias', value: 2 },
            { label: '4 Dias', value: 3 },
            { label: '5 Dias', value: 4 },
            { label: '6 Dias', value: 5 },
            { label: '7 Dias', value: 6 }
          ]
        },

        {
          key: 'week-select',
          label: ' ',
          type: 'button-group',
          dependencyType: 'value',
          dependencyValue: 1,
          options: [
            { value: 0, label: 'S', isSelected: true },
            { value: 1, label: 'T', isSelected: true },
            { value: 2, label: 'Q', isSelected: true },
            { value: 3, label: 'Q', isSelected: true },
            { value: 4, label: 'S', isSelected: true },
            { value: 5, label: 'S', isSelected: true },
            { value: 6, label: 'D', isSelected: false }
          ]
        },
        {
          key: 'start-hour',
          type: 'mini-dropdown',
          options: [
            { label: '09:00', value: '09:00' },
            { label: '09:30', value: '09:30' },
            { label: '10:00', value: '10:00' },
            { label: '10:30', value: '10:30' },
            { label: '11:00', value: '11:00' },
            { label: '11:30', value: '11:30' },
            { label: '12:00', value: '12:00' },
            { label: '12:30', value: '12:30' },
            { label: '13:00', value: '13:00' },
            { label: '13:30', value: '13:30' },
            { label: '14:00', value: '14:00' },
            { label: '14:30', value: '14:30' },
            { label: '15:00', value: '15:00' },
            { label: '15:30', value: '15:30' },
            { label: '16:00', value: '16:00' },
            { label: '16:30', value: '16:30' },
            { label: '17:00', value: '17:00' },
            { label: '17:30', value: '17:30' },
            { label: '18:00', value: '18:00' }
          ],
          label: 'Preferência Horária',
          dependencyType: 'value',
          dependencyValue: 1
        },
        {
          key: 'ending-hour',
          label: 'Hora de Fim',
          dependencyType: 'value',
          dependencyValue: 1,
          type: 'mini-dropdown',
          options: [
            { label: '09:00', value: '09:00' },
            { label: '09:30', value: '09:30' },
            { label: '10:00', value: '10:00' },
            { label: '10:30', value: '10:30' },
            { label: '11:00', value: '11:00' },
            { label: '11:30', value: '11:30' },
            { label: '12:00', value: '12:00' },
            { label: '12:30', value: '12:30' },
            { label: '13:00', value: '13:00' },
            { label: '13:30', value: '13:30' },
            { label: '14:00', value: '14:00' },
            { label: '14:30', value: '14:30' },
            { label: '15:00', value: '15:00' },
            { label: '15:30', value: '15:30' },
            { label: '16:00', value: '16:00' },
            { label: '16:30', value: '16:30' },
            { label: '17:00', value: '17:00' },
            { label: '17:30', value: '17:30' },
            { label: '18:00', value: '18:00' }
          ]
        }
      ]
    }
  ]
};
