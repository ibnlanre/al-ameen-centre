import { AppProps } from "next/app";
import { Mulish } from "next/font/google";

import "../styles/globals.css";

const mulish = Mulish({ subsets: ["latin"] });

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <main className={mulish.className}>
      <Component {...pageProps} />
    </main>
  );
}
