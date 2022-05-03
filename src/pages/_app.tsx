import '../styles/global.css';

import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import { Layout } from '@/layout/Meta';
import { configureAppStore } from '@/store/configureStore';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MantineProvider>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    </Head>
    <NotificationsProvider>
      <Provider store={configureAppStore()}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </NotificationsProvider>
  </MantineProvider>
);

export default MyApp;
