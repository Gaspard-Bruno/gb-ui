import React, { useState } from 'react';
import { StyledScheduleSelector, StyledDateLabel } from './styles';
import PropTypes from 'prop-types';
import theme from 'Theme';
import { Tiny } from 'Components/Text';

const INITIAL_DATE = new Date('2019-06-10T00:00:00');
const DAYS_OF_THE_WEEK = {
  sunday: [],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: []
};
const SchedulePicker = ({
  name,
  action,
  t,
  columnNames = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ],
  value = DAYS_OF_THE_WEEK
}) => {
  const convertToDates = schedule => {
    const dates = [];
    const getDateString = (day, hour) => `2019-06-${9 + day}T${hour - 1}:00:00`;
    Object.keys(schedule).forEach((key, day) => {
      schedule[key].forEach(hour => {
        dates.push(new Date(getDateString(day, hour)));
      });
    });
    return dates;
  };
  const convertSchedulePicks = picks => {
    if (picks) {
      picks.forEach(value => {
        switch (value.getDay()) {
          case 1:
            return DAYS_OF_THE_WEEK.monday.indexOf(value.getHours()) === -1
              ? DAYS_OF_THE_WEEK.monday.push(value.getHours())
              : null;
          case 2:
            return DAYS_OF_THE_WEEK.tuesday.indexOf(value.getHours()) === -1
              ? DAYS_OF_THE_WEEK.tuesday.push(value.getHours())
              : null;
          case 3:
            return DAYS_OF_THE_WEEK.wednesday.indexOf(value.getHours()) === -1
              ? DAYS_OF_THE_WEEK.wednesday.push(value.getHours())
              : null;
          case 4:
            return DAYS_OF_THE_WEEK.thursday.indexOf(value.getHours()) === -1
              ? DAYS_OF_THE_WEEK.thursday.push(value.getHours())
              : null;
          case 5:
            return DAYS_OF_THE_WEEK.friday.indexOf(value.getHours()) === -1
              ? DAYS_OF_THE_WEEK.friday.push(value.getHours())
              : null;
          case 6:
            return DAYS_OF_THE_WEEK.saturday.indexOf(value.getHours()) === -1
              ? DAYS_OF_THE_WEEK.saturday.push(value.getHours())
              : null;
          default:
            return DAYS_OF_THE_WEEK.sunday.indexOf(value.getHours()) === -1
              ? DAYS_OF_THE_WEEK.sunday.push(value.getHours())
              : null;
        }
      });
    }
    return DAYS_OF_THE_WEEK;
  };

  const [pickedDays, setPickedDays] = useState(convertToDates(value));
  const renderCustomDateLabel = (date = new Date()) => {
    const dayHeader = t
      ? t(`.scheduler.${columnNames[date.getDay()]}`)
      : columnNames[date.getDay()];
    return (
      <StyledDateLabel>
        <Tiny>{dayHeader.charAt(0).toUpperCase()}</Tiny>
      </StyledDateLabel>
    );
  };

  const handleChange = newSchedule => {
    if (!newSchedule || newSchedule.length < 0) return;
    setPickedDays(newSchedule);

    action && action(convertSchedulePicks(newSchedule));
  };
  return (
    <StyledScheduleSelector
      name={name}
      selection={pickedDays}
      timeFormat={'HH:mm'}
      minTime={8}
      maxTime={24}
      startDate={INITIAL_DATE} // inital date is set for a Monday somewhere in time
      dateFormat={'dd'}
      selectedColor={theme.colors.brand.hover}
      hoveredColor={theme.colors.brand.yellow}
      hourlyChunks={1}
      rowGap={'1px'}
      columnGap={'1px'}
      renderDateLabel={renderCustomDateLabel}
      onChange={handleChange}
    />
  );
};

SchedulePicker.propTypes = {
  isVerticalAligned: PropTypes.bool,
  t: PropTypes.func,
  action: PropTypes.func,
  childAction: PropTypes.func,
  label: PropTypes.string,
  columnNames: PropTypes.array,
  value: PropTypes.object,
  list: PropTypes.array,
  name: PropTypes.string,
  error: PropTypes.string
};

export default SchedulePicker;
