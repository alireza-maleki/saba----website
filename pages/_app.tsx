import "@/styles/globals.css";
import 'swiper/css';
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import {NextUIProvider} from "@nextui-org/react";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}
