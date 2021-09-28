import type { ITopBarStyleProps } from './TopBar.types';

export const Styles = ({ theme }: ITopBarStyleProps) => {
  return {
    paper: {
      backgroundColor: theme.colors.dark[6],
    },
  };
};

export default Styles;
