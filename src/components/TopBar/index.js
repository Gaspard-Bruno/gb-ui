import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import Icon from '../Icon';
import Avatar from '../Avatar';

import StyledTopBar, { LeftSection, RightSection, ClientName } from './style';

const TopBar = ({
  location,
  title,
  back,
  user,
  onAvatarClick,
  onBackClick
}) => {
  const memoUser = useMemo(
    () => ({
      avatar: user?.attributes?.avatar,
      avatarDefault: user?.attributes?.avatarDefault,
      fullName: user?.attributes?.fullName
    }),
    [user]
  );

  return (
    <StyledTopBar>
      <LeftSection>
        {back && (
          <Button
            icon='chevron-left'
            btnType='transparent'
            action={onBackClick}
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
            action={onAvatarClick}
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
  onBackClick: PropTypes.func,
  onAvatarClick: PropTypes.func
};

TopBar.defaultProps = {
  onBackClick: () => console.log('🔴 ~~ TopBar Component 👉 "back" prop requires you to specificy "onBackClick" callback'),
};
export default TopBar;
