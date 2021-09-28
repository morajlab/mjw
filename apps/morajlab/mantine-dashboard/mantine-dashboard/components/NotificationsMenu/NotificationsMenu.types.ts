import type { IMantineComponentCommonProps } from '../../types';

export interface INotificationsMenuProps extends IMantineComponentCommonProps {
  notifications: {
    title?: string;
    children?: string;
    link?: string;
  }[];
  theme?: {
    iconsSize?: number;
  };
}

export interface INotificationsMenuStyleProps {}
