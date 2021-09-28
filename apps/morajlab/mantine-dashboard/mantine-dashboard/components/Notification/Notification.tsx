import { Notification as MantineNotification } from '@mantine/core';
import { Styles } from './Notification.styles';
import type { FunctionComponent } from 'react';
import type { INotificationProps } from './Notification.types';

export const Notification: FunctionComponent<INotificationProps> = ({
  onClose,
  title,
  children,
  ...rest
}) => {
  return title || children ? (
    <MantineNotification
      onClose={onClose ?? (() => {})}
      title={title}
      children={children}
      {...rest}
    />
  ) : null;
};

export default Notification;
