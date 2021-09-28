import { VerticalMenu } from '..';
import { Styles } from './LeftSideBar.styles';
import type { FunctionComponent } from 'react';
import type { ILeftSideBarProps } from './LeftSideBar.types';

export const LeftSideBar: FunctionComponent<ILeftSideBarProps> = ({ ...rest }) => {
  const styles = Styles();

  return <VerticalMenu style={styles} {...rest} />;
};

export default LeftSideBar;
