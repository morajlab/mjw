import React, { FunctionComponent } from 'react';
import { URL } from '../../utilities/.';
import Head from 'next/head';
import type { IFaviconProps } from './Favicon.types';

export const Favicon: FunctionComponent<IFaviconProps> = ({ ...rest }) => {
  const FAVICON_PATH = `${new URL().getWebsiteDomain()}/${
    process.env.IMAGES_FAVICON
  }`;

  return (
    <Head {...rest}>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${FAVICON_PATH}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${FAVICON_PATH}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${FAVICON_PATH}/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${FAVICON_PATH}/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`${FAVICON_PATH}/safari-pinned-tab.svg`}
        color="#750ebe"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content={`${FAVICON_PATH}/mstile-144x144.png`}
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default Favicon;
