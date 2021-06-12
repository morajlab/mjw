import React, { FunctionComponent } from 'react';
import { Styles } from './index.styles';
import { Header, Technologies } from '../components/.';
import type { IIndexPageProps } from './index.types';

export const Index: FunctionComponent<IIndexPageProps> = ({}) => {
  const { root } = Styles({});

  return (
    <div className="user-select-none" {...root}>
      <Header />
      <Technologies />
    </div>
  );
};

export default Index;
