import React, { FunctionComponent } from 'react';
import { css } from 'glamor';
import { Head, Header, Projects, Technologies, Footer } from '../components/.';
import { extendProperties } from '../utilities/.';
import type { ProjectPostAPIResponseProps } from '../types/.';

interface IIndexPageProps {
  projects?: ProjectPostAPIResponseProps;
}

interface IIndexPageStyleProps {}

const Styles = ({}: IIndexPageStyleProps) => {
  return {
    root: css({
      backgroundColor: '#343a40',
      overflow: 'hidden',
    }),
  };
};

export const Index: FunctionComponent<IIndexPageProps> = ({
  projects,
  ...rest
}) => {
  const { root } = Styles({});

  return (
    <div
      {...root}
      {...extendProperties(rest, { className: 'user-select-none' })}
    >
      <Head />
      <Header />
      {projects?.type === 'success' && (projects as any).projectsCount > 0 ? (
        <Projects projects={projects.content} />
      ) : null}
      <Technologies />
      <Footer />
    </div>
  );
};

export default Index;
