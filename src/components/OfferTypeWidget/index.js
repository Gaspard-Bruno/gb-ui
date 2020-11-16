import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Heading, SmallBody, Body } from '../Text';
import { Row } from '../Layout';
import { WidgetContainer } from './styles';
import RadioButton from '../RadioButton';
import TextInput from '../TextInput';
import Select from '../Select';
import ButtonGroup from '../ButtonGroup';

const OfferTypeWidget = ({ action, offerType, values }) => {
  const renderContent = () => {
    const serviceOptions = {
      // ready-pack && hour-pack
      default: [
        { label: 'Única', value: 0 },
        { label: 'Recorrente', value: 1 },
        { label: 'Pacote de Horas', value: 2 }
      ],
      // one-time-service
      unique: [{ label: 'Única', value: 0 }],
      // ready-pack-specific
      readyPackSpecific: {
        parentOptions: [
          { label: 'Única', value: 0 },
          { label: 'Pacote de Horas', value: 2 }
        ],
        hourPackageOptions: [
          { label: 'Fim-de-Semana - 25€', value: 2 },
          { label: '7 Dias - 84€', value: 3 }
        ]
      }
    };
    switch (offerType) {
      case 'ready-pack':
      case 'hour-pack':
        return renderReadyPack(serviceOptions.default);
      case 'one-time-service':
        return renderReadyPack(serviceOptions.unique);
      case 'one-time-service-specific':
        return renderOneTimeSpecific(serviceOptions.unique);
      case 'hour-pack-specific': //WeekEnds
        return renderReadyPack(
          serviceOptions.readyPackSpecific.parentOptions,
          serviceOptions.readyPackSpecific.hourPackageOptions
        );
      default:
        return null;
    }
  };

  const selectedRecurrency = useMemo(() => {
    const status = {
      pickedRecurrency: '',
      total: 'xxx total xxx'
    };

    if (values['recurrence'] === 0) {
      status.pickedRecurrency = 'Dia';
    }
    if (values['recurrence'] === 1) {
      status.pickedRecurrency = 'Semana';
    }
    if (values['recurrence'] === 2) {
      status.pickedRecurrency = 'Mês';
    }
    return status;
  }, [values]);

  const renderOneTimeSpecific = serviceOptions => {
    return (
      <>
        <RadioButton name='offer-type' action={action} list={serviceOptions} />
        <>
          <Heading size={6}>Data e Hora do Serviço</Heading>
        </>
        <Row>
          <TextInput
            label='Data'
            name='service-date'
            type='date'
            onChange={values => action({ name: 'service-date', value: values })}
          />
          <Body> - </Body>
          <Select
            label='Hora'
            name='preferred-hours'
            options={[
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
            ]}
            onChange={values =>
              action({ name: 'preferred-hours-end', value: values.value })
            }
          />
        </Row>
      </>
    );
  };

  const renderReadyPack = (serviceOptions, serviceTypeOpt) => {
    return (
      <>
        <RadioButton name='offer-type' action={action} list={serviceOptions} />
        {/*Unique type */}
        {values['offer-type'] === 0 && (
          <>
            <Heading size={6}>Data e Hora Preferencial</Heading>
            <TextInput
              label='Data'
              name='service-date'
              type='date'
              onChange={values =>
                action({ name: 'service-date', value: values })
              }
            />
            {
              <Row>
                <Select
                  label='Preferência Horária'
                  name='preferred-hours-start'
                  options={[
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
                  ]}
                  onChange={values =>
                    action({
                      name: 'preferred-hours-start',
                      value: values.value
                    })
                  }
                />
                <Body> - </Body>
                <Select
                  label=''
                  name='preferred-hours-end'
                  options={[
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
                  ]}
                  onChange={values =>
                    action({ name: 'preferred-hours-end', value: values.value })
                  }
                />
              </Row>
            }
          </>
        )}
        {/*Recurring type */}
        {values['offer-type'] === 1 && (
          <>
            <Select
              label='Número de Horas'
              name='number-of-hours'
              options={[
                { label: '1', value: 1 },
                { label: '2', value: 2 },
                { label: '3', value: 3 },
                { label: '4', value: 4 },
                { label: '5', value: 5 },
                { label: '6', value: 6 },
                { label: '7', value: 7 },
                { label: '8', value: 8 },
                { label: '9', value: 9 },
                { label: '10', value: 10 }
              ]}
              onChange={values =>
                action({ name: 'number-of-hours', value: values.value })
              }
            />
            <Body>
              Poderá alterar a recorrência e reagendar para mais tarde através
              da Equipa da 55+.
            </Body>
            <Select
              label='Recorrência'
              name='recurrence'
              onChange={values =>
                action({ name: 'recurrence', value: values.value })
              }
              options={[
                { label: 'Diaria', value: 0 },
                { label: 'Semanal', value: 1 },
                { label: 'Mensal', value: 2 }
              ]}
            />
            <Row>
              <Select
                label='Repetição a cada'
                options={[
                  { label: '1', value: 1 },
                  { label: '2', value: 2 },
                  { label: '3', value: 3 },
                  { label: '4', value: 4 },
                  { label: '5', value: 5 },
                  { label: '6', value: 6 },
                  { label: '7', value: 7 }
                ]}
                onChange={values =>
                  action({ name: 'repetition', value: values.value })
                }
              />
              <Body>{selectedRecurrency?.pickedRecurrency}</Body>
              {/* Weekly option - day-selection */}
              <Row>
                {values['recurrence'] === 1 && (
                  <ButtonGroup
                    name='week-select'
                    list={[
                      { value: 0, label: 'S' },
                      { value: 1, label: 'T' },
                      { value: 2, label: 'Q' },
                      { value: 3, label: 'Q' },
                      { value: 4, label: 'S' },
                      { value: 5, label: 'S' },
                      { value: 6, label: 'D' }
                    ]}
                    action={values => action('week-select', values.value)}
                  />
                )}
                {/* Montly option - week-selection */}
                {values['recurrence'] === 2 && (
                  <>
                    <Select
                      label='Ocorre em'
                      options={[
                        { value: 0, label: 'Primeira' },
                        { value: 1, label: 'Segunda' },
                        { value: 1, label: 'Terceira' },
                        { value: 1, label: 'Quarta' },
                        { value: 1, label: 'Última' }
                      ]}
                      onChange={values =>
                        action({
                          name: 'montly-recurrence-daily-recurrency',
                          value: values.value
                        })
                      }
                    />
                    <Body>-</Body>
                    <Select
                      options={[
                        { value: 1, label: 'Segunda-Feira' },
                        { value: 2, label: 'Terça-Feira' },
                        { value: 3, label: 'Quarta-Feira' },
                        { value: 4, label: 'Quinta-Feira' },
                        { value: 5, label: 'Sexta-Feira' },
                        { value: 6, label: 'Sabádo' },
                        { value: 0, label: 'Domingo' }
                      ]}
                      onChange={values =>
                        action({
                          name: 'montly-recurrence-weekday',
                          value: values.value
                        })
                      }
                    />
                    <Body>do Mês</Body>
                  </>
                )}
              </Row>
            </Row>
            {/*Montly type */}
            <TextInput
              label='Data de Início'
              name='service-start-date'
              type='date'
              onChange={values =>
                action({ name: 'service-start-date', value: values })
              }
            />
            <TextInput
              label='Data de Fim'
              name='service-end-date'
              type='date'
              onChange={values =>
                action({ name: 'service-end-date', value: values })
              }
            />
            <Row>
              <Select
                label='Preferência Horária'
                name='preferred-hours-start'
                options={[
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
                ]}
                onChange={values =>
                  action({ name: 'preferred-hours-start', value: values.value })
                }
              />
              <Body> - </Body>
              <Select
                label=''
                name='preferred-hours-end'
                options={[
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
                ]}
                onChange={values =>
                  action({ name: 'preferred-hours-end', value: values.value })
                }
              />
            </Row>
          </>
        )}
        {/* Hour Package */}
        {values['offer-type'] === 2 && (
          <>
            <Select
              label='Escolha o Pack'
              name='pack-selection'
              options={
                serviceTypeOpt
                  ? serviceTypeOpt
                  : [
                      { label: '8 Aulas - 70€', value: 0 },
                      { label: '10 horas - 75€', value: 1 },
                      { label: 'Fim-de-Semana - 25€', value: 2 },
                      { label: '7 Dias - 84€', value: 3 }
                    ]
              }
              onChange={values =>
                action({
                  name: 'pack-selection',
                  value: values.value
                })
              }
            />
            <SmallBody>*não inclui a taxa de IVA em vigor</SmallBody>
            {/* exclusive !weekends and !sevenDays */}
            {values['pack-selection'] === 0 ||
            values['pack-selection'] === 1 ? (
              <>
                <Body>
                  Poderá alterar a recorrência e reagendar para mais tarde
                  através da Equipa da 55+.
                </Body>
                <Select
                  label='Recorrência'
                  name='recurrence'
                  onChange={values =>
                    action({ name: 'recurrence', value: values.value })
                  }
                  options={[
                    { label: 'Diariamente', value: 0 },
                    { label: 'Semanalmente', value: 1 },
                    { label: 'Mensalmente', value: 2 }
                  ]}
                />
                <Row>
                  <Select
                    label='Repetição a cada'
                    options={[
                      { label: '1', value: 1 },
                      { label: '2', value: 2 },
                      { label: '3', value: 3 },
                      { label: '4', value: 4 },
                      { label: '5', value: 5 },
                      { label: '6', value: 6 },
                      { label: '7', value: 7 }
                    ]}
                    onChange={values =>
                      action({ name: 'repetition', value: values.value })
                    }
                  />
                  <Body>{selectedRecurrency?.pickedRecurrency}</Body>
                  {values['recurrence'] === 1 && (
                    <ButtonGroup
                      name='week-select'
                      list={[
                        { value: 0, label: 'S' },
                        { value: 1, label: 'T' },
                        { value: 2, label: 'Q' },
                        { value: 3, label: 'Q' },
                        { value: 4, label: 'S' },
                        { value: 5, label: 'S' },
                        { value: 6, label: 'D' }
                      ]}
                      action={values => action('week-select', values.value)}
                    />
                  )}
                </Row>
                {/* Hour Package daily, weekly, montly dates and hour preference */}

                {values['recurrence'] === 2 && (
                  <Row>
                    <Select
                      label='Ocorre em'
                      options={[
                        { value: 0, label: 'Primeira' },
                        { value: 1, label: 'Segunda' },
                        { value: 1, label: 'Terceira' },
                        { value: 1, label: 'Quarta' },
                        { value: 1, label: 'Última' }
                      ]}
                      onChange={values =>
                        action({
                          name: 'montly-recurrence-daily-recurrency',
                          value: values.value
                        })
                      }
                    />
                    <Body>-</Body>
                    <Select
                      options={[
                        { value: 1, label: 'Segunda-Feira' },
                        { value: 2, label: 'Terça-Feira' },
                        { value: 3, label: 'Quarta-Feira' },
                        { value: 4, label: 'Quinta-Feira' },
                        { value: 5, label: 'Sexta-Feira' },
                        { value: 6, label: 'Sabádo' },
                        { value: 0, label: 'Domingo' }
                      ]}
                      onChange={values =>
                        action({
                          name: 'montly-recurrence-weekday',
                          value: values.value
                        })
                      }
                    />
                    <Body>do Mês</Body>
                  </Row>
                )}
                <TextInput
                  label='Data de Início'
                  name='service-start-date'
                  type='date'
                  onChange={values =>
                    action({ name: 'service-start-date', value: values })
                  }
                />
                <Row>
                  <Select
                    label='Preferência Horária'
                    name='preferred-hours-start'
                    options={[
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
                    ]}
                    onChange={values =>
                      action({
                        name: 'preferred-hours-start',
                        value: values.value
                      })
                    }
                  />
                  <Body> - </Body>
                  <Select
                    label=''
                    name='preferred-hours-end'
                    options={[
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
                    ]}
                    onChange={values =>
                      action({
                        name: 'preferred-hours-end',
                        value: values.value
                      })
                    }
                  />
                </Row>
              </>
            ) : (
              <TextInput
                label='Data do Início'
                name='service-date'
                type='date'
                onChange={values =>
                  action({ name: 'service-date', value: values })
                }
              />
            )}
          </>
        )}
        <Heading size={6}>
          {values['offer-type'] && values['offer-type'] !== 0
            ? selectedRecurrency?.total
            : null}
        </Heading>
      </>
    );
  };

  return (
    <>
      <WidgetContainer>
        <Heading size={6}>Tipo de Oferta</Heading>
        {renderContent()}
      </WidgetContainer>
    </>
  );
};

OfferTypeWidget.propTypes = {
  action: PropTypes.func,
  offerType: PropTypes.string,
  values: PropTypes.object
};

export default OfferTypeWidget;
