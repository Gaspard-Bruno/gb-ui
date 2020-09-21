import styled from 'styled-components';

const StyledClientTable = styled.div`
    font-size: 14px;
    line-height: 16px;
    color: ${props => props.theme.colors.darkBlue};

`;

export const Header = styled.div`
    border-radius: 2px;
    background-color: ${props => props.theme.colors.lightestBeige};
    height: 48px;
    width: 100%;
    display: flex;
    font-weight: bold;
`;

export const StyledTableRow = styled.div`
    display: flex;
    align-items: center;
    font-weight: normal;
    height: 80px;
    border-bottom: 1px solid ${props => props.theme.colors.mediumBeige};

    .service {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: ${props => props.theme.colors.brand.orange};        
    }
`;


export default StyledClientTable;