import { css } from 'glamor';
import type { IHeadingStyleProps } from './Heading.types';

export const Styles = async ({}: IHeadingStyleProps) => {
  return {
    root: css({
      position: 'relative',
      zIndex: 1,
      '&:before': {
        display: 'block',
        content: `url('https://raw.githubusercontent.com/morajlab/morajlab-assets/master/assets/illustration/tiles/tile1.svg')`,
        position: 'absolute',
        width: '50px',
        height: '50px',
        zIndex: -1,
        left: '-15px',
        top: '-8px',
      },
    }),
  };
};

export default Styles;
