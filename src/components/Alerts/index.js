import React from "react";
import IcoMoon from "icomoon-react";
import PropTypes from "prop-types";

import { AlertText, AlertTitle } from "Components/Text";
<<<<<<< HEAD
import {
  StyledAlert,
  AlertContainer,
  IconContainer,
  TitleAndTextContainer,
  XContainer
} from "./style";
=======
import StyledAlert from "./style";
>>>>>>> 85851dc... Feat_create-alert-components

import iconSet from "Assets/fonts/icons/icons.json";
import theme from "Theme";

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
    color: alertType.includes("default") ? theme.colors.brand.red : theme.colors.white
  };

  AlertTitle.defaultProps = {
    color: alertType.includes("default") ? theme.colors.brand.red : theme.colors.white
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
<<<<<<< HEAD
        <AlertContainer>
          <IconContainer>
            <AlertIcon name={iconName} />
          </IconContainer>
          <TitleAndTextContainer>
            {title && <AlertTitle>{title}</AlertTitle>}
            {text && <AlertText>{text}</AlertText>}
          </TitleAndTextContainer>
          { closeCross && 
            <XContainer>
              <span>X</span>
            </XContainer>
          }
        </AlertContainer>
=======
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: 10}}>
            <AlertIcon name={iconName} />
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {title && <AlertTitle>{title}</AlertTitle>}
            {text && <AlertText>{text}</AlertText>}
          </div>
          { closeCross && 
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 10}}>
              <span style={{fontSize: 24}}>X</span>
            </div>
          }
        </div>
>>>>>>> 85851dc... Feat_create-alert-components
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
<<<<<<< HEAD
        <AlertContainer>
          <IconContainer>
            <AlertIcon name={iconName} />
          </IconContainer>
          <TitleAndTextContainer>
            {title && <AlertTitle>{title}</AlertTitle>}
            {text && <AlertText>{text}</AlertText>}
          </TitleAndTextContainer>
        </AlertContainer>
=======
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: 10}}>
            <AlertIcon name={iconName} />
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {title && <AlertTitle>{title}</AlertTitle>}
            {text && <AlertText>{text}</AlertText>}
          </div>
        </div>
>>>>>>> 85851dc... Feat_create-alert-components
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
<<<<<<< HEAD
        <AlertContainer>
          <IconContainer>
            <AlertIcon name={iconName} />
          </IconContainer>
          {text && <AlertText>{text}</AlertText>}
          { !closeCross &&
            <XContainer>
              <span>X</span>
            </XContainer>
          }
        </AlertContainer>
=======
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: 10}}>
            <AlertIcon name={iconName} />
          </div>
          {text && <AlertText>{text}</AlertText>}
          { !closeCross &&
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 10}}>
              <span style={{fontSize: 24}}>X</span>
            </div>
          }
        </div>
>>>>>>> 85851dc... Feat_create-alert-components
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
    "defaultSimple",
    "defaultWithCloseX",
    "defaultWithCloseXAndTitle",
    "simpleFilled",
    "filledWithCloseX",
    "filledWithCloseXAndTitle"
  ])
};

Alert.defaultProps = {
  type: "defaultSimple"
};

export default Alert;
