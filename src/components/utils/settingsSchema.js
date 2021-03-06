const stepOne = () => {
  return [
    { key: 'firstName', type: 'text', label: 'Nome' },
    { key: 'lastName', type: 'text', label: 'Apelido' },
    {
      key: 'email',
      type: 'text',
      label: 'Email',
      widget: 'email',
      disabled: true
    },
    {
      key: 'password',
      type: 'text',
      label: 'Password',
      widget: 'password',
      defaultValue: 'password',
      disabled: true
    }
  ];
};

const stepTwo = () => {
  return [
    {
      key: 'email-check',
      type: 'text',
      label: 'Endereço de Email',
      widget: 'email '
    },
    { key: 'space', widget: 'space' },
    {
      key: 'new-email',
      type: 'text',
      label: 'Novo Endereço de Email',
      widget: 'email'
    },
    {
      key: 'new-email-repeat',
      type: 'text',
      label: 'Repetir Endereço de Email',
      widget: 'email'
    },
    { key: 'space', widget: 'space', submit: true, submitLabel: 'Actualizar' },
    { type: 'footnote', label: 'Alteração de Password' },
    {
      key: 'password',
      type: 'password',
      label: 'Password Antiga',
      widget: 'password'
    },
    { key: 'space', widget: 'space' },
    {
      key: 'new-password',
      type: 'password',
      label: 'Password Nova',
      widget: 'password'
    },
    {
      key: 'new-password-repeat',
      type: 'password',
      label: 'Repetir Password Nova',
      widget: 'password'
    }
  ];
};

const steps = [
  stepOne(),
  stepTwo()
  // ! Uncoment when email notifications go live
  //stepThree()
];

const STEP_LABELS = ['Dados Pessoais', 'Dados de Acesso', 'Notificações'];
const formSteps = {
  type: 'form',
  questions: steps.map((step, stepIndex) => ({
    type: 'object',
    submit: true,
    closeOthers: true,
    submitLabel: 'Actualizar',
    key: `settings-form-${stepIndex}`,
    label: STEP_LABELS[stepIndex],
    questions: step
  }))
};

export default formSteps;
