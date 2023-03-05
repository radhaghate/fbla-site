import '@/styles/globals.css'
import { useEffect } from 'react';
import Aos from 'aos';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  // weight: '400'
})

export default function App({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({
      // once: true,
      duration: 1000
    });
  }, []);

  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  )
}
