import React, { useState } from "react";
import PropTypes from "prop-types";

import { ButtonText } from "Components/Text";
import { TabContainer, TabButton, TabGroup } from "./style";

const Tabs = ({ tabs, initialTabIndex }) => {
  const [selectedTab, setSelectedTab] = useState(initialTabIndex);
  return (
    <TabContainer>
      <TabGroup>
        {tabs && tabs.length
          ? tabs.map((tab, i) => (
              <TabButton
                isSelected={i === selectedTab}
                onClick={() => setSelectedTab(i)}
                key={tabs + tab.name + i}
              >
                <ButtonText>{tab.name}</ButtonText>
              </TabButton>
            ))
          : ""}
      </TabGroup>
      {tabs && tabs[selectedTab] && tabs[selectedTab].children()}
    </TabContainer>
  );
};

Tabs.propTypes = {
  initialTabIndex: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        name: PropTypes.string,
        children: PropTypes.element
      })
    ])
  )
};

Tabs.defaultProps = {
  type: "primary"
};

export default Tabs;
