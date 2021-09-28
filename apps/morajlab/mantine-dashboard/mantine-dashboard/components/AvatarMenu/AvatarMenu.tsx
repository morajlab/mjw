import { Menu, Badge, Divider, Avatar } from '@mantine/core';
import { Icon, iconsList } from '..';
import { getTwoLetterUserName } from '../../lib';
import { Styles } from './AvatarMenu.styles';
import type { FunctionComponent } from 'react';
import type { IAvatarMenuProps, OnlineStatusBadgeProps } from './AvatarMenu.types';

export const AvatarMenu: FunctionComponent<IAvatarMenuProps> = ({
  profileImage,
  userInfo,
  id,
  ...rest
}) => {
  const { userOutline, cogOutline, logoutOutline } = iconsList;
  const { menu } = Styles();
  const onlineStatusBadgeProps: OnlineStatusBadgeProps = userInfo.onlineStatus
    ? {
        color: 'green',
        children: 'online',
      }
    : {
        color: 'red',
        children: 'offline',
      };

  return (
    <Menu
      menuId={`avatarmenu-menu${id ? `-${id}` : ''}`}
      controlRefProp="ref"
      control={
        <div>
          <Avatar src={profileImage} alt={userInfo.username} color="blue">
            {getTwoLetterUserName(userInfo.username)}
          </Avatar>
        </div>
      }
      styles={menu}
      {...rest}
    >
      <Menu.Label>
        <Badge variant="dot" radius="sm" fullWidth {...onlineStatusBadgeProps} />
      </Menu.Label>
      <Divider />
      <Menu.Item icon={<Icon component={userOutline} />}>Profile</Menu.Item>
      <Menu.Item icon={<Icon component={cogOutline} />}>Settings</Menu.Item>
      <Menu.Item color="red" icon={<Icon component={logoutOutline} />}>
        Log out
      </Menu.Item>
    </Menu>
  );
};

export default AvatarMenu;
