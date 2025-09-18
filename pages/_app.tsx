import '../styles/globals.css';
import '../Hero.css';
import '../styles/intro.css';
import '../styles/services.css';
import '../styles/process.css';
import '../styles/featured.css';
import '../styles/testimonials.css';
import '../styles/footer.css';
import '../styles/pricing.css';
import '../styles/nav-bar.css';
import '../styles/faq.css';








import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
