import styled from "styled-components";

const StyledSidebar = styled.div`
    background-color: ${props => props.theme.colors.brand.orange};
    color: white;
    padding: 32px 0px;
    width: 240px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`

export const NavSection = styled.div`
    margin-top: 40px;

    h5 {
        font-family: Space Grotesk;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 10px;        
        letter-spacing: 1px;
        text-transform: uppercase;        
        margin: 0px 32px 4px;
    }

    a {
        color: white;
        font-size: 16px;
        line-height: 24px;
        
        &:visited {
            color:white;
        }

        &:hover {
            color: white;
        }
    }
`;

const getNavLinkStyles = (active, theme) => {
    return `
        height: 40px;
        display: flex;
        align-items: center;
    `;
}

export const NavLink = styled.div`
    padding: 0px 30px;
    height: 40px;
    display: flex;
    align-items: center;    

    background-color: ${props => props.active ? props.theme.colors.brand.orangeLight : 'none'};
    border-left: ${props => props.active ? 'solid 2px white' : 'solid 2px transparent'};
`;

export default StyledSidebar;