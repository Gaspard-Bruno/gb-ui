import React from "react";
import IcoMoon from "icomoon-react";
import PropTypes from "prop-types";

import iconSet from "Assets/fonts/icons/icons.json";

const Icon = ({ name, ...props }) => (
  <IcoMoon iconSet={iconSet} title={name} icon={name} {...props} />
);

Icon.propTypes = {
  name: PropTypes.string,
};

Icon.defaultProps = {
  size: 24,
};

export default Icon;
