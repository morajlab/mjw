import type { ISearchInputStyleProps } from './SearchInput.types';

export const Styles = ({ focused }: ISearchInputStyleProps) => {
  return {
    textInput: {
      root: {
        width: `${focused ? 400 : 200}px`,
        transition: 'all 0.1s ease-in-out',
      },
    },
    rightSection: {},
  };
};

export default Styles;
