import React, { FunctionComponent } from 'react';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { URL } from '../../utilities/.';
import type { ProjectPostAPIResponseProps } from '../../types/.';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await fetch(new URL().getApiURL(`project/${params.slug}`));
  const project = await response.json();

  return {
    props: { project },
  };
};

export const Project: FunctionComponent<{
  project: ProjectPostAPIResponseProps;
}> = ({ project }) => {
  const router = useRouter();

  console.log(project);

  if (!router.isFallback && project.type !== 'success') {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore
      consectetur ea voluptatibus, maxime sapiente ad, ipsam totam saepe libero
      eaque illum fugiat est, vero veniam sunt ullam odio nam?
    </p>
  );
};

export default Project;
