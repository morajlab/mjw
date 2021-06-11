import React, { FunctionComponent } from 'react';
import { css } from 'glamor';
import { Container, Row, Col } from 'shards-react';
import { Styles } from './Header.styles';
import type { IHeaderProps } from './Header.types';

export const Header: FunctionComponent<IHeaderProps> = ({}) => {
  const { root, caption } = Styles({});

  return (
    <Container className="p-5" fluid {...css(root)}>
      <Row>
        <Col>
          <h1 className="display-4 text-uppercase font-weight-bolder d-flex flex-column">
            <span>Welcome to</span>
            <span className="text-nowrap ml-5" {...css(caption)}>
              Morajlab
            </span>
            <span>official website</span>
          </h1>
          <h3>We love open-source and work hardly on it to improve it</h3>
        </Col>
        <Col>Right side</Col>
      </Row>
    </Container>
  );
};

export default Header;
