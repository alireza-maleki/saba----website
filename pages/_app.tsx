import "@/styles/globals.css";
import 'swiper/css';
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import {NextUIProvider} from "@nextui-org/react";
import Head from "next/head";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import "react-activity/dist/library.css";
import { Dots } from "react-activity";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      
       <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
        {/* <Dots />   */}
      </Layout>
    </NextUIProvider>
  );
}
