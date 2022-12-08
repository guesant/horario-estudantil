import { ApolloProvider } from '@apollo/client';
import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect, useState } from 'react';
import { useApollo } from '../etc/apollo/useApollo';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import AuthGuard from '../components/AuthGuard/AuthGuard';
import { IAppPage } from '../etc/app/pages/IAppPage';
import dynamic from 'next/dynamic';

const Backdrop = dynamic(() => import('@mui/material/Backdrop'), {
  ssr: false,
});

type IAppProps = AppProps & { Component: IAppPage };

export default function App({ Component, pageProps }: IAppProps) {
  const { session, initialApolloState, ...restPageProps } = pageProps;

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
        <ApolloProvider client={client}>
          <SessionProvider session={session}>
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

            <AuthGuard strict={Component.auth === true}>
              <Component {...restPageProps} />
            </AuthGuard>
          </SessionProvider>
        </ApolloProvider>
      </CssBaseline>
    </>
  );
}
