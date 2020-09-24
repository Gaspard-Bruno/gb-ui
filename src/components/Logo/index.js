import React from "react";
import PropTypes from "prop-types";
import LogoContainer from "./style";

import { ReactComponent as LogoBlack } from "Assets/svg/logo-black.svg";
import { ReactComponent as LogoWhite } from "Assets/svg/logo-white.svg";
import { ReactComponent as LogoColorful } from "Assets/svg/logo-colorful.svg";
import { ReactComponent as LogoBlackTag } from "Assets/svg/logo-black-tag.svg";
import { ReactComponent as LogoWhiteTag } from "Assets/svg/logo-white-tag.svg";
import { ReactComponent as LogoColorfulTag } from "Assets/svg/logo-colorful-tag.svg";

// co-workers
import { ReactComponent as RegisteredSpecialists } from "Assets/svg/co-work/registered.svg";
import { ReactComponent as ActiveEspecialists } from "Assets/svg/co-work/active.svg";
import { ReactComponent as PerformedServices } from "Assets/svg/co-work/performed-services.svg";
import { ReactComponent as ActiveHours } from "Assets/svg/co-work/active-hours.svg";
import { ReactComponent as TotalAmount } from "Assets/svg/co-work/total-amount.svg";
const LOGO_MAP = {
  colorful: <LogoColorful />,
  black: <LogoBlack />,
  white: <LogoWhite />,
  colorfulTag: <LogoColorfulTag />,
  whiteTag: <LogoWhiteTag />,
  blackTag: <LogoBlackTag />,
  regEspecialistLogo: <RegisteredSpecialists />,
  activeEspecialistLogo: <ActiveEspecialists />,
  performedServicesLogo: <PerformedServices />,
  activeHoursLogo: <ActiveHours />,
  totalAmountLogo: <TotalAmount />
};

const Logo = ({ size, isCenter = true, color }) => {
  return (
    <LogoContainer center={isCenter} size={size}>
      {LOGO_MAP[color]}
    </LogoContainer>
  );
};

Logo.propTypes = {
  size: PropTypes.number,
  isCenter: PropTypes.bool,
  color: PropTypes.string
};

Logo.defaultProps = {
  size: 120,
  color: "colorful"
};

export default Logo;
