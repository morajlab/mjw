import type { IMantineComponentCommonProps } from '../../types';

export type OnlineStatusBadgeProps =
  | {
      color: 'green';
      children: 'online';
    }
  | {
      color: 'red';
      children: 'offline';
    };

export interface IAvatarMenuProps extends IMantineComponentCommonProps {
  userInfo: {
    username: string;
    onlineStatus: boolean;
  };
  profileImage?: string;
}

export interface IAvatarMenuStyleProps {}
