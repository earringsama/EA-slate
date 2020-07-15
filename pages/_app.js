import * as React from "react";

import { CacheProvider, Global } from "@emotion/react";
import { cache } from "@emotion/css";

import App from "next/app";
import {
  injectGlobalStyles,
  injectTooltipStyles,
} from "~/common/styles/global";

import "./css/prism.css";

// NOTE(wwwjim):
// https://nextjs.org/docs/advanced-features/custom-app
function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <Global styles={injectGlobalStyles()} />
      <Global styles={injectTooltipStyles()} />
      <Component {...pageProps} />
    </CacheProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
