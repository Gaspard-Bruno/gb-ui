import styled from "styled-components";

const StyledSwitch = styled.div`
    background-color: ${props => props.theme.colors.lightestBeige};
    border-radius: 30px;
    display: flex;
    width: 90px;
    height: 40px;
`;


const getActive = (active, theme) => {
    const textColor = active ? theme.colors.darkBlue : theme.colors.grey;
    return `fill: ${textColor};`
  };

export const Left = styled.div`
    padding: 10px;
    border-right: 1px solid ${props => props.theme.colors.mediumBeige};

    path {
        ${props => getActive(props.active, props.theme)};
    }
`;

export const Right = styled.div`
    padding: 10px;
    ${props => getActive(props.active, props.theme)};

    path {
        ${props => getActive(props.active, props.theme)};
    }    
`;

export default StyledSwitch;