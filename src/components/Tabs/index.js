import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ButtonText } from '../Text';
import { TabContainer, TabButton, TabGroup } from './style';

const Tabs = ({ justify, tabs, initialTabIndex, action }) => {
  const [selectedTab, setSelectedTab] = useState(initialTabIndex);

  const handleTabChange = tabIndex => {
    if (action) {
      action(tabIndex);
    }
    setSelectedTab(tabIndex);
  };

  useEffect(() => {
    setSelectedTab(initialTabIndex);
  }, [initialTabIndex]);

  return (
    <TabContainer>
      <TabGroup justify={justify}>
        {tabs && tabs.length
          ? tabs.map((tab, i) => (
              <TabButton
                isSelected={i === selectedTab}
                type='button'
                onClick={() => handleTabChange(i)}
                key={tabs + tab.name + i}
              >
                <ButtonText>{tab.name}</ButtonText>
              </TabButton>
            ))
          : ''}
      </TabGroup>
      {tabs && tabs[selectedTab] && tabs[selectedTab]?.children?.()}
    </TabContainer>
  );
};

Tabs.propTypes = {
  justify: PropTypes.string,
  initialTabIndex: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      children: PropTypes.function
    })
  ),
  action: PropTypes.func
};

Tabs.defaultProps = {
  type: 'primary'
};

export default Tabs;
