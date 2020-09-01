import React from 'react';
import { useHistory } from "react-router-dom";

import { useTranslate } from 'polyglot-react-redux-sdk';

import { Link } from 'Components/Text';
import { Row } from 'Components/Layout';

import Icon from 'Components/Icon';
import Avatar from 'Components/Avatar';

import StyledTopBar, { LeftSection, RightSection } from './style';

const TopBar = ({location, title, back, user}) => {
    console.log(back)
    const history = useHistory();
    return (
        <StyledTopBar>
            <Row justify="space-between">
                <LeftSection>
                    {back && 
                        <Link>
                            <Icon name="chevron-left" />
                        </Link>
                    }
                    <div>
                        <p><span>{location}</span></p>
                        <p>{title}</p>
                    </div>
                </LeftSection>

                <RightSection>
                    <Icon name="eye-off"/>
                    <Avatar 
                    size="medium" hasCarat={true} hasText={true} user={user}
                    />
                </RightSection>
            </Row>
        </StyledTopBar>
    )
}

export default TopBar;