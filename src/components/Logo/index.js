import React from "react";
import PropTypes from "prop-types";
import LogoContainer from "./style";

import { ReactComponent as LogoBlack } from "Assets/svg/logo-black.svg";
import { ReactComponent as LogoWhite } from "Assets/svg/logo-white.svg";
import { ReactComponent as LogoColorful } from "Assets/svg/logo-colorful.svg";
import { ReactComponent as LogoBlackTag } from "Assets/svg/logo-black-tag.svg";
import { ReactComponent as LogoWhiteTag } from "Assets/svg/logo-white-tag.svg";
import { ReactComponent as LogoColorfulTag } from "Assets/svg/logo-colorful-tag.svg";
import { ReactComponent as LogoHome } from "Assets/svg/logo-Home.svg";
import { ReactComponent as LogoAbout } from "Assets/svg/about-us-logo.svg";

// Partners
import { ReactComponent as cmlSVG } from "Assets/svg/partners/cml.svg";
import { ReactComponent as santaCasaSVG } from "Assets/svg/partners/santa-casa.svg";
import { ReactComponent as agaKhanSVG } from "Assets/svg/partners/aga-khan.svg";
import { ReactComponent as inpactHubSVG } from "Assets/svg/partners/impact-hub.svg";
import { ReactComponent as trowHatchSVG } from "Assets/svg/partners/trow-hatch.svg";
import { ReactComponent as hCapitalSVG } from "Assets/svg/partners/h_capital.svg";
import { ReactComponent as lx2020SVG } from "Assets/svg/partners/lisboa_2020.svg";
import { ReactComponent as pt2020SVG } from "Assets/svg/partners/pt_2020.svg";
import { ReactComponent as euroSVG } from "Assets/svg/partners/euro_flag.svg";
import { ReactComponent as ptlSVG } from "Assets/svg/partners/pt_flag.svg";
import { ReactComponent as ssSVG } from "Assets/svg/partners/ss-banner.svg";
import { ReactComponent as cldsSVG } from "Assets/svg/partners/clsds-3g.svg";

const LOGO_MAP = {
  colorful: <LogoColorful />,
  black: <LogoBlack />,
  white: <LogoWhite />,
  colorfulTag: <LogoColorfulTag />,
  whiteTag: <LogoWhiteTag />,
  blackTag: <LogoBlackTag />,
  home: <LogoHome />,
  about: <LogoAbout />,
  cmlLogo: <cmlSVG />,
  santaCasaLogo: <santaCasaSVG />,
  agakhanLogo: <agaKhanSVG />,
  inpactHubLogo: <inpactHubSVG />,
  trowHatchLogo: <trowHatchSVG />,
  hCapitalLogo: <hCapitalSVG />,
  lx2020Logo: <lx2020SVG />,
  pt2020Logo: <pt2020SVG />,
  euroLogo: <euroSVG />,
  ptLogo: <ptlSVG />,
  ssLogo: <ssSVG />,
  cldsLogo: <cldsSVG />
};
const Logo = ({ size, color }) => {
  return <LogoContainer size={size}>{LOGO_MAP[color]}</LogoContainer>;
};

Logo.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};
Logo.defaultProps = {
  size: 120,
  color: "colorful"
};

export default Logo;
