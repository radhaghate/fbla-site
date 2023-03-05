import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Nav from '../components/navbar'
import Footer from '../components/footer'
import BlogSection2 from '@/components/blogsection2';
import BlogSection1 from '@/components/blogsection1';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Nav className='h-10'></Nav>
      <div className='bg-[#fff4ec]'>
        <BlogSection1></BlogSection1>
        <hr className="border-2 border-white-700 drop-shadow-xl mx-auto w-3/5 mt-5"/>
        <BlogSection2></BlogSection2>
        <hr className="border-2 border-white-700 drop-shadow-xl mx-auto w-3/5 mt-5"/>

        <div className='grid grid-cols-2 mb-4 ml-24 mr-8 justify-items-center'>
          <div className='border-4 border-black mt-5 mb-5 ml-12 text-center p-12 w-fit bg-[#fff9f5]'>
            <h1 className='text-2xl font-bold mt-6 mb-2 ml-12 mr-12 text-left'>Join our newsletter</h1>
            <p className='text-lg mb-2 ml-12 mr-12 text-left'>Subscribe to our newsletter to recieve <br></br>updates on the center.</p>
            <form className="w-full max-w-sm align-left">
              <div className="flex ml-10 items-center border-b border-teal-500 py-2">
                <input 
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                type="text" 
                placeholder="Enter your email" 
                aria-label="Email"/>
              </div>
            </form>
            <button className="mt-4 w-80 btn text-black hover:text-white hover:bg-black text-l" type="button">
                  Subscribe
            </button>
          </div>
          <div className='mr-72'><Image src="/resources-owlreading.png" alt="OLC Owl Reading" height={500} width={500}/></div>   {/* image here */}
        </div>
      </div>
      <Footer className='h-10'></Footer>
    </div>
  );
}

export default Home;