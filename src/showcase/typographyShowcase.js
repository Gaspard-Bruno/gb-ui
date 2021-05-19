/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Page, Row, Col, Heading, Body, Link } from 'Components';

const component = () => (
  <Page>
    <Row>
      <Col
        justify='space-between'
        size={2}
        inlineStyle={() => `border: 2px solid #0063ff;`}
        marginVertical={8}
      >
        <Heading size={1}>Heading size 1</Heading>
        <Heading size={2}>Heading size 2</Heading>
        <Heading size={3}>Heading size 3</Heading>
        <Heading size={4}>Heading size 4</Heading>
        <Heading secondary size={5} color='brand.mainLight'>
          Heading size 4, secondary font, color: "brand.mainLight"
        </Heading>
      </Col>
      <Col
        justify='space-between'
        bg='background'
        size={2}
        inlineStyle={() => `border: 2px solid #0063ff;`}
        marginVertical={8}
      >
        <Body>Body</Body>
        <Body size={'2em'}>Body size "2em"</Body>
        <Body color='feedback.error'>Body color: "feedback.error"</Body>
        <Body as={'span'} size='24px'>
          Body as "span" size 24px
        </Body>
        <Body primary size={5} color='brand.alt'>
          Body primary font color "brand.alt"
        </Body>
      </Col>
      <Col
        justify='space-between'
        bg='background'
        size={2}
        inlineStyle={() => `border: 2px solid #0063ff;`}
        marginVertical={8}
      >
        <Link>Link</Link>
        <Link to='http://google.com' size={'2em'}>
          Link size "2em" to Google.com
        </Link>
        <Link size='24px' to='http://google.com' newTab>
          Link size "24px" to Google opening new Tab
        </Link>
        <Link primary size={'1em'} color='brand.mainLight'>
          Link primary font color "brand.mainLight" 1em
        </Link>
      </Col>
    </Row>
    <Row inlineStyle={() => `border: 2px solid #0063ff;`}>
      <Heading color='brand.mainLight'>
        Check src/showcase/typographyShowcase
      </Heading>
    </Row>
  </Page>
);
export default component;
