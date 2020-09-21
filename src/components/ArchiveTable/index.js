import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useTranslate } from 'polyglot-react-redux-sdk';

import { selectors as clientsSelectors} from 'redux/clients';
import { selectors as servicesSelectors} from 'redux/services';
import { selectors as providersSelectors} from 'redux/providers';

import { Col } from 'Components/Layout';
import Avatar from 'Components/Avatar';

import StyledArchiveTable, { Header, StyledTableRow } from './style';

const TableRow = ({ item }) => {
    const t = useTranslate("archive");

    const [clientId, setClientId] = useState(item.relationships.client.data.id)
    const [serviceId, setServiceId] = useState(item.relationships.service.data.id)
    const [providerId, setProviderId] = useState(() => {
        if (item.relationships.provider.data) { return item.relationships.provider.data.id }
        else { return 0 }
    })

    const makeClient = useMemo(clientsSelectors.makeGetClient, [])
    const client = useSelector((state) => makeClient(state, clientId))

    const makeService = useMemo(servicesSelectors.makeGetService, [])
    const service = useSelector((state) => makeService(state, serviceId))

    const makeProvider = useMemo(providersSelectors.makeGetProvider, [])
    const provider = useSelector((state) => makeProvider(state, providerId))

    useEffect(() => {
        setClientId(item.relationships.client.data.id)
        setServiceId(item.relationships.service.data.id)
        if (item.relationships.provider.data) { setProviderId(item.relationships.provider.data.id) };
    }, [item])

    return (
        <StyledTableRow>
                <Col size={2}>
                    {service.attributes && 
                        <span className="service">{service.attributes.name}</span>
                    }
                </Col>

                <Col size={2}>
                    {client.attributes && 
                        <Avatar size="small" hasText={true} user={client.attributes}/>
                    }
                </Col>

                <Col size={2}>
                    {provider &&
                        <Avatar size="small" hasText={true} user={provider.attributes}/>
                    }
                </Col>

                <Col size={2}>
                    {item.attributes.deliveredOn &&
                    new Date(item.attributes.deliveredOn).toLocaleDateString()}
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