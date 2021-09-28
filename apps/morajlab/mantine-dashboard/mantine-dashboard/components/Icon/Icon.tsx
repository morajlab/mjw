import { createElement } from 'react';
import { Styles } from './Icon.styles';
import type { FunctionComponent } from 'react';
import type { IIconProps } from './Icon.types';

export const Icon: FunctionComponent<IIconProps> = ({ component, size, ...rest }) => {
  const styles = Styles({ size });

  return createElement(component, { style: styles, ...rest });
};

export default Icon;
