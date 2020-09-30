import React from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from '../Text';

import Icon from '../Icon';
import Avatar from '../Avatar';

import StyledTopBar, { LeftSection, RightSection } from './style';

const TopBar = ({ location, title, back, user }) => {
  const history = useHistory();
  return (
    <StyledTopBar>
      <LeftSection>
        {back && (
          <Link>
            <Icon name='chevron-left' />
          </Link>
        )}
        <div>
          <p>
            <span>{location}</span>
          </p>
          <p>{title}</p>
        </div>
      </LeftSection>

      <RightSection>
        <Icon name='Bell' />
        <Avatar size='medium' hasCarat={true} hasText={true} user={user} />
      </RightSection>
    </StyledTopBar>
  );
};

export default TopBar;
