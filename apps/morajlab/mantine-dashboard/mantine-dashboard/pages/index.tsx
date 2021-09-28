import Head from 'next/head';
import React, { CSSProperties, Fragment, useState } from 'react';
import { Group, useMantineTheme } from '@mantine/core';
import { LeftSideBar, TopBar, Icon, iconsList, Content } from '../components';
import type { ILeftSideBarProps, INotificationsMenuProps, ITopBarProps } from '../components';

const { arrowLeftOutline, arrowRightOutline, userOutline, templateOutline } = iconsList;

const fakeNotifications: INotificationsMenuProps['notifications'] = [
  {
    title: 'First notification',
    children: 'First notification content',
  },
  {
    title: 'Second notification',
    children: 'Second notification content',
  },
  {
    title: 'Third notification',
    children: 'Third notification content',
  },
];

const userInfo: ITopBarProps<boolean>['userInfo'] = {
  username: 'morteza-jamali',
  onlineStatus: false,
};

const leftSideBarItems: ILeftSideBarProps['items'] = [
  {
    type: 'label',
    props: {
      children: 'Main links',
    },
  },
  {
    type: 'item',
    props: {
      children: 'Dashboard',
      icon: <Icon component={userOutline} />,
    },
  },
  {
    type: 'item',
    props: {
      children: 'Dashboard',
      icon: <Icon component={userOutline} />,
    },
  },
  {
    type: 'divider',
  },
  {
    type: 'item',
    props: {
      children: 'Theme',
      icon: <Icon component={templateOutline} />,
    },
  },
  {
    type: 'item',
    props: {
      children: 'Dashboard',
      icon: <Icon component={userOutline} />,
      color: 'red',
    },
  },
];

export const Index = () => {
  const theme = useMantineTheme();
  const [leftSideBarCollapsed, setLeftSideBarCollapsed] = useState(false);

  const styles: { [key: string]: CSSProperties } = {
    group: {
      position: 'fixed',
      inset: 0,
      overflow: 'hidden',
      backgroundColor: theme.colors.dark[8],
      padding: theme.spacing.lg,
      alignItems: 'stretch',
    },
    leftSideBar: {
      flexGrow: 0,
      flexShrink: 0,
    },
    rightSide: {
      maxWidth: '100%',
      margin: 0,
    },
    topbar: {
      flexGrow: 0,
    },
  };

  return (
    <Fragment>
      <Head>
        <title>Mantine Next template</title>
        <meta name="description" content="Mantine Next template" />
      </Head>
      <Group spacing="lg" position="center" grow={true} style={styles.group} noWrap>
        <LeftSideBar
          items={leftSideBarItems}
          collapsed={leftSideBarCollapsed}
          style={styles.leftSideBar}
        />
        <Group
          direction="column"
          position="center"
          spacing="lg"
          grow={true}
          style={styles.rightSide}
          noWrap
        >
          <TopBar
            userInfo={userInfo}
            notifications={fakeNotifications}
            setStateCallback={() => setLeftSideBarCollapsed((collapsed) => !collapsed)}
            state={leftSideBarCollapsed}
            style={styles.topbar}
            stateIcons={[
              {
                state: true,
                icon: (<Icon component={arrowRightOutline} />) as any,
              },
              {
                state: false,
                icon: (<Icon component={arrowLeftOutline} />) as any,
              },
            ]}
          />
          <Content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At totam debitis, ratione illo
            dolores, doloribus perferendis blanditiis molestias accusantium quia omnis magni
            aperiam, labore voluptate cum consequatur provident? Illum, necessitatibus!
          </Content>
        </Group>
      </Group>
    </Fragment>
  );
};

export default Index;
