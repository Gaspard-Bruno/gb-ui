import React from "react";
import PropTypes from "prop-types";
import LogoContainer from "./style";

import { ReactComponent as LogoBlack } from "Assets/svg/logo-black.svg";
import { ReactComponent as LogoWhite } from "Assets/svg/logo-white.svg";
import { ReactComponent as LogoColorful } from "Assets/svg/logo-colorful.svg";
import { ReactComponent as LogoBlackTag } from "Assets/svg/logo-black-tag.svg";
import { ReactComponent as LogoWhiteTag } from "Assets/svg/logo-white-tag.svg";
import { ReactComponent as LogoColorfulTag } from "Assets/svg/logo-colorful-tag.svg";

const LOGO_MAP = {
  colorful: <LogoColorful />,
  black: <LogoBlack />,
  white: <LogoWhite />,
  colorfulTag: <LogoColorfulTag />,
  whiteTag: <LogoWhiteTag />,
  blackTag: <LogoBlackTag />,
};
const Logo = ({ size, color }) => {
  return <LogoContainer size={size}>{LOGO_MAP[color]}</LogoContainer>;
};

Logo.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
Logo.defaultProps = {
  size: 120,
  color: "colorful",
};

export default Logo;