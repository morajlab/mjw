import React, { FunctionComponent, useState } from 'react';
import { Row, Col } from 'shards-react';
import { Styles } from './Header.styles';
import { INavItemProps, Section, Logo, Navbar, AboutUS } from '..';
import type { IHeaderProps } from './Header.types';

export const Header: FunctionComponent<IHeaderProps> = ({ ...rest }) => {
  const [langDropdownOpenState, setLangDropdownOpenState] = useState(false);
  const [langItemState, setLangItemState] = useState('English');
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
    {
      title: langItemState,
      dropdownItems: [
        {
          title: 'English',
          onClick: () => setLangItemState('English'),
        },
        {
          title: 'فارسی',
          onClick: () => setLangItemState('فارسی'),
        },
      ],
      openState: langDropdownOpenState,
      stateFunction: () => setLangDropdownOpenState(!langDropdownOpenState),
    },
  ];

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
                  <span>website</span>
                </h1>
                <em {...slogan}>
                  We love open-source and our goal is to improve and scale it.
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
