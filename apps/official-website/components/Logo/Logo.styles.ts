import { css } from 'glamor';
import type { ILogoStyleProps } from './Logo.types';

export const Styles = ({}: ILogoStyleProps) => {
  return {
    root: css({
      backgroundColor: '#343a40',
      height: '1200px',
      paddingLeft: '130px',
      backgroundImage: 'url("./logo_outline.svg")',
      backgroundPosition: 'center',
      backgroundSize: '140%',
      ':after': {
        content: "''",
        position: 'absolute',
        left: '12px',
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background:
          'linear-gradient(0deg, #7d57f7, #9052ed, #9f4ee4, #ac49da, #b646d0, #bf43c7, #c541bd, #cb40b4)',
      },
      '& img': {
        width: '100%',
        height: '100%',
      },
    }),
  };
};

export default Styles;
