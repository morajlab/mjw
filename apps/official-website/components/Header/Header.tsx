import React, { FunctionComponent } from 'react';
import { Row, Col } from 'shards-react';
import { Styles } from './Header.styles';
import { INavItemProps, Section, Logo, Navbar, AboutUS } from '..';
import type { IHeaderProps } from './Header.types';

const NavbarItems: INavItemProps[] = [
  {
    title: 'About us',
    href: '#aboutus',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
  {
    title: 'Tools',
    href: '#tools',
    disabled: true,
  },
];

export const Header: FunctionComponent<IHeaderProps> = ({ ...rest }) => {
  const {
    root,
    caption,
    slogan,
    leftCol,
    rightCol,
    firstLeftLayer,
    secondLeftLayer,
    thirdLeftLayer,
  } = Styles({});

  return (
    <Section {...root} {...rest}>
      <Row>
        <Col {...leftCol}>
          <div className="shadow" {...firstLeftLayer}>
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
          <Navbar items={NavbarItems} className="py-3" />
          <AboutUS />
        </Col>
        <Col lg={5} {...rightCol}>
          <Logo />
        </Col>
      </Row>
    </Section>
  );
};

export default Header;
