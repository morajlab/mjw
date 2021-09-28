import { MenuBody, Divider, Menu, Tooltip } from '@mantine/core';
import { Styles } from './VerticalMenu.styles';
import type { FunctionComponent } from 'react';
import type { MenuItemProps, MenuLabelProps, DividerProps } from '@mantine/core';
import type { IVerticalMenuProps } from './VerticalMenu.types';

export const VerticalMenu: FunctionComponent<IVerticalMenuProps> = ({
  items,
  collapsed,
  id,
  ...rest
}) => {
  const { menu, tooltip } = Styles({ collapsed: collapsed ?? false });

  return (
    <MenuBody
      id={`verticalmenu-menubody${id ? `-${id}` : ''}`}
      opened={true}
      onClose={() => {}}
      styles={menu}
      {...rest}
    >
      {items.map(({ type, props }, key) => {
        if (type === 'divider') {
          return <Divider {...(props as DividerProps)} key={key} />;
        }

        if (type === 'label') {
          return <Menu.Label {...(props as MenuLabelProps)} key={key} />;
        }

        const { icon, children, ...menuItemRest } = props as MenuItemProps;

        return (
          <Menu.Item
            children={children}
            icon={
              collapsed ? (
                <Tooltip position="right" color="dark" label={children} styles={tooltip}>
                  {icon}
                </Tooltip>
              ) : (
                icon
              )
            }
            key={key}
            {...menuItemRest}
          />
        );
      })}
    </MenuBody>
  );
};

export default VerticalMenu;
