import { css } from 'glamor';
import type { IFooterStyleProps } from './Footer.types';

export const Styles = ({}: IFooterStyleProps) => {
  return {
    root: css({
      borderTop: '1px solid rgba(255,255,255,0.2)',
    }),
    icons: css({
      fontSize: '1.5rem',
      '& i': {
        paddingRight: '0.3rem',
        paddingLeft: '0.3rem',
        '&:last-of-type': {
          paddingRight: 0,
        },
      },
    }),
  };
};

export default Styles;
