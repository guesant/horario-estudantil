import { ApolloProvider } from '@apollo/client';
import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { useApollo } from '../api/apollo/useApollo';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import AuthGuard from '../components/AuthGuard/AuthGuard';
import { IAppPage } from '../etc/pages/IAppPage';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { buildPageTitle } from '../etc/skeleton/buildPageTitle';

const Backdrop = dynamic(() => import('@mui/material/Backdrop'), {
  ssr: false,
});

type IAppProps = AppProps & { Component: IAppPage };

export default function App({ Component, pageProps }: IAppProps) {
  const { session, initialApolloState, ...restPageProps } = pageProps;

  const router = useRouter();

  const client = useApollo(initialApolloState);

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleStart = () => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

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
            <AuthGuard strict={Component.auth === true}>
              <Component {...restPageProps} />
            </AuthGuard>
          </SessionProvider>
        </ApolloProvider>
      </CssBaseline>
    </>
  );
}
