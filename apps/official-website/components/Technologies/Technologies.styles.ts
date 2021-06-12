import { css } from 'glamor';
import type { ITechnologiesStyleProps } from './Technologies.types';

export const Styles = ({}: ITechnologiesStyleProps) => {
  return {
    root: css({}),
    icons: {
      color: '#eeeeee',
    },
  };
};

export default Styles;
