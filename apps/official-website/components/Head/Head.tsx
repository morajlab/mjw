import React, { FunctionComponent, Fragment } from 'react';
import NextHead from 'next/head';
import { Favicon } from '..';
import type { IHeadProps } from './Head.types';

export const Head: FunctionComponent<IHeadProps> = ({ basePath, ...rest }) => {
  return (
    <Fragment {...rest}>
      <NextHead key="mainHead">
        <title>Morajlab home</title>
      </NextHead>
      <Favicon basePath={basePath} key="faviconHead" />
    </Fragment>
  );
};

export default Head;
