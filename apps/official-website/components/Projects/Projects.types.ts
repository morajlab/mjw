import type { HTMLAttributes } from 'react';

export interface IProjectProps extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  title: string;
  description: string;
  link: string;
  nth?: number;
}
export interface IProjectsProps {}
export interface IProjectStyleProps {
  nth: IProjectProps['nth'];
}
export interface IProjectsStyleProps {}
