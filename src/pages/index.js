import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Nav from '../components/navbar'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Nav className='h-10'></Nav>
      <div>

      </div>
      <Footer className='h-10'></Footer>
    </div>
  );
}

export default Home;