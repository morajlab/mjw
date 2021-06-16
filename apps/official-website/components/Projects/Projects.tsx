import React, { FunctionComponent } from 'react';
import { Section, Heading } from '..';
import { extendProperties } from '../../utilities/.';
import { Card, CardTitle, CardImg, CardBody, Button } from 'shards-react';
import { Styles, ProjectStyles } from './Projects.styles';
import type { IProjectsProps, IProjectProps } from './Projects.types';

export const Project: FunctionComponent<IProjectProps> = ({
  image,
  title,
  description,
  link,
  nth = 0,
  ...rest
}) => {
  const { root, img } = ProjectStyles({ nth });

  return (
    <Card {...root} {...extendProperties(rest, { className: 'text-white' })}>
      <div className="bg-white rounded-circle p-2 shadow" {...img}>
        <CardImg src={image} className="w-100" />
      </div>
      <CardBody>
        <CardTitle className="text-white">{title}</CardTitle>
        <p>{description}</p>
        <Button>Read more</Button>
      </CardBody>
    </Card>
  );
};

export const Projects: FunctionComponent<IProjectsProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return (
    <Section className="d-flex flex-wrap position-relative" {...root} {...rest}>
      <Heading content="Our projects" />
      <p className="text-light">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
        similique culpa est fugit qui odio omnis, ratione, eligendi quo
        quibusdam explicabo, quod doloribus perferendis? Eaque ipsam fugiat
        temporibus magnam perferendis?
      </p>
      {Array(6)
        .fill(0)
        .map((_value, index) => {
          return (
            <Project
              className="mx-2 my-5 flex-grow-1 flex-shrink-1"
              image="./projects/electronos.png"
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet."
              link="#!"
              key={index}
              nth={index}
            />
          );
        })}
    </Section>
  );
};

export default Projects;
