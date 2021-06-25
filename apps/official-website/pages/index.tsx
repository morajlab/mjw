import React, { FunctionComponent } from 'react';
import { css } from 'glamor';
import { Head, Header, Projects, Technologies, Footer } from '../components/.';
import { extendProperties, URL } from '../utilities/.';
import type { GetServerSideProps } from 'next';
import type { ProjectPostAPIResponseProps } from '../types/.';

interface IIndexPageProps {
  projects?: ProjectPostAPIResponseProps;
  paths?: any;
}

interface IIndexPageStyleProps {}

export const getServerSideProps: GetServerSideProps = async (_context) => {
  const paths_response = await fetch(new URL().getApiURL('path'));
  const projects_response = await fetch(new URL().getApiURL('project'));
  const projects = await projects_response.json();
  const paths = await paths_response.json();

  if (paths.type !== 'success') {
    throw new Error(paths.content);
  }

  if (projects.type !== 'success') {
    throw new Error(projects.type);
  }

  return {
    props: { projects, paths },
  };
};

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
  paths,
  ...rest
}) => {
  const { root } = Styles({});
  const { FAVICON } = paths.content.IMAGES;

  return (
    <div
      {...root}
      {...extendProperties(rest, { className: 'user-select-none' })}
    >
      <Head basePath={FAVICON} />
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
