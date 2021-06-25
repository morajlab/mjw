import type { HTMLAttributes } from 'react';
import type { ProjectPostAPIResponseProps } from '../../types/.';

export interface IProjectProps extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  title: string;
  description: string;
  link: string;
  nth?: number;
}

export interface IProjectsProps extends HTMLAttributes<HTMLDivElement> {
  projects: ProjectPostAPIResponseProps['content'];
}

export interface IProjectStyleProps {
  nth: IProjectProps['nth'];
}

export interface IProjectsStyleProps {}
