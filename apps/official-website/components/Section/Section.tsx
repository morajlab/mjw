import React, { FunctionComponent } from 'react';
import { Container } from 'shards-react';
import { extendProperties } from '../../utilities/.';
import type { ISectionProps } from './Section.types';

export const Section: FunctionComponent<ISectionProps> = ({ ...rest }) => (
  <Container fluid {...extendProperties(rest, { className: 'p-5' })} />
);

export default Section;
