import React, { FunctionComponent } from 'react';
import { Section, Heading } from '..';
import { extendProperties } from '../../utilities/.';
import { Card, CardTitle, CardImg, CardBody, Button } from 'shards-react';
import { Styles, ProjectStyles } from './Projects.styles';
import type { IProjectsProps, IProjectProps } from './Projects.types';
import type { IProjectPost } from '../../types/.';

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
        <a href={link}>
          <Button className="position-relative" squared>
            Read more
          </Button>
        </a>
      </CardBody>
    </Card>
  );
};

export const Projects: FunctionComponent<IProjectsProps> = ({
  projects,
  ...rest
}) => {
  const { root } = Styles({});

  return (
    <Section
      {...root}
      {...extendProperties(rest, {
        className: 'position-relative',
      })}
    >
      <Heading content="Our projects" />
      <p className="text-light">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
        similique culpa est fugit qui odio omnis, ratione, eligendi quo
        quibusdam explicabo, quod doloribus perferendis? Eaque ipsam fugiat
        temporibus magnam perferendis?
      </p>
      <div className="row row-cols-3">
        {(projects as Partial<IProjectPost>[]).map(
          ({ title, coverImage, excerpt, link }, index) => (
            <div className="col" key={index}>
              <Project
                className="mx-2 my-5 w-100"
                image={coverImage}
                title={title}
                description={excerpt}
                link={link}
                nth={index}
              />
            </div>
          )
        )}
      </div>
    </Section>
  );
};

export default Projects;
