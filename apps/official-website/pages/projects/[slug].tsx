import React from 'react';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import { markdownToHtml } from '../../utilities/markdownToHtml';
import type { IProject } from '../../types/project';

export interface IProjectProps {
  project: IProject;
}

const Project = ({ project }: IProjectProps) => {
  const router = useRouter();

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  console.log(project);

  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore
      consectetur ea voluptatibus, maxime sapiente ad, ipsam totam saepe libero
      eaque illum fugiat est, vero veniam sunt ullam odio nam?
    </p>
  );
};

export default Project;

export interface IGetStaticPropsFunctionProps {
  params: {
    slug: string;
  };
}

export const getStaticProps = async ({
  params,
}: IGetStaticPropsFunctionProps) => {
  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'content',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
};
