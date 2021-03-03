const stepOne = () => {
  return [
    { key: 'name', type: 'text', required: true, label: 'Nome' },
    { key: 'lastName', type: 'text', required: true, label: 'Apelido' }
  ];
};

const stepTwo = () => {
  return [];
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

const stepFour = () => {
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
    key: `become-form-${stepIndex}`,
    groupBy: 2,
    label: STEP_LABELS[stepIndex],
    questions: step
  }))
};

export default formSteps;
