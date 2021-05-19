import styled from 'styled-components';

const StyledPagination = styled.div`
  margin: 24px 0px 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  p {
    color: ${props => props.theme.colors.grey};
  }
`;

export const Right = styled.div`
  display: flex;
`;
export default StyledPagination;

const getActiveStyles = (theme, isActive, type) => {
  if (isActive) {
    return `
            border: ${
              type === 'ellipsis' ? 'none' : '1px solid ' + theme?.colors.text
            };
            color: ${theme?.colors.text};
        `;
  } else {
    return `
            border: ${
              type === 'ellipsis'
                ? 'none'
                : '1px solid ' + theme?.colors.brand?.altLight
            };
            h3 {
                color: ${theme?.colors.brand?.altLight};
            }
        `;
  }
};

export const StyledTracker = styled.div`
  display: flex;
  margin-right: 8px;
  height: 24px;
  min-width: 23px;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-sizing: border-box;
  border-radius: 2px;
  font-size: 12px;
  ${props => getActiveStyles(props.theme, props.isActive, props.type)};

  &:hover {
    cursor: pointer;
  }

  h3 {
    margin: 0px;
  }

  svg {
    height: 24px;
    width: 24px;
  }
`;
