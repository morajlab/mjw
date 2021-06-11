import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'shards-react';
import { Styles } from './Header.styles';
import type { IHeaderProps } from './Header.types';

export const Header: FunctionComponent<IHeaderProps> = ({}) => {
  const { root, caption, slogan } = Styles({});

  return (
    <Container className="p-5" fluid {...root}>
      <Row>
        <Col className="pt-5 pl-5">
          <h1 className="display-4 text-uppercase font-weight-bolder d-flex flex-column">
            <span>Welcome to</span>
            <span className="text-nowrap ml-5" {...caption}>
              Morajlab
            </span>
            <span>official website</span>
          </h1>
          <em {...slogan}>
            We love open-source and work hardly on it to improve it
          </em>
        </Col>
        <Col lg={4}>Right side</Col>
      </Row>
    </Container>
  );
};

export default Header;
