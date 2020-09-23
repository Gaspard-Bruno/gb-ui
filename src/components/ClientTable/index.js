import React from 'react';

import { useTranslate } from 'polyglot-react-redux-sdk';

import { Col } from 'Components/Layout';
import Avatar from 'Components/Avatar';

import StyledClientTable, { Header, StyledTableRow } from './style';

const TableRow = ({ item }) => {
    return (
        <StyledTableRow>
                <Col size={9}>
                    {item.attributes && 
                        <Avatar size="small" hasText={true} user={item.attributes}/>
                    }                
                </Col>

                <Col size={3}>

                </Col>
        </StyledTableRow>
    )
}

const ClientTable = ({ items }) => {
    const t = useTranslate("clients");

    return (
        <StyledClientTable>
            <Header>
                <Col size={9}>
                    {t('name')}
                </Col>

                <Col size={3}>
                    {t('region')}
                </Col>
            </Header>

            {items && Object.keys(items).map((item, index) => {
                return (
                    <TableRow 
                        key={"clientTable" + index}
                        item={items[item]} 
                    />
                )
            })}
        </StyledClientTable>
    )
}

export default ClientTable;