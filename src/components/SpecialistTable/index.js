import React from 'react';

import { useTranslate } from 'polyglot-react-redux-sdk';

import useFetchProvider from 'hooks/fetchProvider.js';
import useFetchClient from 'hooks/fetchClient.js';
import useFetchService from 'hooks/fetchService.js';

import { Col } from 'Components/Layout';
import Avatar from 'Components/Avatar';

import StyledSpecialistTable, { Header, StyledTableRow } from './style';

const TableRow = ({ item }) => {
    const t = useTranslate("specialists");

    // const client = useFetchClient(item.relationships.client.data.id)
    // const service = useFetchService(item.relationships.service.data.id)

    console.log("*****")
    console.log(item)
    // let services;
    // item.relationships.services.data.forEach(service => {
    //     let service = useFetchService(service.id)
    //     services.push(service)
    // })
    

    return (
        <StyledTableRow>
                <Col size={3}>
                    {item.attributes && 
                        <Avatar size="small" hasText={true} user={item.attributes}/>
                    }
                </Col>

                <Col size={3}>

                </Col>

                <Col size={2}>
                    {/* <Avatar size="small" hasText={true} user={provider.attributes}/> */}
                </Col>

                <Col size={2}>
                    {/* {item.attributes.deliveredOn} */}
                </Col>

                <Col size={2}>
                    {/* {item.attributes.totalHours 
                        ?
                            <span>{item.attributes.totalHours} {t('hours')}</span>
                        :
                            <span></span>
                    } */}
                    
                </Col>

        </StyledTableRow>
    )
}

const SpecialistTable = ({ items }) => {
    const t = useTranslate("specialists");

    return (
        <StyledSpecialistTable>
            <Header>
                <Col size={3}>
                    {t('name')}
                </Col>

                <Col size={3}>
                    {t('service')}
                </Col>

                <Col size={2}>
                    {t('region')}
                </Col>

                <Col size={2}>
                    {t('totalPrice')}
                </Col>

                <Col size={2}>
                    {t('state')}
                </Col>
            </Header>

            {items && items.map((item) => {
                return (
                    <TableRow item={item} />
                )
            })}
        </StyledSpecialistTable>
    )
}

export default SpecialistTable;