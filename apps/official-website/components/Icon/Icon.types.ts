import { HTMLAttributes } from 'react';

export interface IIconProps extends HTMLAttributes<HTMLDivElement> {
  name: string | string[];
  size?: string;
}
export interface IIconStyleProps {
  svg: string;
  size?: IIconProps['size'];
  color?: string;
}
