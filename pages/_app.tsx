import { AppProps } from "next/app";
import { Maven_Pro } from "next/font/google";

import "../styles/globals.css";

const maven_pro = Maven_Pro({ subsets: ["latin"] });

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <main className={maven_pro.className}>
      <Component {...pageProps} />
    </main>
  );
}
