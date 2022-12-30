import { ApolloProvider } from '@apollo/client';
import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';
import 'nprogress/nprogress.css';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import AuthGuard from '../components/AuthGuard/AuthGuard';
import Head from 'next/head';
import { useNProgress } from '../components/useNProgress';
import { buildPageTitle, IAppPage } from '../infrastructure';
import { useApollo } from '../api/useApollo';
import { AuthContextProvider } from '../components/AuthContext/AuthContext';

type IAppProps = AppProps & { Component: IAppPage };

export default function App({ Component, pageProps }: IAppProps) {
  const { session, initialApolloState, ...restPageProps } = pageProps;

  const client = useApollo(initialApolloState);

  useNProgress();

  return (
    <>
      <Head>
        <title>{buildPageTitle([])}</title>
      </Head>

      <CssBaseline>
        <ApolloProvider client={client}>
          <SessionProvider
            session={session}
            refetchWhenOffline={false}
            refetchOnWindowFocus={true}
          >
            <AuthContextProvider>
              <AuthGuard strict={Component.auth === true}>
                <Component {...restPageProps} />
              </AuthGuard>
            </AuthContextProvider>
          </SessionProvider>
        </ApolloProvider>
      </CssBaseline>
    </>
  );
}
