import React from "react";

import StyledMainContainer from "./style";

const MainContainer = ({children}) => {
    return (
        <StyledMainContainer>
            {children}
        </StyledMainContainer>
    )
}

export default MainContainer;