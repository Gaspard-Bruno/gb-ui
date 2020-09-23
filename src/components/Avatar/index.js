import React from "react";
import PropTypes from "prop-types";

import Icon from "Components/Icon";

import AvatarContainer, { AvatarImage, AvatarInitials } from "./style";

const Avatar = ({ action, size, hasCarat, hasText, user }) => {
  return (
    <AvatarContainer onClick={action} size={size} user={user}>
      {size && user && user.avatar ? (
        <AvatarImage avatar={`${user.avatar}`} size={size}></AvatarImage>
      ) : (
        <AvatarInitials size={size} avatarDefault={user.avatarDefault}>
          {user.fullName ? user.fullName.slice(0, 2) : ""}
        </AvatarInitials>
      )}
      {hasText && <p>{user.fullName}</p>}
      {hasCarat && <Icon name="chevron-down" />}
    </AvatarContainer>
  );
};

Avatar.propTypes = {
  action: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  hasCarat: PropTypes.bool,
  hasText: PropTypes.bool,
  user: PropTypes.object
};

Avatar.defaultProps = {
  size: "small"
};

export default Avatar;
