import '../styles/globals.css';

import App, { AppContext, AppProps } from 'next/app';

import { loadLocaleData } from '../util/loadLocaleData';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context);

  const targetLocale = 'en-GB';
  
  await loadLocaleData(targetLocale);

  return {
    ...ctx
  };
}

export default MyApp
