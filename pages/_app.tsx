import "@/styles/fonts.css";
import "@/styles/globals.css";
import "@/styles/Hero.css";
import "@/styles/intro.css";
import "@/styles/services.css"; // Add this line
import "@/styles/process.css"; // Add this line
import "@/styles/featured.css"; // Add this line
import "@/styles/testimonials.css"; // Add this line
import "@/styles/footer.css"; 
import "@/styles/pricing.css"; 
import "@/styles/nav-bar.css"; 







import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
