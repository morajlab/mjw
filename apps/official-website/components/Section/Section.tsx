import React, { FunctionComponent } from 'react';
import { Container } from 'shards-react';
import type { ISectionProps } from './Section.types';

export const Section: FunctionComponent<ISectionProps> = ({ ...rest }) => {
  return (
    <Container
      fluid
      {...Object.assign(rest, {
        className: `${rest.className ?? ''} p-5`.trim(),
      })}
    />
  );
};

export default Section;
