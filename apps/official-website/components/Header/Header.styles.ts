import type { IHeaderStyleProps } from './Header.types';

export const Styles = ({}: IHeaderStyleProps) => {
  return {
    root: {},
    caption: {
      backgroundColor: 'rgba(86,61,124,0.15)',
      border: '1px solid rgba(86,61,124,0.15)',
    },
  };
};

export default Styles;
