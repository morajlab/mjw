import type { IAvatarMenuProps, INotificationsMenuProps, IToggleActionButtonProps } from '..';
import type { MantineTheme } from '@mantine/core';

export interface ITopBarProps<IToggleActionButtonStateType>
  extends IAvatarMenuProps,
    INotificationsMenuProps,
    IToggleActionButtonProps<IToggleActionButtonStateType> {}

export interface ITopBarStyleProps {
  theme: MantineTheme;
}
