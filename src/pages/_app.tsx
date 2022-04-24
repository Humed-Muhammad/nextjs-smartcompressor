import '../styles/global.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { Layout } from '@/layout/Meta';
import { configureAppStore } from '@/store/configureStore';
import { endpoint } from '@/utils/constants/constants';

const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
});
const MyApp = ({ Component, pageProps }: AppProps) => (
  <MantineProvider>
    <NotificationsProvider>
      <Provider store={configureAppStore()}>
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Provider>
    </NotificationsProvider>
  </MantineProvider>
);

export default MyApp;
