import React, { FunctionComponent } from 'react';
import ErrorPage from 'next/error';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { URL, extendProperties } from '../../utilities/.';
import type { ProjectPostAPIResponseProps, IProjectPost } from '../../types/.';
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
}> = ({ project, ...rest }) => {
  const router = useRouter();

  if (!router.isFallback && (!project || project?.type !== 'success')) {
    return <ErrorPage statusCode={404} />;
  }

  const { content, title } = project.content as Partial<IProjectPost>;

  return (
    <div
      {...extendProperties(rest, {
        className: 'user-select-none',
      })}
    >
      <NextHead>
        <title>{title}</title>
      </NextHead>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Project;
