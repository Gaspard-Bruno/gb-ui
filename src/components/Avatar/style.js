import styled from 'styled-components';

const getStyleFromAvatarSize = (size, theme) => {
  switch (size) {
    case 'small':
      return `
                height: 32px;
                width: 32px;
            `;
    case 'medium':
      return `
                height: 40px;
                width: 40px;
            `;
    case 'large':
      return `
                height: 80px;
                width: 80px;
            `;
    default:
      return `
                height: 40px;
                width: 40px;
            `;
  }
};

const getRandomColor = theme => {
  const keys = Object.keys(theme.colors.muted);
  return theme.colors.muted[keys[(keys.length * Math.random()) << 0]];
};

const getTextColor = (size, user, theme) => {
  if (size === 'small' && user?.avatar) {
    return `${theme.colors.grey};`;
  } else if (size === 'medium') {
    return `${theme.colors.brand.orange}`;
  } else {
    return `${theme.colors.darkBlue};`;
  }
};

const AvatarContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: flex-start;
  color: ${props => getTextColor(props.size, props.user, props.theme)};
  svg {
    margin-left: 8px;
    width: 14px;
  }
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
  background-color: ${props => getRandomColor(props.theme)};
  display: flex;
  align-items: center;
  font-size: 11px;
  margin-right: 8px;
  text-transform: uppercase;
  ${props => getStyleFromAvatarSize(props.size)};
  color: ${props => props.theme.colors.darkBlue};
`;

export default AvatarContainer;
