import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

// import { useTranslate } from 'polyglot-react-redux-sdk';

import { SmallBody } from '../Text';
import TrackerBox from '../TrackerBox';
import StyledPagination, { Left, Right } from './style';

const Pagination = ({ totalPages, currentPage, action, t }) => {
  const boxes = useMemo(() => {
    if (totalPages >= 4) {
      if (
        currentPage === 1 ||
        currentPage === totalPages ||
        currentPage === totalPages - 1
      ) {
        return currentPage === 1
          ? [1, 2, '...', totalPages - 1, totalPages]
          : [1, '...', totalPages - 1, totalPages];
      } else {
        return [
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages - 1,
          totalPages
        ];
      }
    } else {
      switch (totalPages) {
        case 3:
          return [1, 2, totalPages];
        case 2:
          return [1, totalPages];
        default:
          return [totalPages];
      }
    }
  }, [currentPage, totalPages]);

  return (
    <StyledPagination>
      <Left>
        <SmallBody bold={true}>
          {t('page')} {currentPage} {t('of')} {totalPages}
        </SmallBody>
      </Left>

      <Right>
        <TrackerBox
          iconName='chevron-left'
          boxType='last'
          currentPage={currentPage}
          totalPages={totalPages}
          action={action}
        />
        {boxes &&
          boxes.map((num, index) => {
            return (
              <React.Fragment key={'pages' + num}>
                {num === '...' ? (
                  <TrackerBox text='...' boxType='ellipsis' />
                ) : (
                  <TrackerBox
                    text={num}
                    isActive={num === currentPage}
                    currentPage={currentPage}
                    action={action}
                  />
                )}
              </React.Fragment>
            );
          })}
        <TrackerBox
          iconName='chevron-right'
          boxType='next'
          currentPage={currentPage}
          totalPages={totalPages}
          action={action}
        />
      </Right>
    </StyledPagination>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  action: PropTypes.func,
  t: PropTypes.func
};

export default Pagination;
