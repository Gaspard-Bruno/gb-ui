import React from 'react';
import PropTypes from 'prop-types';

import { useTranslate } from 'polyglot-react-redux-sdk';

import { Tiny, SmallBody } from 'Components/Text';
import Icon from 'Components/Icon';
import StyledPagination, { StyledTracker, Left, Right } from './style';

const TrackerBox = ({ text, iconName, isActive, boxType, action }) => {
    return (
        <StyledTracker isActive={isActive} onClick={action} type={boxType}>
            <Tiny>
                {text 
                ?
                    text
                :
                    <Icon name={iconName} />
                }
            </Tiny>
        </StyledTracker>
    )
}

TrackerBox.propTypes = {
    text: PropTypes.string,
    iconName: PropTypes.string,
    isActive: PropTypes.bool,
    boxType: PropTypes.oneOf([
        "single",
        "ellipsis",
        "last",
        "next"
    ]),
    action: PropTypes.func
}

const Pagination = ({ totalPages, currentPage, totalCount, pageItems  }) => {
  const t = useTranslate("archive");

  const getBoxes = (currentPage, totalPages) => {
      console.log("hiiiiii", (totalPages))
      console.log("wut", (totalPages > 4))
    if (totalPages >= 4) {
        if (
            currentPage == "1" ||
            currentPage == totalPages ||
            currentPage == (totalPages-1)
        ) {
            return ["1", "2", (totalPages-1), totalPages];
        } else {
            return [(currentPage-1), currentPage, (totalPages-1), totalPages];
        }
    } else {
        switch (totalPages) {
            case "3": return ["1", "2", totalPages];
            case "2": return ["1", totalPages];
            default: return [totalPages];
        }
    }
  }
  const pageNumberAry = getBoxes(currentPage, totalPages);
  console.log("nummmmmmebaehfalszkdjfojjjnnd", pageNumberAry)

  return (
    <StyledPagination>
        <Left>
            <SmallBody bold={true}>
                {t('page')} {currentPage} {t('of')} {totalPages}
            </SmallBody>
        </Left>

        <Right>
            <TrackerBox iconName="chevron-left" boxType="last"/>
            {pageNumberAry && pageNumberAry.map((num, index) => {
                console.log("indexxxxxx",index)
                return (
                    <>
                        <TrackerBox 
                            text={num}
                            isActive={num === currentPage}
                        />
                        {(index === 1) && (pageNumberAry.length >= 4) &&
                            <TrackerBox 
                                text="..."
                                boxType="ellipsis"
                            />
                        }
                    </>
                )}
            )}
            <TrackerBox iconName="chevron-right" boxType="next"/>
        </Right>
    </StyledPagination>
  );
};

Pagination.propTypes = {
    totalPages: PropTypes.string,
    currentPage: PropTypes.string
}

export default Pagination;
