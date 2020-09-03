import React from 'react';

import { useTranslate } from 'polyglot-react-redux-sdk';

import { Col } from 'Components/Layout';
import Avatar from 'Components/Avatar';

import StyledArchiveTable, { Header, StyledTableRow } from './style';

const TableRow = ({ item }) => {
    const t = useTranslate("archive");

    return (
        <StyledTableRow>
                <Col size={2}>
                    <span className="service">{item.serviceName}</span>
                </Col>

                <Col size={2}>
                    <Avatar size="small" hasText={true} user={item.client}/>
                </Col>

                <Col size={2}>
                    <Avatar size="small" hasText={true} user={item.provider}/>
                </Col>

                <Col size={2}>
                    {item.deliveryDate}
                </Col>

                <Col size={2}>
                    {item.totalHours} {t('hours')}
                </Col>

                <Col size={2}>
                    {item.totalPrice}€
                </Col>  
        </StyledTableRow>
    )
}

const ArchiveTable = ({ items }) => {
    const t = useTranslate("archive");

    return (
        <StyledArchiveTable>
            <Header>
                <Col size={2}>
                    {t('serviceType')}
                </Col>

                <Col size={2}>
                    {t('client')}
                </Col>

                <Col size={2}>
                    {t('provider')}
                </Col>

                <Col size={2}>
                    {t('date')}
                </Col>

                <Col size={2}>
                    {t('totalHours')}
                </Col>

                <Col size={2}>
                    {t('totalPrice')}
                </Col>  
            </Header>

            {items && items.map((item) => {
                return (
                    <TableRow item={item} />
                )
            })}
        </StyledArchiveTable>
    )
}

export default ArchiveTable;