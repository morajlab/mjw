import { css } from 'glamor';
import type { IAboutUSStyleProps } from './AboutUS.types';

export const Styles = ({}: IAboutUSStyleProps) => {
  return {
    root: css({
      width: '100%',
      height: '100%',
      '& p': {
        fontSize: '1.5rem',
      },
    }),
  };
};

export default Styles;
