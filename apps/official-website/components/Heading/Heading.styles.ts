import { css } from 'glamor';
import type { IHeadingStyleProps } from './Heading.types';

export const Styles = ({}: IHeadingStyleProps) => {
  return {
    root: css({
      position: 'relative',
      '&:before': {
        content: '',
        display: 'block',
        position: 'absolute',
      },
    }),
  };
};

export default Styles;
