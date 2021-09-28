import { useState } from 'react';
import { ActionIcon, Popover, Divider } from '@mantine/core';
import { Icon, iconsList, Notification } from '..';
import { Styles } from './NotificationsMenu.styles';
import type { FunctionComponent } from 'react';
import type { INotificationsMenuProps } from './NotificationsMenu.types';

export const NotificationsMenu: FunctionComponent<INotificationsMenuProps> = ({
  notifications,
  theme,
  ...rest
}) => {
  const [opened, setOpened] = useState(false);
  const { notification } = Styles();
  const { bellOutline } = iconsList;

  return (
    <Popover
      position="bottom"
      placement="start"
      opened={opened}
      onClose={() => setOpened(false)}
      target={
        <ActionIcon onClick={() => setOpened((status) => !status)}>
          <Icon component={bellOutline} size={theme ? theme?.iconsSize : undefined} />
        </ActionIcon>
      }
      {...rest}
    >
      {notifications.map((note, key) => (
        <Notification disallowClose key={key} styles={notification} {...note} />
      ))}
    </Popover>
  );
};

export default NotificationsMenu;
