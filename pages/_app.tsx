import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {ThemeProvider} from "next-themes";
import * as Containers from "../containers";
import "react-datepicker/dist/react-datepicker.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider attribute="class">
        // <Containers.Layout>
          <Component {...pageProps} />
        // </Containers.Layout>
    // </ThemeProvider>
  )
}

export default MyApp
