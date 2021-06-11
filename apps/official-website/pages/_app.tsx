import React from 'react';
import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './styles.module.scss';

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default CustomApp;
