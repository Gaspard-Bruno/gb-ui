import styled from "styled-components";

const StyledFilterBar = styled.div`

`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    
`;

export const Selects = styled.div`
    display: flex;

    > * {
        margin-right: 32px;
    }
`;

export const Filters = styled.div`
    display: flex;
    flex-wrap: wrap;

    > * {
        margin: 16px 16px 0px 0px;
    }
`;

export default StyledFilterBar;