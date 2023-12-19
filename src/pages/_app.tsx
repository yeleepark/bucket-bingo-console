import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactNode, useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import createEmotionCache from '@theme/createEmotionCache';
import theme from '@theme/theme';

type Page<P = object> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: Page;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = createEmotionCache(), pageProps } = props;
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      }),
  );
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </QueryClientProvider>
    </CacheProvider>
  );
}
