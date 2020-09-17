import styled from 'styled-components';

const StyledTopBar = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    padding-bottom: 10px;
    -webkit-box-shadow: 0px 2px 2px 0px rgba(113, 109, 106, 0.05);
    -moz-box-shadow:    0px 2px 2px 0px rgba(113, 109, 106, 0.05);
    box-shadow:         0px 2px 2px 0px rgba(113, 109, 106, 0.05);
`

export const LeftSection = styled.div`
    display: flex;
    align-items: center;
    padding-left: 32px;

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