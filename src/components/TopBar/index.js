import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../Button';
import useAuth from 'Hooks/useAuth';

import Icon from '../Icon';
import Avatar from '../Avatar';

import StyledTopBar, { LeftSection, RightSection, ClientName } from './style';

const TopBar = ({ location, title, back }) => {
  const { user } = useAuth();
  const history = useHistory();

  const memoUser = useMemo(
    () => ({
      avatar: user?.attributes?.avatar,
      avatarDefault: user?.attributes?.avatarDefault,
      fullName: user?.attributes?.fullName
    }),
    [user]
  );

  const handleNavigateToSettings = () => {
    history.push('/dashboard/settings');
  };

  return (
    <StyledTopBar>
      <LeftSection>
        {back && (
          <Button
            icon='chevron-left'
            btnType='transparent'
            action={() => history.goBack()}
          ></Button>
        )}
        <div>
          <p>
            <span>{location}</span>
          </p>
          <ClientName>{title}</ClientName>
        </div>
      </LeftSection>
      <RightSection>
        <Icon name='Bell' />
        {user && (
          <Avatar
            size='medium'
            hasCarat={true}
            hasText={true}
            user={memoUser}
            action={handleNavigateToSettings}
          />
        )}
      </RightSection>
    </StyledTopBar>
  );
};

export default TopBar;
