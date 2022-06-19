import '../styles/global.css';

import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { Layout } from '@/layout';
import { configureAppStore } from '@/store/configureStore';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MantineProvider>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3652123808889795"
        crossOrigin="anonymous"
      ></script>
    </Head>
    <NotificationsProvider>
      <Provider store={configureAppStore()}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </Provider>
    </NotificationsProvider>
  </MantineProvider>
);

export default MyApp;
