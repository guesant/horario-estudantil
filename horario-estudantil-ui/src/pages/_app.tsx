import { ApolloProvider } from "@apollo/client";
import Backdrop from "@mui/material/Backdrop";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useState } from "react";
import { AppContextProvider } from "../components/AppContext/AppContext";
import { AppRoutingContextProvider } from "../components/AppRoutingContext/AppRoutingContext";
import { useApollo } from "../etc/domain/apollo/useApollo";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { initialQuery = {}, ...pageProps },
}: AppProps) {
  const router = useRouter();

  const client = useApollo(pageProps.initialApolloState);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
      setIsLoading(true);
    };

    const handleStop = () => {
      NProgress.done();
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      <CssBaseline>
        <Backdrop
          open={isLoading}
          onClick={() => {}}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        />
        <ApolloProvider client={client}>
          <AppRoutingContextProvider initialQuery={initialQuery}>
            <AppContextProvider>
              <Component {...pageProps} />
            </AppContextProvider>
          </AppRoutingContextProvider>
        </ApolloProvider>
      </CssBaseline>
    </>
  );
}
