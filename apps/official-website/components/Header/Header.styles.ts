import { css } from 'glamor';
import type { IHeaderStyleProps } from './Header.types';

export const Styles = ({}: IHeaderStyleProps) => {
  return {
    root: css({}),
    caption: css({
      background:
        'linear-gradient(-95deg, #750ebe 0%, rgb(171, 71, 241, 0.3) 90%, rgba(255,255,255,1) 100%)',
      '& h1': {
        lineHeight: '1.3',
      },
    }),
    slogan: css({
      fontSize: '1.5rem',
    }),
    leftCol: css({
      zIndex: '2',
    }),
    firstLeftLayer: css({
      background: '#ffffff',
      marginLeft: '-50px',
      padding: '10px',
    }),
    secondLeftLayer: css({
      background:
        'linear-gradient(-95deg, #750ebe 0%, rgba(255,255,255,1) 90%, rgba(255,255,255,1) 100%)',
      padding: '10px',
    }),
    thirdLeftLayer: css({
      background: '#ffffff',
      paddingLeft: '80px',
      paddingBottom: '80px',
      paddingTop: '80px',
      paddingRight: '0px',
    }),
    rightCol: css({
      zIndex: '1',
    }),
  };
};

export default Styles;
