import { type AppType } from "next/app";
import Head from "next/head";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Xitter</title>
        <meta name="description" content="🐺 💭" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClerkProvider {...pageProps}>
        <Toaster position="bottom-center" />
        <Component {...pageProps} />
      </ClerkProvider>
    </>
  );
};
export default api.withTRPC(MyApp);
