import React, { FunctionComponent } from 'react';
import { Nav, NavItem, NavLink } from 'shards-react';
import { INavbarProps } from './Navbar.types';
import { Styles } from './Navbar.styles';

export const Navbar: FunctionComponent<INavbarProps> = ({ items, ...rest }) => {
  const { root } = Styles({});

  return (
    <Nav {...root} {...rest}>
      {items.map((itemRest, index) => (
        <NavItem key={index}>
          <NavLink {...Object.assign(itemRest, { children: itemRest.title })} />
        </NavItem>
      ))}
    </Nav>
  );
};

export default Navbar;
