import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Nav from '../components/navbar'
import Footer from '../components/footer'
import FAQ from '../components/faq'

const Home = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Nav className='h-10'></Nav>
      <div className='mb-auto'>
      <Image src="/howItWorks.jpg" alt="HowItWorks" width={1920} height={500} />
        <div className=''>
          <div className=''>The Mission</div>
          <div className=''>Why Us?</div>
        </div>
      </div>
      <FAQ className=''></FAQ>
      <Footer className='h-10'></Footer>
    </div>
  );
}

export default Home;