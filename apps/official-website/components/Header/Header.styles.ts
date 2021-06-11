import { css } from 'glamor';
import type { IHeaderStyleProps } from './Header.types';

export const Styles = ({}: IHeaderStyleProps) => {
  return {
    root: css({}),
    caption: css({
      background:
        'linear-gradient(90deg, rgb(90, 24, 154, 0.4) 0%, rgba(255,255,255,1) 70%, rgba(255,255,255,1) 100%)',
    }),
    slogan: css({
      fontSize: '1.5rem',
    }),
  };
};

export default Styles;
