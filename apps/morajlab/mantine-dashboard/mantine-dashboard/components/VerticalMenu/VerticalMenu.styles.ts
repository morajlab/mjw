import type { IVerticalMenuStyleProps } from './VerticalMenu.types';

export const Styles = ({ collapsed }: IVerticalMenuStyleProps) => {
  return {
    menu: {
      body: collapsed
        ? {
            width: 'auto',
          }
        : {},
      label: {
        display: collapsed ? 'none' : 'block',
      },
      item: collapsed
        ? {
            width: 'auto',
            display: 'block',
          }
        : {
            borderRadius: '4px',
          },
      itemIcon: collapsed
        ? {
            margin: 0,
          }
        : {},
      itemBody: {
        display: collapsed ? 'none' : 'flex',
      },
    },
    tooltip: {
      body: {
        color: 'white',
      },
    },
  };
};

export default Styles;
