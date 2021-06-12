import React, { FunctionComponent } from 'react';
import { Styles } from './Logo.styles';
import type { ILogoProps } from './Logo.types';

export const Logo: FunctionComponent<ILogoProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return (
    <div className="mt-n5 mr-n5" {...root} {...rest}>
      <img src="logo.svg" alt="Logo" />
    </div>
  );
};

export default Logo;
