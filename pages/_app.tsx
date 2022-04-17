import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import * as Containers from "../containers";
import "react-datepicker/dist/react-datepicker.css";
import { Provider } from "react-redux";
import { Store } from "../redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider attribute="class">
    // <Containers.Layout>
    <Provider store={Store.store}>
      <Component {...pageProps} />
    </Provider>
    // </Containers.Layout>
    // </ThemeProvider>
  );
}

export default MyApp;
