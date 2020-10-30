import React, { useState } from 'react';
import { StyledScheduleSelector, StyledDateLabel } from './styles';
import PropTypes from 'prop-types';
import theme from 'Theme';
import { Tiny } from 'Components/Text';

const SchedulePicker = ({ name, action, t }) => {
  const weekDays = {
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: []
  };
  const [pickedDays, setPickedDays] = useState([]);

  const renderCustomDateLabel = (date = new Date()) => {
    const dayHeader = t
      ? t(`${Object.keys(weekDays)[date.getDay()]}`)
      : Object.keys(weekDays)[date.getDay()];
    return (
      <StyledDateLabel>
        <Tiny>{dayHeader.charAt(0).toUpperCase()}</Tiny>
      </StyledDateLabel>
    );
  };

  const handleChange = newSchedule => {
    if (!newSchedule || newSchedule.length < 0) return;
    setPickedDays(newSchedule);

    if (newSchedule) {
      newSchedule.forEach(value => {
        switch (value.getDay()) {
          case 1:
            return weekDays.monday.indexOf(value.getHours()) === -1
              ? weekDays.monday.push(value.getHours())
              : null;
          case 2:
            return weekDays.tuesday.indexOf(value.getHours()) === -1
              ? weekDays.tuesday.push(value.getHours())
              : null;
          case 3:
            return weekDays.wednesday.indexOf(value.getHours()) === -1
              ? weekDays.wednesday.push(value.getHours())
              : null;
          case 4:
            return weekDays.thursday.indexOf(value.getHours()) === -1
              ? weekDays.thursday.push(value.getHours())
              : null;
          case 5:
            return weekDays.friday.indexOf(value.getHours()) === -1
              ? weekDays.friday.push(value.getHours())
              : null;
          case 6:
            return weekDays.saturday.indexOf(value.getHours()) === -1
              ? weekDays.saturday.push(value.getHours())
              : null;
          default:
            return weekDays.sunday.indexOf(value.getHours()) === -1
              ? weekDays.sunday.push(value.getHours())
              : null;
        }
      });
      action && action(weekDays);
    }
  };

  return (
    <StyledScheduleSelector
      name={name}
      selection={pickedDays}
      timeFormat={'HH:mm'}
      minTime={8}
      maxTime={24}
      startDate={new Date('2019-06-10T00:00:00')} // inital date is set for a Monday somewhere in time
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
  list: PropTypes.array,
  name: PropTypes.string,
  error: PropTypes.string
};

export default SchedulePicker;
