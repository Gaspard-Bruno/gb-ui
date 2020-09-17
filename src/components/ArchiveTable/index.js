import React from 'react';

import { useTranslate } from 'polyglot-react-redux-sdk';

import useFetchProvider from 'hooks/fetchProvider.js';
import useFetchClient from 'hooks/fetchClient.js';
import useFetchService from 'hooks/fetchService.js';

import { Col } from 'Components/Layout';
import Avatar from 'Components/Avatar';

import StyledArchiveTable, { Header, StyledTableRow } from './style';

const TableRow = ({ item }) => {
    const t = useTranslate("archive");

    // const provider = useFetchProvider(item.relationships.provider.data.id)
    const client = useFetchClient(item.relationships.client.data.id)
    const service = useFetchService(item.relationships.service.data.id)

    return (
        <StyledTableRow>
                <Col size={2}>
                    {service.service.attributes && 
                        <span className="service">{service.service.attributes.name}</span>
                    }
                </Col>

                <Col size={2}>
                    {client.fetchedClient.attributes && 
                        <Avatar size="small" hasText={true} user={client.fetchedClient.attributes}/>
                    }
                </Col>

                <Col size={2}>
                    {/* <Avatar size="small" hasText={true} user={provider.attributes}/> */}
                </Col>

                <Col size={2}>
                    {item.attributes.deliveredOn}
                </Col>

                <Col size={2}>
                    {item.attributes.totalHours 
                        ?
                            <span>{item.attributes.totalHours} {t('hours')}</span>
                        :
                            <span></span>
                    }
                    
                </Col>

                <Col size={2}>
                    {/* {item.totalPrice}€ */}
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