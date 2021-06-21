import React, { FunctionComponent } from 'react';
import { Styles } from './index.styles';
import { Header, Projects, Technologies, Footer } from '../components/.';
import { extendProperties, URL } from '../utilities/.';
import type { IIndexPageProps } from './index.types';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (_context) => {
  const response = await fetch(new URL().getApiURL('project'));
  const projects = await response.json();

  return {
    props: { projects },
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
      <Header />
      {projects?.type === 'success' ? <Projects projects={projects} /> : null}
      <Technologies />
      <Footer />
    </div>
  );
};

export default Index;
