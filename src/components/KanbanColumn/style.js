import styled from "styled-components";

const KanbanColumn = styled.div`
    background-color: ${props => props.theme.colors.lightestBeige};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 16px 16px 16px;
    min-width: 260px;
    overflow-y: scroll;
    ${props => getColumnHeight(props.itemsHeight, props.containerHeight)}

    .items > * {
        margin-bottom: 16px;
    }
`;

const getColumnHeight = (itemsHeight, containerHeight) => {
    if (itemsHeight > containerHeight) { return ``}
    else { return `height: calc(64px + ${itemsHeight}px);`}
}

export const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    background-color: ${props => props.theme.colors.lightestBeige};
    align-items: baseline;
    justify-content: space-between;
    width: 85%;
    padding: 0px 30px;

    h3 {
        font-size: 16px;
    }
`;

export const IconContainer = styled.div`
    
    path {
        fill: ${props => props.theme.colors.grey};
    }
`;

export default KanbanColumn;
