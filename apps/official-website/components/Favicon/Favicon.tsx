import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import { PATHS } from '../../lib/constants';
import type { IFaviconProps } from './Favicon.types';

export const Favicon: FunctionComponent<IFaviconProps> = ({ ...rest }) => {
  return (
    <Head {...rest}>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${PATHS.IMAGES.FAVICON}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${PATHS.IMAGES.FAVICON}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${PATHS.IMAGES.FAVICON}/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${PATHS.IMAGES.FAVICON}/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`${PATHS.IMAGES.FAVICON}/safari-pinned-tab.svg`}
        color="#750ebe"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content={`${PATHS.IMAGES.FAVICON}/mstile-144x144.png`}
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default Favicon;
