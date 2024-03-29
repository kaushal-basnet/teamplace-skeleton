import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { appWithTranslation } from "next-i18next";
function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
