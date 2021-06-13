import { css } from 'glamor';
import type { INavbarStyleProps } from './Navbar.types';

export const Styles = ({}: INavbarStyleProps) => {
  return {
    root: css({
      '& a': {
        color: 'rgba(255,255,255,0.8)',
        position: 'relative',
        '&:before': {
          content: "''",
          transition: 'all 250ms cubic-bezier(.27,.01,.38,1.06)',
          width: 0,
          height: 0,
          background: 'transparent',
          display: 'block',
          borderRadius: '50px',
          position: 'absolute',
          bottom: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        ':hover': {
          color: '#ffffff',
          '&:before': {
            content: "''",
            width: '5px',
            height: '5px',
            background: 'red',
            display: 'block',
            borderRadius: '50px',
            position: 'absolute',
            bottom: '-3px',
            left: '50%',
            transform: 'translate(-50%)',
          },
        },
      },
    }),
  };
};

export default Styles;
