import styled from 'styled-components';
import theme from 'Theme';

const getSwitcherStylesFromChecked = checked => {
  if (checked) {
    return `
          background-color: ${theme.colors.feedback.success.default};
          justify-content: flex-end;
        `;
  } else {
    return `
          background-color: white;
        `;
  }
};

const StyledSwitcher = styled.div`
  border: 1px solid ${props =>
    props.checked || props.disabled
      ? 'transparent'
      : props.theme.colors.brand?.altLight};
  box-sizing: border-box;
  border-radius: 30px;
  height: 24px;
  width: 44px;
  display: flex;
  align-items: center;
  padding: 0px 1px;

  ${props => getSwitcherStylesFromChecked(props.checked)}
  ${props =>
    props.disabled &&
    `
    background-color: ${props.theme.colors.brand?.altLight};`}

  ${props => !props.disabled && 'cursor: pointer;'}
`;

export const InnerToggle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${props =>
    props.checked || props.disabled ? 'white' : props.theme.colors.brand?.altLight};
`;

export default StyledSwitcher;
