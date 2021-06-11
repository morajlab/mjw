import { css } from 'glamor';
import type { IIndexPageStyleProps } from './index.types';

export const Styles = ({}: IIndexPageStyleProps) => {
  return {
    root: css({
      background: 'url("./tiler.svg")',
      inset: 0,
    }),
  };
};

export default Styles;
