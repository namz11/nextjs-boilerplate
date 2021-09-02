import React from "react";
import type { AppProps } from "next/app";
// eslint-disable-next-line import/no-extraneous-dependencies
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
