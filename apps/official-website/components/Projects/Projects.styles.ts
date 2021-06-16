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
      minWidth: '400px',
      backgroundColor: 'transparent',
      backgroundImage: `url("./tile${(nth % bgNumber) + 3}.svg")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '& button': {
        borderRadius: 0,
      },
    }),
    img: css({
      width: '50%',
    }),
  };
};

export default Styles;
