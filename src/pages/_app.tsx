import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/global/Layout";
import { SessionProvider } from "next-auth/react"
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {

  return (

    <SessionProvider session={pageProps.session}>

      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>

    </SessionProvider>

  );
}
