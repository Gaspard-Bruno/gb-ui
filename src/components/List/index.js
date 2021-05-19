import React from 'react';
import { Body } from '../Text';
import PropTypes from 'prop-types';
import { Col } from '../Layout';
import { ListContainer, ListItens, ListWrapper, StyledIcon } from './styles';

const List = ({
  data,
  hasIcon,
  isBorded,
  children,
  justify,
  hasFullWidthLi,
  padding,
  indexedList
}) => {
  const items =
    data &&
    data.map((item, index) => {
      const style =
        index + 1 === indexedList
          ? 'main'
          : (index + 1 > indexedList && 'grey') || 'completed';
      const iconValue = indexedList && style === 'completed' ? '√' : index + 1; // needs proper icon
      return (
        <ListItens
          indexedList={indexedList}
          hasFullWidthLi={hasFullWidthLi}
          indexedStyle={style}
          hasIcon={hasIcon}
          key={`${item}-${index}`}
        >
          {hasIcon && <StyledIcon>{iconValue}</StyledIcon>}
          <Col size={0.55}>
            <Body>{item}</Body>
          </Col>
        </ListItens>
      );
    });
  return (
    <ListWrapper padding={padding} isBorded={isBorded}>
      {children}
      <ListContainer>{items}</ListContainer>
    </ListWrapper>
  );
};

List.propTypes = {
  indexedList: PropTypes.number,
  justify: PropTypes.string,
  padding: PropTypes.string,
  hasFullWidthLi: PropTypes.bool,
  hasIcon: PropTypes.bool,
  isBorded: PropTypes.bool,
  data: PropTypes.array,
  children: PropTypes.node,
  options: PropTypes.objectOf(
    PropTypes.shape({
      list: PropTypes.string,
      display: PropTypes.string
    })
  )
};

export default List;
