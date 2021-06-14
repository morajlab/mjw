import React, { FunctionComponent } from 'react';
import { Styles } from './Logo.styles';
import { extendProperties } from '../../utilities/.';
import type { ILogoProps } from './Logo.types';

export const Logo: FunctionComponent<ILogoProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return (
    <div {...root} {...extendProperties(rest, { className: 'mt-n5 mr-n5' })}>
      <img src="logo.svg" alt="Logo" />
    </div>
  );
};

export default Logo;
