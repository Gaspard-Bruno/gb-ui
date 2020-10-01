import styled from 'styled-components';
import { media } from 'Components/Layout';

export const StyledLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 555px;
  ${media.mobile(`
    min-height: 10px;
  `)}
`;

export const StyledLoader = styled.img`
  ${media.mobile(`
    width: 100%;
  `)}
`;
