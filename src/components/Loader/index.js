import React from 'react';
import { Page } from '../Layout';

import animations from './animations/animation_500.gif';
import { StyledLoadingContainer, StyledLoader } from './styles';

const Loading = () => {
  return (
    <StyledLoadingContainer>
      <StyledLoader alt='' src={animations} />
    </StyledLoadingContainer>
  );
};

export default Loading;
