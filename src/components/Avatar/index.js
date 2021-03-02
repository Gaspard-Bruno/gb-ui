import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import AvatarContainer, {
  AvatarImage,
  AvatarInitials,
  InfoContainer,
  EmailText,
  Link
} from './style';

const Avatar = ({ action, size, hasCarat, hasText, hasEmail, user }) => {
  const isDeleted = user?.adminStatus === 'deleted';
  return (
    <AvatarContainer onClick={action} size={size} user={user}>
      {size && user && user.avatar && (
        <AvatarImage avatar={`${user.avatar}`} size={size}></AvatarImage>
      )}

      {isDeleted ? (
        <AvatarInitials size={size} isDeleted={isDeleted}>
          ?
        </AvatarInitials>
      ) : (
        <AvatarInitials size={size} avatarDefault={user?.avatarDefault}>
          {user?.fullName ? user.fullName.slice(0, 2) : ''}
        </AvatarInitials>
      )}

      <InfoContainer>
        {hasText && (
          <>
            {isDeleted && <Link>[deleted Admin]</Link>}
            <Link>{user?.fullName}</Link>
          </>
        )}
        {hasEmail && <EmailText>{user?.email}</EmailText>}
      </InfoContainer>
      {hasCarat && <Icon name='chevron-down' />}
    </AvatarContainer>
  );
};

Avatar.propTypes = {
  action: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  hasCarat: PropTypes.bool,
  hasText: PropTypes.bool,
  hasEmail: PropTypes.bool,
  user: PropTypes.object
};

Avatar.defaultProps = {
  size: 'small'
};

export default Avatar;
