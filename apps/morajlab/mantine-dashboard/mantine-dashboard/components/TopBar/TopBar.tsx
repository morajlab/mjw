import { cloneElement } from 'react';
import { Group, Paper, useMantineTheme } from '@mantine/core';
import { AvatarMenu, NotificationsMenu, ToggleActionButton, SearchInput } from '..';
import { Styles } from './TopBar.styles';
import type { ITopBarProps } from './TopBar.types';

export const TopBar = <IToggleActionButtonStateType extends unknown>({
  setStateCallback,
  state,
  stateIcons,
  notifications,
  theme,
  style,
  profileImage,
  userInfo,
  ...rest
}: ITopBarProps<IToggleActionButtonStateType>) => {
  theme = {
    ...{
      iconsSize: 20,
    },
    ...theme,
  };
  const { paper } = Styles({ theme: useMantineTheme() });

  stateIcons = stateIcons.map((value) => ({
    state: value.state,
    icon: cloneElement(value.icon as any, {
      size: theme.iconsSize,
      ...value.icon.arguments,
    }) as any,
  }));

  return (
    <Paper shadow="sm" padding="sm" style={{ ...paper, ...style }} {...rest}>
      <Group position="apart" noWrap={true} spacing={0}>
        <Group noWrap={true}>
          <ToggleActionButton
            setStateCallback={setStateCallback}
            state={state}
            stateIcons={stateIcons}
          />
          <SearchInput />
        </Group>
        <Group noWrap={true}>
          <NotificationsMenu theme={theme} notifications={notifications} />
          <AvatarMenu id="topbar" userInfo={userInfo} profileImage={profileImage} />
        </Group>
      </Group>
    </Paper>
  );
};

export default TopBar;
