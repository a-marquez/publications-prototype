import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../config/theme';
import createEmotionCache from '../config/createEmotionCache';

// Client-side cache shared for whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function App({ Component, pageProps, emotionCache=clientSideEmotionCache }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
