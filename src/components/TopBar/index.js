import React, { useMemo } from 'react';
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';

import Button from '../Button';

import Icon from '../Icon';
import Avatar from '../Avatar';

import StyledTopBar, { LeftSection, RightSection, ClientName } from './style';

const TopBar = ({ location, title, back, user }) => {
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


TopBar.propTypes = {
  location: PropTypes.object,
  title: PropTypes.string,
  user: PropTypes.object,
  back: PropTypes.bool,
}
export default TopBar;
