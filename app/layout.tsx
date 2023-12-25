import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import { DoubleHeader } from "./components/DoubleHeader/DoubleHeader";
import { FooterSocial } from "./components/FooterSocial/FooterSocial";

export const metadata = {
  title: "UMass Club Golf",
  description: "NCCGA Club Golf Team at UMass Amherst",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <DoubleHeader />
          {children}
          <FooterSocial />
        </MantineProvider>
      </body>
    </html>
  );
}
