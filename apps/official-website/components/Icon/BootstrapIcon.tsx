import React, { FunctionComponent } from 'react';
import { BootstrapIconStyles } from './Icon.styles';
import type { IIconProps } from './Icon.types';

export const BootstrapIcon: FunctionComponent<IIconProps> = ({
  name,
  ...rest
}) => {
  const { root } = BootstrapIconStyles({});

  return (
    <i
      {...root}
      {...Object.assign(rest, {
        className: `bi-${name} ${rest.className ?? ''}`.trim(),
      })}
    ></i>
  );
};

export default BootstrapIcon;
