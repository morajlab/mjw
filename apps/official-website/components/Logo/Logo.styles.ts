import { css } from 'glamor';
import type { ILogoStyleProps } from './Logo.types';

export const Styles = ({}: ILogoStyleProps) => {
  return {
    root: css({
      backgroundColor: '#343a40',
      height: '1200px',
      backgroundImage: 'url("./logo_outline.svg")',
      backgroundPosition: 'center',
      backgroundSize: '140%',
      marginLeft: '-70px',
      ':before': {
        content: "''",
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(180deg, rgba(52, 58, 64, 0.6) 0%,rgba(52, 58, 64, 0.6) 50%, transparent 100%)',
        marginLeft: '-70px',
        marginRight: '-3rem',
        marginTop: '-3rem',
      },
      ':after': {
        content: "''",
        position: 'absolute',
        left: '-58px',
        top: 0,
        width: '100%',
        height: '100%',
        marginTop: '-3em',
        zIndex: -1,
        background:
          'linear-gradient(0deg, #7d57f7, #9052ed, #9f4ee4, #ac49da, #b646d0, #bf43c7, #c541bd, #cb40b4)',
      },
      '& img': {
        position: 'relative',
        width: '60%',
        paddingTop: '10rem',
        display: 'block',
        margin: 'auto',
      },
    }),
  };
};

export default Styles;
