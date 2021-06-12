import { HTMLAttributes, SVGAttributes } from 'react';

export interface IIconSVGProps extends SVGAttributes<SVGPathElement> {
  name: string;
}

export interface IIconProps extends HTMLAttributes<HTMLDivElement> {
  name: string | IIconSVGProps[];
  size?: string;
}
export interface IIconStyleProps {
  svg: string;
  size?: IIconProps['size'];
}
