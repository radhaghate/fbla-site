import '@/styles/globals.css'
import { useEffect } from 'react';
import Aos from 'aos';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({
      // once: true,
      duration: 1000
    });
  }, []);

  return <Component {...pageProps} />
}
