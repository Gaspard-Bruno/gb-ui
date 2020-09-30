import React from 'react';

import { Col } from '../Layout';
import Avatar from '../Avatar';

import TableRow from './TableRow';
import StyledTable, { Header } from './style';

const getRowDetails = (tableType, item = null) => {
  if (item === null) item = { javascript: 'is stupid' };

  const tableTypes = {
    archive: [
      {
        size: 2,
        header: 'serviceType',
        content: <span className='service'>{item.serviceName}</span>,
      },
      {
        size: 2,
        header: 'client',
        content: <Avatar size='small' hasText={true} user={item.client} />,
      },
      {
        size: 2,
        header: 'specialist',
        content: <Avatar size='small' hasText={true} user={item.provider} />,
      },
      {
        size: 2,
        header: 'date',
        content: <>{item.deliveryDate}</>,
      },
      {
        size: 2,
        header: 'totalHours',
        content: <>{item.totalHours} Horas</>,
      },
      {
        size: 2,
        header: 'totalPrice',
        content: <>{item.totalPrice}€</>,
      },
    ],
    specialists: [
      {
        size: 3,
        header: 'name',
        content: <Avatar size='small' hasText={true} user={item.provider} />,
      },
      {
        size: 3,
        header: 'service',
        content: <>{item.serviceName}</>,
      },
      {
        size: 2,
        header: 'totalRequests',
        content: <>{item.totalRequests}</>,
      },
      {
        size: 2,
        header: 'totalHours',
        content: <>{item.totalHours} Horas</>,
      },
      {
        size: 2,
        header: 'rating',
        content: <>sttarrrrs</>,
      },
    ],
    clients: [
      {
        size: 9,
        header: 'name',
        content: <Avatar size='medium' hasText={true} user={item.client} />,
      },
      {
        size: 9,
        header: 'region',
        content: 'region',
      },
    ],
  };

  return tableTypes[tableType];
};

const Table = ({ tableType, items }) => {
  const cols = getRowDetails(tableType);

  return (
    <StyledTable>
      <Header>
        {cols &&
          cols.map((col, i) => {
            return (
              <Col key={'header row' + i} size={col.size}>
                {col.header}
              </Col>
            );
          })}
      </Header>

      {items &&
        items.map((item, i) => {
          return (
            <TableRow
              key={'header row' + i}
              tableType={tableType}
              item={item}
            />
          );
        })}
    </StyledTable>
  );
};

export default Table;
