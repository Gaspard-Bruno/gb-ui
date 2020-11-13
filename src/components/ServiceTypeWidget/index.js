import React from 'react';
import PropTypes from 'prop-types';
import { Heading, SmallBody, Body } from '../Text';
import {
  HeadingContainer,
  BodyContainer,
  WidgetContainer,
  ExtrasContainer
} from './styles';

const ServiceTypeWidget = ({ heading, headerText, body, extras }) => {
  return (
    <WidgetContainer>
      <HeadingContainer>
        <Heading size={5}>{heading}</Heading>
        <Body>{headerText}</Body>
      </HeadingContainer>
      <BodyContainer>
        <SmallBody>{body}</SmallBody>
      </BodyContainer>
      <ExtrasContainer>
        <SmallBody>{extras}</SmallBody>
      </ExtrasContainer>
    </WidgetContainer>
  );
};

ServiceTypeWidget.propTypes = {
  heading: PropTypes.string,
  headerText: PropTypes.string,
  body: PropTypes.string,
  extras: PropTypes.string
};

export default ServiceTypeWidget;
