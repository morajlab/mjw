import { css } from 'glamor';
import tile1 from '../../public/tile1.svg';
import type { IHeadingStyleProps } from './Heading.types';

export const Styles = ({}: IHeadingStyleProps) => {
  return {
    root: css({
      position: 'relative',
      zIndex: 1,
      '&:before': {
        content: `url('${tile1}')`,
        display: 'block',
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
