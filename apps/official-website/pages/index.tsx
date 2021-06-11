import React, { FunctionComponent } from 'react';
import { Styles } from './index.styles';
import { Header } from '../components/.';
import type { IIndexPageProps } from './index.types';

export const Index: FunctionComponent<IIndexPageProps> = ({}) => {
  const { root } = Styles({});

  return (
    <div className="user-select-none position-fixed" {...root}>
      <Header />
    </div>
  );
};

export default Index;
