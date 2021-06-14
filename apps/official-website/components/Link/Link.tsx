import React, { forwardRef } from 'react';
import { Styles } from './Link.styles';
import type { ILinkProps } from './Link.types';

export const Link = forwardRef<HTMLAnchorElement, ILinkProps>(
  ({ ...rest }, ref) => <a ref={ref} {...Styles({}).root} {...rest} />
);

export default Link;
