import React, { FunctionComponent } from 'react';
import { Styles } from './index.styles';
import { Header, Projects, Technologies, Footer } from '../components/.';
import { extendProperties, URL } from '../utilities/.';
import type { IIndexPageProps } from './index.types';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (_context) => {
  console.log(new URL(process.env).getApiURL('project'));

  const response = await fetch(new URL(process.env).getApiURL('project'));
  const projects = await response.json();

  if (!projects) {
    return {
      notFound: true,
    };
  }

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
      <Projects projects={projects} />
      <Technologies />
      <Footer />
    </div>
  );
};

export default Index;
