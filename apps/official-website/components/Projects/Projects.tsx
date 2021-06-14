import React, { FunctionComponent } from 'react';
import { Section } from '..';
import { Styles } from './Projects.styles';
import type { IProjectsProps } from './Projects.types';

export const Projects: FunctionComponent<IProjectsProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return (
    <Section {...root} {...rest}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, iste!
      Nemo reiciendis suscipit omnis delectus odit in vero ad facilis voluptatum
      eligendi non numquam, debitis ut harum voluptate? Illum, facere.
    </Section>
  );
};

export default Projects;
