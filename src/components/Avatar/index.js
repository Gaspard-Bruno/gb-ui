import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import AvatarContainer, {
  AvatarImage,
  AvatarInitials,
} from './style';

const Avatar = ({ action, size, hasCarat, hasText, hasEmail, user }) => {
  const isDeleted = user?.adminStatus === 'deleted';
  const fullName = user?.fullName ?? user?.full_name ?? '';
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
          {fullName ? fullName.slice(0, 2) : ''}
        </AvatarInitials>
      )}
      {hasText && <p>{fullName}</p>}
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
