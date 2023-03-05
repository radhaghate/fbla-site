import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Nav from '../components/navbar';
import Footer from '../components/footer';

import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
        <Nav></Nav>
        <div className='flex justify-center text-3xl font-bold py-8 underline underline-offset-8'>COPYRIGHT INFORMATION</div>
        <div className='flex justify-center m-10'>
            <iframe 
                className='w-4/6 h-96'
                src="https://docs.google.com/document/d/e/2PACX-1vSSy-rokkSTqsl2-MiWeP9bCD1qZ1WtVr2NoAuQswtblcJK9oVdzEEMS8-k9GvjMwEY5JvNbtJGGeth/pub?embedded=true">
            </iframe>
        </div>
        <Footer></Footer>
    </div>
    
  );
};

export default Home;