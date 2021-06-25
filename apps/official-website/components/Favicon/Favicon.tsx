import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import type { IFaviconProps } from './Favicon.types';

export const Favicon: FunctionComponent<IFaviconProps> = ({
  basePath,
  ...rest
}) => {
  return (
    <Head {...rest}>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${basePath}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${basePath}/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`${basePath}/safari-pinned-tab.svg`}
        color="#750ebe"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content={`${basePath}/mstile-144x144.png`}
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default Favicon;
