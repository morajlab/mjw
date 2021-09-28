import type { IIconStyleProps } from './Icon.types';

export const Styles = ({ size }: IIconStyleProps) => {
  const _size = size ?? 14;

  return {
    width: `${_size}px`,
    height: `${_size}px`,
  };
};

export default Styles;
