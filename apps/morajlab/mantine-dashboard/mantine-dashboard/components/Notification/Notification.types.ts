import type { NotificationProps } from '@mantine/core';

export interface INotificationProps extends Omit<NotificationProps, 'onClose'> {
  onClose?: NotificationProps['onClose'];
}

export interface INotificationStyleProps {}
