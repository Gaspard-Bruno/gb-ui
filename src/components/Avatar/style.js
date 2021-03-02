import styled from 'styled-components';

const getStyleFromAvatarSize = (size, theme) => {
  switch (size) {
    case 'small':
      return `
        height: 32px;
        min-width: 32px;
       `;
    case 'medium':
      return `
        height: 40px;
        min-width: 40px;
       `;
    case 'large':
      return `
        height: 80px;
        min-width: 80px;
        `;
    default:
      return;
  }
};

const getRandomColor = (avatarDefault, theme, deleted) => {
  if (avatarDefault) {
    return avatarDefault;
  }

  if (deleted) {
    return theme.colors.backdrop;
  }

  const keys = Object.keys(theme.colors.muted);
  return theme.colors.muted[keys[(keys.length * Math.random()) << 0]];
};

const getTextColor = (size, user, theme) => {
  const colorMap = {
    small: theme.colors.grey,
    medium: theme.colors.brand.orange,
    default: theme.colors.darkBlue
  };

  if (user?.adminStatus === 'deleted') return `${theme.colors.grey}`;

  if (colorMap[size]) return `${colorMap[size]}`;

  return `${colorMap.default}`;
};

const getDeletedStyles = theme => {
  return `
    color: ${theme.colors.grey};
  `;
};

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
    line-height: 1;
  }
`;

export const EmailText = styled.p`
  margin-top: ${props => props.theme.margin * 0.5}px!important;
  text-transform: none;
  color: ${props => props.theme.colors.grey};
`;

const AvatarContainer = styled.div`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  color: ${props => getTextColor(props.size, props.user, props.theme)};
  svg {
    margin-left: 8px;
    width: 14px;
  }
  cursor: pointer;

  ${props =>
    props.user?.adminStatus === 'deleted' && getDeletedStyles(props.theme)}
`;

export const AvatarImage = styled.div`
  border-radius: 50%;
  background-image: url(${props => props.avatar});
  background-position: center;
  margin-right: 8px;
  ${props => getStyleFromAvatarSize(props.size)};
`;

export const AvatarInitials = styled.div`
  border-radius: 50%;
  background-color: ${props =>
    getRandomColor(props.avatarDefault, props.theme, props.isDeleted)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  margin-right: 8px;
  text-transform: uppercase;
  ${props => getStyleFromAvatarSize(props.size)};
  color: ${props => props.theme.colors.darkBlue};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${props => getTextColor(props.size, props.user, props.theme)};
  &:hover {
    cursor: pointer;
  }
`;

export default AvatarContainer;
