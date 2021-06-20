import type { HTMLAttributes } from 'react';
import type { IProjectPost } from '../../types/project';

export interface IProjectProps extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  title: string;
  description: string;
  link: string;
  nth?: number;
}
export interface IProjectsProps extends HTMLAttributes<HTMLDivElement> {
  projects?: Partial<IProjectPost>[];
}
export interface IProjectStyleProps {
  nth: IProjectProps['nth'];
}
export interface IProjectsStyleProps {}
