import React, { FunctionComponent } from 'react';
import { Styles } from './index.styles';
import { Header, Projects, Technologies, Footer } from '../components/.';
import { extendProperties } from '../utilities/.';
import type { IIndexPageProps } from './index.types';

export const Index: FunctionComponent<IIndexPageProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return (
    <div
      {...root}
      {...extendProperties(rest, { className: 'user-select-none' })}
    >
      <Header />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
};

export default Index;
