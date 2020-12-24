import styled from 'styled-components';
import { media } from '../Layout';

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const ButtonGroupContainer = styled.div`
  align-items: center;
  flex-flow: column;
  p {
    cursor: pointer;
    line-height: 0px;
    color: ${props =>
      props.isSelected
        ? props.theme?.colors.darkBlue
        : props.theme?.colors.grey};
    margin: 0;
  }
`;

export const StyledButton = styled.button`
  margin-right: ${props => props.theme.margin - 8}px !important;
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
    margin-right: 5px !important;
  `)}
  border: ${props =>
    props.isSelected ? `none` : `1px solid ${props.theme?.colors.mediumBeige}`};
  }
`;
