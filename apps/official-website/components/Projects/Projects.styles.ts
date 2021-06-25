import { css } from 'glamor';
import type { IProjectStyleProps, IProjectsStyleProps } from './Projects.types';

export const Styles = ({}: IProjectsStyleProps) => {
  return {
    root: css({
      '&:before': {
        content: '""',
        background: 'url("./tile2.svg")',
        backgroundPosition: 'center',
        position: 'absolute',
        inset: 0,
        opacity: 0.3,
      },
    }),
  };
};

export const ProjectStyles = ({ nth }: IProjectStyleProps) => {
  let bgNumber: number = 6;

  return {
    root: css({
      borderRadius: 0,
      boxShadow: 'none',
      backgroundColor: 'transparent',
      backgroundImage: `url("./tile${(nth % bgNumber) + 3}.svg")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '& button': {
        zIndex: 1,
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        top: '25%',
        left: '1rem',
        right: '1rem',
        bottom: '1rem',
        border: '1px dashed #fff',
        backgroundColor: 'rgba(255,255,255,0.1)',
      },
    }),
    img: css({
      width: '50%',
      zIndex: 1,
    }),
  };
};

export default Styles;
