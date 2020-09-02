import styled from 'styled-components';

const StyledTopBar = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
`

export const LeftSection = styled.div`
    display: flex;
    align-items: center;

    svg {
        margin-right: 24px;
    }

    p {
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        margin: 0px;
    }

    span {
        font-weight: bold;
        font-size: 12px;
        line-height: 10px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: ${props => props.theme.colors.grey};
    }
`;

export const RightSection = styled.div`
    display: flex;
    align-items: center;

    svg {
        margin-right: 26px;
    }
`;

export default StyledTopBar;