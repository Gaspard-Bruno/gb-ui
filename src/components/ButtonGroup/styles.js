import styled from 'styled-components';
import { media } from '../Layout';
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 0px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const ButtonGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    cursor: pointer;
    position: relative;
    margin: 0px;
    left: 37px;
    color: ${props =>
      props.isSelected
        ? props.theme?.colors.darkBlue
        : props.theme?.colors.grey};
    margin: 0;
  }
`;

export const StyledButton = styled.button`
  margin: 0 !important;
  outline: none;
  width: ${props => props.theme?.margin * 4}px;
  height: ${props => props.theme?.margin * 3}px;
  background-color: ${props =>
    props.isSelected
      ? `${props.theme?.colors.feedback.warning.default}`
      : `${props.theme?.colors.white}`};
  };

  
  cursor: pointer;
  ${media.smallDesktop(`
    width: 45px;
  `)}
  ${media.tablet(`
    width: 81px;
  `)}
  ${media.mobile(`
    width: 37px;
  `)}
  border: ${props =>
    props.isSelected ? `none` : `1px solid ${props.theme?.colors.mediumBeige}`};
  }
`;
