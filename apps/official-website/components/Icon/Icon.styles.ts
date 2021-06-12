import { css } from 'glamor';
import svgToDataURL from 'svg-to-dataurl';
import type { IIconStyleProps } from './Icon.types';

export const addColorToSvg = (svg: string, color: string): string =>
  svg.replace('<path', `<path fill="${color}"`);

export const Styles = ({ svg, size, color }: IIconStyleProps) => {
  const iconSize: string = size ?? '30px';
  const iconColor: string = color ?? '#000000';

  return {
    root: css({
      display: 'inline-block',
      fontStyle: 'normal',
      fontVariant: 'normal',
      textRendering: 'auto',
      lineHeight: '1',
      ':before': {
        content: `url('${svgToDataURL(addColorToSvg(svg, iconColor))}')`,
        display: 'block',
        width: iconSize,
        height: iconSize,
      },
    }),
  };
};

export default Styles;
