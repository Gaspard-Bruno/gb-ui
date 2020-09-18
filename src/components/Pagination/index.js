import React from 'react';
import PropTypes from 'prop-types';

import { useTranslate } from 'polyglot-react-redux-sdk';

import { Tiny, SmallBody } from 'Components/Text';
import Icon from 'Components/Icon';
import StyledPagination, { StyledTracker, Left, Right } from './style';

const TrackerBox = ({ 
    text, 
    currentPage,
    totalPages,
    iconName, 
    isActive, 
    boxType, 
    action 
}) => {
    const handleClick = () => {
        switch (boxType) {
            case 'last': if (currentPage>1) {action(currentPage - 1)}; break;
            case 'ellipsis': break;
            case 'next': if (currentPage!==totalPages) {action(currentPage + 1)}; break;
            default: action(text); break;
        }
    }

    return (
        <StyledTracker 
            isActive={isActive} 
            onClick={e => handleClick(e, text, currentPage)} 
            type={boxType}
        >
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

const Pagination = ({ totalPages, currentPage, action }) => {
  const t = useTranslate("archive");

  const getBoxes = (currentPage, totalPages) => {
    if (totalPages >= 4) {
        if (
            currentPage == 1 ||
            currentPage == totalPages ||
            currentPage == (totalPages-1)
        ) {
            return [1, 2, (totalPages-1), totalPages];
        } else {
            return [(currentPage-1), currentPage, (totalPages-1), totalPages];
        }
    } else {
        switch (totalPages) {
            case 3: return [1, 2, totalPages];
            case 2: return [1, totalPages];
            default: return [totalPages];
        }
    }
  }
  const pageNumberAry = getBoxes(currentPage, totalPages);

  return (
    <StyledPagination>
        <Left>
            <SmallBody bold={true}>
                {t('page')} {currentPage} {t('of')} {totalPages}
            </SmallBody>
        </Left>

        <Right>
            <TrackerBox 
                iconName="chevron-left" 
                boxType="last"
                currentPage={currentPage}
                totalPages={totalPages}
                action={action}
            />
            {pageNumberAry && pageNumberAry.map((num, index) => {
                return (
                    <>
                        <TrackerBox 
                            text={num}
                            isActive={num === currentPage}
                            currentPage={currentPage}
                            action={action}
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
            <TrackerBox 
                iconName="chevron-right" 
                boxType="next" 
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
}

export default Pagination;
