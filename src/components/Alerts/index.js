import React from 'react';
import IcoMoon from 'icomoon-react';
import PropTypes from 'prop-types';

import { AlertText, AlertTitle } from '../Text';
import {
  StyledAlert,
  AlertContainer,
  IconContainer,
  TitleAndTextContainer,
  XContainer
} from './style';

import iconSet from 'Assets/fonts/icons/icons.json';
import theme from 'Theme';

const Alert = ({
  isDisabled,
  alertType,
  text,
  isSmall,
  iconName,
  action,
  title,
  closeCross
}) => {
  const AlertIcon = ({ name, ...props }) => (
    <IcoMoon iconSet={iconSet} title={name} icon={name} {...props} />
  );

  AlertIcon.propTypes = {
    name: PropTypes.string
  };

  AlertIcon.defaultProps = {
    size: 20,
    color: alertType.includes('default')
      ? theme.colors.brand.red
      : theme.colors.white
  };

  AlertTitle.defaultProps = {
    color: alertType.includes('default')
      ? theme.colors.brand.red
      : theme.colors.white
  };

  if (closeCross && text && title) {
    return (
      <StyledAlert
        text={text}
        type={alertType}
        disabled={isDisabled}
        small={isSmall}
        onClick={action}
        title={title}
        closeCross={closeCross}
      >
        <AlertContainer>
          <IconContainer>
            <AlertIcon name={iconName} />
          </IconContainer>
          <TitleAndTextContainer>
            {title && <AlertTitle>{title}</AlertTitle>}
            {text && <AlertText>{text}</AlertText>}
          </TitleAndTextContainer>
          {closeCross && (
            <XContainer>
              <span>X</span>
            </XContainer>
          )}
        </AlertContainer>
      </StyledAlert>
    );
  } else if (text && title) {
    return (
      <StyledAlert
        type={alertType}
        disabled={isDisabled}
        small={isSmall}
        onClick={action}
        title={title}
      >
        <AlertContainer>
          <IconContainer>
            <AlertIcon name={iconName} />
          </IconContainer>
          <TitleAndTextContainer>
            {title && <AlertTitle>{title}</AlertTitle>}
            {text && <AlertText>{text}</AlertText>}
          </TitleAndTextContainer>
        </AlertContainer>
      </StyledAlert>
    );
  } else if (text) {
    return (
      <StyledAlert
        type={alertType}
        disabled={isDisabled}
        small={isSmall}
        onClick={action}
      >
        <AlertContainer>
          <IconContainer>
            <AlertIcon name={iconName} />
          </IconContainer>
          {text && <AlertText>{text}</AlertText>}
          {!closeCross && (
            <XContainer>
              <span>X</span>
            </XContainer>
          )}
        </AlertContainer>
      </StyledAlert>
    );
  }
  return <StyledAlert />;
};

Alert.propTypes = {
  isDisabled: PropTypes.bool,
  action: PropTypes.func,
  isSmall: PropTypes.bool,
  text: PropTypes.string,
  iconName: PropTypes.string,
  title: PropTypes.string,
  closeCross: PropTypes.bool,
  alertType: PropTypes.oneOf([
    'defaultSimple',
    'defaultWithCloseX',
    'defaultWithCloseXAndTitle',
    'simpleFilled',
    'filledWithCloseX',
    'filledWithCloseXAndTitle'
  ])
};

Alert.defaultProps = {
  type: 'defaultSimple'
};

export default Alert;
