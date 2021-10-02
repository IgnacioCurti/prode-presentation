import React from "react";
import { AppProps } from "next/app";
import LocalizationContextProvider from "@app/contexts/localization";
import NavigationContextProvider from "@app/contexts/navigation";
import useRealViewportHeight from "@app/hooks/useRealViewportHeight";
import Layout from "@app/components/Layout";
import "@app/styles/main.scss";

/**
 * App component
 */
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    useRealViewportHeight();

    return (
        <LocalizationContextProvider>
            <NavigationContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </NavigationContextProvider>
        </LocalizationContextProvider>
    );
}
