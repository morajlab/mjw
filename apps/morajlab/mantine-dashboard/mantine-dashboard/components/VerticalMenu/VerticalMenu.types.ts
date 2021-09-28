import type { MenuItemProps, MenuLabelProps, DividerProps } from '@mantine/core';
import type { IMantineComponentCommonProps } from '../../types';

export interface IVerticalMenuItemProps {
  type: 'label' | 'item' | 'divider';
  props?: MenuItemProps | MenuLabelProps | DividerProps;
}

export interface IVerticalMenuStyleProps {
  collapsed: boolean;
}

export interface IVerticalMenuProps extends IMantineComponentCommonProps {
  items: IVerticalMenuItemProps[];
  collapsed?: IVerticalMenuStyleProps['collapsed'];
}
