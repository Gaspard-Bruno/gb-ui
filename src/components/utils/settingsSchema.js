const stepOne = () => {
  return [
    { key: 'name', type: 'text', label: 'Nome' },
    { key: 'lastName', type: 'text', label: 'Apelido' },
    { key: 'email', type: 'text', label: 'Email', widget: 'email' },
    { key: 'password', type: 'text', label: 'Password', widget: 'password' }
  ];
};

const stepTwo = () => {
  return [
    {
      key: 'email',
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
      type: 'text',
      label: 'Password Antiga',
      widget: 'password'
    },
    { key: 'space', widget: 'space' },
    {
      key: 'new-password',
      type: 'text',
      label: 'Password Nova',
      widget: 'password'
    },
    {
      key: 'new-password-repeat',
      type: 'text',
      label: 'Repetir Password Nova',
      widget: 'password'
    }
  ];
};

const stepThree = () => {
  return [
    {
      key: 'known55',
      label: 'Como soube da 55+',
      required: true,
      type: 'text-area'
    },
    {
      key: 'mainMotivation',
      label:
        'Porque quer fazer parte da 55+? Qual é a sua principal motivação?',
      required: true,
      type: 'text-area'
    },
    {
      key: 'otherInfo',
      label: 'Outras Informações',
      type: 'text-area'
    }
  ];
};

const steps = [stepOne(), stepTwo(), stepThree()];

const STEP_LABELS = ['Dados Pessoais', 'Dados de Acesso', 'Notificações'];
const formSteps = {
  type: 'form',
  questions: steps.map((step, stepIndex) => ({
    type: 'object',
    submit: true,
    submitLabel: 'Actualizar',
    key: `settings-form-${stepIndex}`,
    label: STEP_LABELS[stepIndex],
    questions: step
  }))
};

export default formSteps;
