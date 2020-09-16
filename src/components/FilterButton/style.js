import styled from "styled-components";

const StyledFilterButton = styled.div`
    background-color: ${props => props.theme.colors.lightestBeige};
    border-radius: 30px;
    display: flex;
    height: 40px;
    width: fit-content;
    align-items: center;
    padding: 0px 15px 0px 10px;

    svg {
        height: 16px;
        width: 16px;
    }
`;

const getIconColor = (filterType, theme) => {
    if (filterType === 'service') {
        return `fill: ${theme.colors.darkBlue}`
    } else {
        return `fill: ${theme.colors.grey}`
    }
}

export const FilterTitle = styled.div`
    display: flex;
    color: ${props => props.theme.colors.grey};
    align-items: center;
    padding: 10px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    
    path {
        ${props => getIconColor(props.filterType, props.theme)}
    }

    span {
        margin-left: 10px;
    }
`;

export const CloseContainer = styled.div`
    border-left: 1px solid ${props => props.theme.colors.mediumBeige};
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-left: 10px;

    path {
        fill: ${props => props.theme.colors.feedback.error.default};
    }
`;


export default StyledFilterButton;