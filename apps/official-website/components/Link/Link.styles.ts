import { css } from 'glamor';
import type { ILinkStyleProps } from './Link.types';

export const Styles = ({}: ILinkStyleProps) => {
  return {
    root: css({
      transition: 'all 250ms cubic-bezier(.27,.01,.38,1.06)',
      color: 'rgba(255,255,255,0.8)',
      ':hover': {
        color: '#ffffff',
      },
    }),
  };
};

export default Styles;
