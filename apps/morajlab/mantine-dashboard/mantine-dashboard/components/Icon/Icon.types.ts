import type { IMantineComponentCommonProps } from '../../types';

export interface IIconProps extends IMantineComponentCommonProps {
  component: (props?: any) => JSX.Element;
  size?: number;
}

export interface IIconStyleProps {
  size: IIconProps['size'];
}
