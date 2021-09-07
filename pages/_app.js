import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../redux/store";
import GlobalStyle from "../styles/global";

import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="next app dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
