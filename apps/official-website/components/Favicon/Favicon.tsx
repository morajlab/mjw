import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import type { IFaviconProps } from './Favicon.types';

export const Favicon: FunctionComponent<IFaviconProps> = ({ ...rest }) => {
  const path =
    'https://raw.githubusercontent.com/morajlab/morajlab-assets/master/assets/morajlab/images/favicon';

  return (
    <Head {...rest}>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${path}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${path}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${path}/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${path}/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`${path}/safari-pinned-tab.svg`}
        color="#750ebe"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content={`${path}/mstile-144x144.png`}
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default Favicon;
