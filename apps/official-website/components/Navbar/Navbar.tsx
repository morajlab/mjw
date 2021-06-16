import React, { FunctionComponent } from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'shards-react';
import { extendProperties } from '../../utilities/.';
import { INavbarProps } from './Navbar.types';
import { Styles } from './Navbar.styles';

export const Navbar: FunctionComponent<INavbarProps> = ({ items, ...rest }) => {
  const { root } = Styles({});

  return (
    <Nav {...root} {...rest}>
      {items.map((itemRest, index) => {
        let result = null;

        if (itemRest.dropdownItems) {
          result = (
            <Dropdown
              open={itemRest.openState ?? false}
              toggle={itemRest.stateFunction}
              key={index}
            >
              <DropdownToggle nav caret>
                {itemRest.title}
              </DropdownToggle>
              <DropdownMenu>
                {itemRest.dropdownItems.map((dropdownItemRest, secondIndex) => (
                  <DropdownItem
                    {...extendProperties(dropdownItemRest, {
                      children: dropdownItemRest.title,
                    })}
                    key={secondIndex}
                  />
                ))}
              </DropdownMenu>
            </Dropdown>
          );
        } else {
          result = (
            <NavItem key={index}>
              <NavLink
                {...extendProperties(itemRest, { children: itemRest.title })}
              />
            </NavItem>
          );
        }

        return result;
      })}
    </Nav>
  );
};

export default Navbar;
