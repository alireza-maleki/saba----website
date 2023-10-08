import "@/styles/globals.css";
import 'swiper/css';
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import {NextUIProvider} from "@nextui-org/react";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import "react-activity/dist/library.css";
import { Dots } from "react-activity";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
        {/* <Dots />   */}
      </Layout>
    </NextUIProvider>
  );
}
