import React, { createElement, FunctionComponent, Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import { Get } from 'simple-icons';
import { Styles } from './Icon.styles';
import type { IIconProps } from './Icon.types';

export const SvgRenderer: FunctionComponent<{ svg: string; size?: string }> = ({
  svg,
  size,
  ...rest
}) => {
  const { root } = Styles({
    svg,
    size,
  });

  return <i {...Object.assign(rest, { style: { color: null } })} {...root}></i>;
};

export const Icon: FunctionComponent<IIconProps> = ({
  name,
  size,
  ...rest
}) => {
  if (typeof name === 'string') {
    return <SvgRenderer svg={Get(name).svg} size={size} {...rest} />;
  }

  return (
    <Fragment>
      {name.map(({ name, ...svgRest }, index) => {
        const { path, title } = Get(name);
        const svg: string = renderToString(
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            key={index}
          >
            <title>{title}</title>
            {createElement('path', {
              d: path,
              ...Object.assign(
                {},
                {
                  ...svgRest,
                  ...{
                    fill:
                      svgRest?.fill ?? (rest as any)?.style?.color ?? '#000000',
                  },
                }
              ),
            })}
          </svg>
        );

        return <SvgRenderer svg={svg} size={size} key={index} {...rest} />;
      })}
    </Fragment>
  );
};

export default Icon;
