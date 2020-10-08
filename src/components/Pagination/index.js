import React from 'react';
import PropTypes from 'prop-types';

import t from '../utils/translation';

import { SmallBody } from '../Text';
import TrackerBox from '../TrackerBox';
import StyledPagination, { Left, Right } from './style';

const Pagination = ({ totalPages, currentPage, action, translate }) => {
  const getBoxes = (currentPage, totalPages) => {
    if (totalPages >= 4) {
      if (
        currentPage === 1 ||
        currentPage === totalPages ||
        currentPage === totalPages - 1
      ) {
        return [1, 2, totalPages - 1, totalPages];
      } else {
        return [currentPage - 1, currentPage, totalPages - 1, totalPages];
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
  };
  const pageNumberAry = getBoxes(currentPage, totalPages);

  return (
    <StyledPagination>
      <Left>
        <SmallBody bold={true}>
          {t(translate, 'page')} {currentPage} {t(translate, 'of')} {totalPages}
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
        {pageNumberAry &&
          pageNumberAry.map((num, index) => {
            return (
              <>
                <TrackerBox
                  text={num}
                  isActive={num === currentPage}
                  currentPage={currentPage}
                  action={action}
                />
                {index === 1 && pageNumberAry.length >= 4 && (
                  <TrackerBox text='...' boxType='ellipsis' />
                )}
              </>
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
  totalPages: PropTypes.string,
  currentPage: PropTypes.string,
  action: PropTypes.func
};

export default Pagination;
