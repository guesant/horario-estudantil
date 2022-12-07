import { ApolloProvider } from '@apollo/client';
import Backdrop from '@mui/material/Backdrop';
import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect, useState } from 'react';
import { ExplorerContextProvider } from '../components/ExplorerContext/ExplorerContext';
import { ExplorerRoutingContextProvider } from '../components/ExplorerRoutingContext/ExplorerRoutingContext';
import { useApollo } from '../etc/infraestructure/apollo/useApollo';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import AuthGuard from '../components/AuthGuard/AuthGuard';
import { IAppPage } from '../etc/domain/app/pages/IAppPage';

type IAppProps = AppProps & { Component: IAppPage };

export default function App({ Component, pageProps }: IAppProps) {
  const {
    session,
    initialQuery = {},
    initialApolloState,
    ...restPageProps
  } = pageProps;

  const router = useRouter();

  const client = useApollo(initialApolloState);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleStart = () => {
      NProgress.start();
      setIsLoading(true);
    };

    const handleStop = () => {
      NProgress.done();
      setIsLoading(false);
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
      <CssBaseline>
        <SessionProvider session={session}>
          <ApolloProvider client={client}>
            <Backdrop
              open={isLoading}
              onClick={() => void 0}
              sx={{
                zIndex: (theme) =>
                  Object.values(theme.zIndex).reduce(
                    (acc, i) => Math.max(acc, i),
                    0,
                  ) + 1,
              }}
            />

            <ExplorerRoutingContextProvider initialQuery={initialQuery}>
              <ExplorerContextProvider>
                <AuthGuard strict={Component.auth === true}>
                  <Component {...restPageProps} />
                </AuthGuard>
              </ExplorerContextProvider>
            </ExplorerRoutingContextProvider>
          </ApolloProvider>
        </SessionProvider>
      </CssBaseline>
    </>
  );
}
