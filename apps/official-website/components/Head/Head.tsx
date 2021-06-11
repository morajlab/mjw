import React, { FunctionComponent, Fragment } from 'react';
import NextHead from 'next/head';
import { Favicon } from '..';
import type { IHeadProps } from './Head.types';

export const Head: FunctionComponent<IHeadProps> = ({}) => {
  return (
    <Fragment>
      <NextHead key="mainHead">
        <title>Morajlab official website</title>
      </NextHead>
      <Favicon key="faviconHead" />
    </Fragment>
  );
};

export default Head;
