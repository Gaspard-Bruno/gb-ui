import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Heading, SmallBody, Body } from '../Text';
import { Row } from '../Layout';
import { WidgetContainer } from './styles';
import RadioButton from '../RadioButton';
import TextInput from '../TextInput';
import Select from '../Select';
import ButtonGroup from '../ButtonGroup';

import {
  numberOfHoursOptions,
  preferredHoursOptions,
  recurrenceOptions,
  repetitionOptions,
  montlyRecurrenceOptions,
  montlyRecurrenceWeekDaysOptions,
  weekSelectOptions
} from './selectableOptions';
import { TextContainer } from './styles';

const OfferTypeWidget = ({
  action,
  offerType,
  values,
  errors,
  answers,
  packOptions
}) => {
  const renderContent = () => {
    const serviceOptions = {
      // ready-pack && hour-pack
      default: [
        { label: 'Única', value: 0 },
        { label: 'Recorrente', value: 1 },
        { label: 'Pack de Horas', value: 2 }
      ],
      // one-time-service
      unique: [{ label: 'Única', value: 0 }],
      // ready-pack-specific
      readyPackSpecific: [
        { label: 'Única', value: 0 },
        { label: 'Recorrente', value: 1 }
      ]
    };
    switch (offerType) {
      case 'ready-pack':
      case 'hour-pack':
        return renderReadyPack(serviceOptions.default);
      case 'one-time-service':
        return renderReadyPack(serviceOptions.unique);
      case 'one-time-service-specific':
        return renderOneTimeSpecific(serviceOptions.unique);
      case 'ready-pack-specific': //WeekEnds
        return renderReadyPack(serviceOptions.readyPackSpecific);
      default:
        return null;
    }
  };

  const selectedRecurrency = useMemo(() => {
    const status = {
      pickedRecurrency: '',
      total: ''
    };

    if (values?.['recurrence'] === 0 || answers?.['recurrence'] === 0) {
      status.pickedRecurrency = 'Dia';
    }
    if (values?.['recurrence'] === 1 || answers?.['recurrence'] === 1) {
      status.pickedRecurrency = 'Semana';
    }
    if (values?.['recurrence'] === 2 || answers?.['recurrence'] === 2) {
      status.pickedRecurrency = 'Mês';
    }
    return status;
  }, [answers, values]);

  const getDefaultValues = (options, answerValue) =>
    options?.find(e => e.value === answerValue);

  const minDate = new Date().toISOString().split('T')[0];

  const renderOneTimeSpecific = serviceOptions => {
    return (
      <>
        <RadioButton
          error={errors?.['offer-type']}
          name='offer-type'
          action={action}
          list={serviceOptions}
          value={answers?.['offer-type']}
        />
        <>
          <Heading size={6}>Data e Hora do Serviço</Heading>
        </>
        <Row>
          <TextInput
            label='Data'
            error={errors?.['service-start-date']}
            name='service-start-date'
            type='date'
            minDate={minDate}
            defaultValue={answers?.['service-start-date']}
            onChange={values =>
              action({ name: 'service-start-date', value: values })
            }
          />
          <TextContainer> - </TextContainer>
          <Select
            label='Hora'
            name='preferred-hours'
            error={errors?.['preferred-hours']}
            defaultValue={getDefaultValues(
              preferredHoursOptions,
              answers?.['preferred-hours']
            )}
            options={preferredHoursOptions}
            onChange={values =>
              action({ name: 'preferred-hours', value: values.value })
            }
          />
        </Row>
      </>
    );
  };

  const renderReadyPack = serviceOptions => {
    return (
      <>
        <RadioButton
          error={errors?.['offer-type']}
          name='offer-type'
          action={action}
          list={serviceOptions}
          value={answers?.['offer-type']}
        />
        {/*Unique type */}
        {values['offer-type'] === 0 && (
          <>
            <Heading size={6}>Data e Hora Preferencial</Heading>
            <TextInput
              label='Data'
              error={errors?.['service-start-date']}
              name='service-start-date'
              type='date'
              minDate={minDate}
              defaultValue={answers?.['service-start-date']}
              onChange={values =>
                action({ name: 'service-start-date', value: values })
              }
            />
            {
              <Row>
                <Select
                  error={errors?.['preferred-hours-start']}
                  label='Preferência Horária'
                  name='preferred-hours-start'
                  defaultValue={getDefaultValues(
                    preferredHoursOptions,
                    answers?.['preferred-hours-start']
                  )}
                  options={preferredHoursOptions}
                  onChange={values =>
                    action({
                      name: 'preferred-hours-start',
                      value: values.value
                    })
                  }
                />
                <TextContainer> - </TextContainer>
                <Select
                  label=''
                  error={errors?.['preferred-hours-end']}
                  name='preferred-hours-end'
                  defaultValue={getDefaultValues(
                    preferredHoursOptions,
                    answers?.['preferred-hours-end']
                  )}
                  options={preferredHoursOptions}
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
              error={errors?.['number-of-hours']}
              label='Número de Horas'
              name='number-of-hours'
              defaultValue={getDefaultValues(
                numberOfHoursOptions,
                answers?.['number-of-hours']
              )}
              options={numberOfHoursOptions}
              onChange={values =>
                action({ name: 'number-of-hours', value: values.value })
              }
            />
            <Body>
              Poderá alterar a recorrência e reagendar para mais tarde através
              da Equipa da 55+.
            </Body>
            <Select
              error={errors?.['recurrence']}
              label='Recorrência'
              name='recurrence'
              defaultValue={getDefaultValues(
                recurrenceOptions,
                answers?.['recurrence']
              )}
              onChange={values =>
                action({ name: 'recurrence', value: values.value })
              }
              options={recurrenceOptions}
            />
            <Row>
              <Select
                error={errors?.['repetition']}
                label='Repetição a cada'
                defaultValue={getDefaultValues(
                  repetitionOptions,
                  answers?.['repetition']
                )}
                options={repetitionOptions}
                onChange={values =>
                  action({ name: 'repetition', value: values.value })
                }
              />
              <>
                <TextContainer>
                  {selectedRecurrency?.pickedRecurrency}
                </TextContainer>
              </>
              {/* Weekly option - day-selection */}
              <Row>
                {values?.['recurrence'] === 1 ||
                  (answers?.['recurrence'] === 1 && (
                    <ButtonGroup
                      error={errors?.['week-select']}
                      name='week-select'
                      list={weekSelectOptions}
                      value={answers?.['week-select']}
                      action={values =>
                        action({ name: values?.name, value: values?.value })
                      }
                    />
                  ))}
                {/* Montly option - week-selection */}
                {values?.['recurrence'] === 2 && (
                  <>
                    <Select
                      error={errors?.['montly-recurrence']}
                      label='Ocorre em'
                      defaultValue={getDefaultValues(
                        montlyRecurrenceOptions,
                        answers?.['montly-recurrence']
                      )}
                      options={montlyRecurrenceOptions}
                      onChange={values =>
                        action({
                          name: 'montly-recurrence',
                          value: values.value
                        })
                      }
                    />
                    <TextContainer> - </TextContainer>
                    <Select
                      error={errors?.['montly-recurrence-weekday']}
                      defaultValue={getDefaultValues(
                        montlyRecurrenceWeekDaysOptions,
                        answers?.['montly-recurrence-weekday']
                      )}
                      options={montlyRecurrenceWeekDaysOptions}
                      onChange={values =>
                        action({
                          name: 'montly-recurrence-weekday',
                          value: values.value
                        })
                      }
                    />
                    <TextContainer>do Mês</TextContainer>
                  </>
                )}
              </Row>
            </Row>
            {/*Montly type */}
            <TextInput
              error={errors?.['service-start-date']}
              defaultValue={answers?.['service-start-date']}
              label='Data de Início'
              name='service-start-date'
              type='date'
              minDate={minDate}
              onChange={values =>
                action({ name: 'service-start-date', value: values })
              }
            />
            <TextInput
              error={errors?.['service-end-date']}
              defaultValue={answers?.['service-end-date']}
              label='Data de Fim'
              name='service-end-date'
              type='date'
              minDate={minDate}
              onChange={values =>
                action({ name: 'service-end-date', value: values })
              }
            />
            <Row>
              <Select
                error={errors?.['preferred-hours-start']}
                label='Preferência Horária'
                name='preferred-hours-start'
                defaultValue={answers?.['preferred-hours-start']}
                options={preferredHoursOptions}
                onChange={values =>
                  action({ name: 'preferred-hours-start', value: values.value })
                }
              />
              <TextContainer> - </TextContainer>
              <Select
                error={errors?.['preferred-hours-end']}
                label=''
                name='preferred-hours-end'
                defaultValue={answers?.['preferred-hours-end']}
                options={preferredHoursOptions}
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
            <SmallBody>*Válido apenas para particulares</SmallBody>
            <Select
              label='Escolha o Pack'
              name='pack-selection'
              error={errors?.['pack-selection']}
              defaultValue={getDefaultValues(
                packOptions,
                answers?.['pack-selection']
              )}
              options={packOptions}
              onChange={values =>
                action({
                  name: 'pack-selection',
                  value: values.value
                })
              }
            />
            <SmallBody>*não inclui a taxa de IVA em vigor</SmallBody>
            {/* exclusive !weekends and !sevenDays */}
            {(values['pack-selection'] === 0 && offerType !== 'ready-pack') ||
            (values['pack-selection'] === 1 && offerType !== 'ready-pack') ? (
              <>
                <Body>
                  Poderá alterar a recorrência e reagendar para mais tarde
                  através da Equipa da 55+.
                </Body>
                <Select
                  label='Recorrência'
                  name='recurrence'
                  defaultValue={getDefaultValues(
                    recurrenceOptions,
                    answers?.['recurrence']
                  )}
                  error={errors?.['recurrence']}
                  onChange={values =>
                    action({ name: 'recurrence', value: values.value })
                  }
                  options={recurrenceOptions}
                />
                <Row>
                  <Select
                    error={errors?.['repetition']}
                    label='Repetição a cada'
                    defaultValue={getDefaultValues(
                      repetitionOptions,

                      answers?.['repetition']
                    )}
                    options={repetitionOptions}
                    onChange={values =>
                      action({ name: 'repetition', value: values.value })
                    }
                  />
                  <TextContainer>
                    {selectedRecurrency?.pickedRecurrency}
                  </TextContainer>
                  {values?.['recurrence'] === 1 ||
                    (answers?.['recurrence'] === 1 && (
                      <ButtonGroup
                        error={errors?.['week-select']}
                        name='week-select'
                        list={weekSelectOptions}
                        action={values => action(values)}
                      />
                    ))}
                </Row>
                {/* Hour Package daily, weekly, montly dates and hour preference */}

                <TextInput
                  label='Data de Início'
                  name='service-start-date'
                  type='date'
                  minDate={minDate}
                  defaultValue={answers?.['service-start-date']}
                  error={errors?.['service-start-date']}
                  onChange={values =>
                    action({ name: 'service-start-date', value: values })
                  }
                />
                <Row>
                  <Select
                    error={errors?.['preferred-hours-start']}
                    label='Preferência Horária'
                    defaultValue={getDefaultValues(
                      preferredHoursOptions,
                      answers?.['preferred-hours-start']
                    )}
                    name='preferred-hours-start'
                    options={preferredHoursOptions}
                    onChange={values =>
                      action({
                        name: 'preferred-hours-start',
                        value: values.value
                      })
                    }
                  />
                  <TextContainer> - </TextContainer>
                  <Select
                    error={errors?.['preferred-hours-end']}
                    label=''
                    name='preferred-hours-end'
                    defaultValue={getDefaultValues(
                      preferredHoursOptions,
                      answers?.['preferred-hours-end']
                    )}
                    options={preferredHoursOptions}
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
                name='service-start-date'
                type='date'
                minDate={minDate}
                defaultValue={answers?.['service-start-date']}
                error={errors?.['service-start-date']}
                onChange={values =>
                  action({ name: 'service-start-date', value: values })
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
      <WidgetContainer>{renderContent()}</WidgetContainer>
    </>
  );
};

OfferTypeWidget.propTypes = {
  action: PropTypes.func,
  offerType: PropTypes.string,
  values: PropTypes.object,
  errors: PropTypes.object,
  answers: PropTypes.object,
  packOptions: PropTypes.array
};

export default OfferTypeWidget;
