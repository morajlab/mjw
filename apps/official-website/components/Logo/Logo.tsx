import React, { FunctionComponent } from 'react';
import { Styles } from './Logo.styles';
import { extendProperties, Path } from '../../utilities/.';
import type { ILogoProps } from './Logo.types';

export const Logo: FunctionComponent<ILogoProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return (
    <div {...root} {...extendProperties(rest, { className: 'mt-n5 mr-n5' })}>
      <img
        src="https://raw.githubusercontent.com/morajlab/morajlab-assets/master/assets/morajlab/images/logo/logo.svg"
        alt="Logo"
      />
    </div>
  );
};

export default Logo;
