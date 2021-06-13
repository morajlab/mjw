import { css } from 'glamor';
import svgToDataURL from 'svg-to-dataurl';
import type { IIconStyleProps } from './Icon.types';

export const Styles = ({ svg, size }: IIconStyleProps) => {
  const iconSize: string = size ?? '30px';

  return {
    root: css({
      display: 'inline-block',
      fontStyle: 'normal',
      fontVariant: 'normal',
      textRendering: 'auto',
      lineHeight: '1',
      ':before': {
        content: `url('${svgToDataURL(svg)}')`,
        display: 'block',
        width: iconSize,
        height: iconSize,
      },
    }),
  };
};

export const BootstrapIconStyles = ({}: Partial<IIconStyleProps>) => {
  return { root: css({}) };
};

export default Styles;
