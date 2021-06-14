import React, { FunctionComponent } from 'react';
import { Styles } from './Heading.styles';
import { extendProperties } from '../../utilities/.';
import type { IHeadingProps } from './Heading.types';

export const Heading: FunctionComponent<IHeadingProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return (
    <h1
      {...root}
      {...extendProperties(rest, {
        children: rest.content,
        className: 'text-white fw-bolder',
      })}
    />
  );
};

export default Heading;
