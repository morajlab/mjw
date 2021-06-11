import { css } from 'glamor';
import type { IIndexPageStyleProps } from './index.types';

export const Styles = ({}: IIndexPageStyleProps) => {
  return {
    root: css({
      backgroundColor: '#343a40',
      overflow: 'hidden',
    }),
  };
};

export default Styles;
