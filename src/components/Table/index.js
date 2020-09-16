import React from 'react';

import { useTranslate } from 'polyglot-react-redux-sdk';

import { Col } from 'Components/Layout';
import StyledTable, { Header, StyledTableRow } from './style';

import Avatar from 'Components/Avatar';

const getRowDetails = (tableType, item=null) => {
    if (item === null) item = {javascript: 'is stupid'};

    const tableTypes = {
        archive: [
            {
                size: 2,
                header: 'serviceType',
                content: <span className='service'>{item.serviceName}</span>
            },
            {
                size: 2,
                header: 'client',
                content: <Avatar size='small' hasText={true} user={item.client}/>
            },
            {
                size: 2,
                header: 'specialist',
                content: <Avatar size='small' hasText={true} user={item.provider}/>
            },
            {
                size: 2,
                header: 'date',
                content: <>{item.deliveryDate}</>
            },
            {
                size: 2,
                header: 'totalHours',
                content: <>{item.totalHours} Horas</>
            },
            {
                size: 2,
                header: 'totalPrice',
                content: <>{item.totalPrice}€</>
            }
        ],
        specialists: [
            {
                size: 3,
                header: "name",
                content: <Avatar size="small" hasText={true} user={item.provider}/>
            },
            {
                size: 3,
                header: "service",
                content: <>{item.serviceName}</>
            },
            {
                size: 2,
                header: "totalRequests",
                content: <>{item.totalRequests}</>
            },
            {
                size: 2,
                header: "totalHours",
                content: <>{item.totalHours} Horas</>
            },
            {
                size: 2,
                header: "rating",
                content: <>sttarrrrs</>
            }                                    
        ]
    }

    return tableTypes[tableType];
}

const TableRow = ({ tableType, item }) => {
    const cols = getRowDetails(tableType, item)

    return (
        <StyledTableRow>
            {cols && cols.map(col => {
                return (
                    <Col size={col.size}>
                        {col.content}
                    </Col>
                )
            })}
        </StyledTableRow>
    )
}

const Table = ({ tableType, items }) => {
    const t = useTranslate(tableType);

    const cols = getRowDetails(tableType)

    return (
        <StyledTable>
            <Header>
                {cols && cols.map(col => {
                    return (
                        <Col size={col.size}>
                            {t(col.header)}
                        </Col>
                    )
                })
                }
            </Header>

            {items && items.map((item) => {
                return (
                    <TableRow tableType={tableType} item={item} />
                )
            })}
        </StyledTable>
    )
}

export default Table;