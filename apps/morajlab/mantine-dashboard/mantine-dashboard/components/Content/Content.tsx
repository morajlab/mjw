import { Styles } from './Content.styles';
import type { FunctionComponent } from 'react';
import type { IContentProps } from './Content.types';

export const Content: FunctionComponent<IContentProps> = ({ ...rest }) => {
  const styles = Styles();

  return <div style={styles} {...rest} />;
};

export default Content;
