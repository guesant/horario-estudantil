import { ApolloProvider } from "@apollo/client";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import { AppContextProvider } from "../components/AppContext/AppContext";
import { useApollo } from "../etc/domain/apollo/useApollo";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { initialQuery = {}, ...pageProps },
}: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <>
      <CssBaseline>
        <ApolloProvider client={client}>
          <AppContextProvider>
            <Component {...pageProps} />
          </AppContextProvider>
        </ApolloProvider>
      </CssBaseline>
    </>
  );
}
