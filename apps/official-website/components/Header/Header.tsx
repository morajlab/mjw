import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'shards-react';
import { Styles } from './Header.styles';
import { Logo } from '../../components/.';
import type { IHeaderProps } from './Header.types';

export const Header: FunctionComponent<IHeaderProps> = ({}) => {
  const {
    root,
    caption,
    slogan,
    leftCol,
    rightCol,
    secondLeftLayer,
    thirdLeftLayer,
  } = Styles({});

  return (
    <Container className="p-5" fluid {...root}>
      <Row>
        <Col>
          <div {...leftCol}>
            <div {...secondLeftLayer}>
              <div {...thirdLeftLayer}>
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
              </div>
            </div>
          </div>
        </Col>
        <Col lg={5} {...rightCol}>
          <Logo />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
