import { css } from 'glamor';
import type { ITechnologiesStyleProps } from './Technologies.types';

export const Styles = ({}: ITechnologiesStyleProps) => {
  return {
    root: css({}),
    icons: {
      color: 'rgba(13, 13, 13, 0.3)',
    },
    iconsContainer: css({
      position: 'relative',
      ':before': {
        content: "''",
        display: 'block',
        position: 'absolute',
        margin: '-10rem',
        inset: 0,
        boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',
        background:
          'radial-gradient(circle, transparent 0%, rgba(0,0,0,0.3) 100%)',
      },
    }),
    heading: css({
      '&:before': {
        transform: 'rotate(50deg)',
      },
    }),
  };
};

export default Styles;
