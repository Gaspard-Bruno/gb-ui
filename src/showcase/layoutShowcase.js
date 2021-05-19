import React from 'react';
import { Page, Row, Col, Heading } from 'Components';

const component = () => (
  <Page>
    <Col
      justify='flex-start'
      padding={0}
      bg='background'
      size={2}
      inlineStyle={() => `border: 2px solid #ff00dd;`}
      marginVertical={8}
    >
      <Row
        align='center'
        justify='space-around'
        size={1}
        marginHorizontal={8}
        marginVertical={8}
        bg='brand.main'
        inlineStyle={() => `border: 2px solid #ffcb00;`}
      >
        <Col
          size={2}
          marginHorizontal={8}
          marginVertical={8}
          inlineStyle={() => `border: 2px solid #0063ff;`}
        />
        <Col
          size={2}
          marginHorizontal={8}
          marginVertical={8}
          inlineStyle={() => `border: 2px solid #0063ff;`}
        />
      </Row>
      <Row size={2} inlineStyle={() => `border: 2px solid #ff0038;`}>
        <Col size={1} />
        <Col
          size={2}
          center
          marginHorizontal={16}
          marginVertical={8}
          inlineStyle={() => `border: 2px solid #00ff2e;`}
        ></Col>
        <Col size={1} />
      </Row>
    </Col>
    <Col size={3} inlineStyle={() => `border: 2px solid #ccff00;`} />
    <Row inlineStyle={() => `border: 2px solid #0063ff;`}>
      <Heading color='brand.mainLight'>
        Check src/showcase/layoutShowcase
      </Heading>
    </Row>
  </Page>
);

export default component;
