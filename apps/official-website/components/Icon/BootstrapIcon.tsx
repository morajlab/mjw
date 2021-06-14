import React, { FunctionComponent } from 'react';
import { BootstrapIconStyles } from './Icon.styles';
import { extendProperties } from '../../utilities/.';
import type { IIconProps } from './Icon.types';

export const BootstrapIcon: FunctionComponent<IIconProps> = ({
  name,
  ...rest
}) => {
  const { root } = BootstrapIconStyles({});

  return (
    <i
      {...root}
      {...extendProperties(rest, {
        className: `bi-${name}`,
      })}
    ></i>
  );
};

export default BootstrapIcon;
