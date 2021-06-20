import React from 'react';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

const Project = ({ project }) => {
  const router = useRouter();

  if (!router.isFallback && !project?.slug) {
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
