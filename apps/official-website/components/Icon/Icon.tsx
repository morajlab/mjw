import React, { FunctionComponent } from 'react';
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
    color: (rest as any)?.style?.color,
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
    <div>
      {name.map((value, index) => (
        <SvgRenderer svg={Get(value).svg} size={size} key={index} {...rest} />
      ))}
    </div>
  );
};

export default Icon;
