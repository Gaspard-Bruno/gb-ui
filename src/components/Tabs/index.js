import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ButtonText } from '../Text';
import { TabContainer, TabButton, TabGroup } from './style';

const Tabs = ({ justify, tabs, initialTabIndex }) => {
  const [selectedTab, setSelectedTab] = useState(initialTabIndex);
  return (
    <TabContainer>
      <TabGroup justify={justify}>
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
          : ''}
      </TabGroup>
      {tabs && tabs[selectedTab] && tabs[selectedTab].children()}
    </TabContainer>
  );
};

Tabs.propTypes = {
  justify: PropTypes.string,
  initialTabIndex: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      children: PropTypes.function,
    })
  ),
};

Tabs.defaultProps = {
  type: 'primary',
};

export default Tabs;
