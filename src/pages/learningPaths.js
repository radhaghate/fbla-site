import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Nav from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <div className='bg-[#fff4ec]'>
    <div className='flex flex-col h-screen justify-between'>
      <Nav className='h-10'></Nav>
      <div className='text-center text-3xl font-bold mt-7'>Choose A Path</div>
      <hr className="border-2 border-white-700 drop-shadow-xl mx-auto w-1/5 mt-5"/>
        <div className='bg-[#fff4ec] grid grid-rows-2 grid-cols-6 justify-center align-center align-middle m-auto mt-9 mb-9 ml-60 gap-6 h-auto'>
          <div className='col-start-1 col-span-2'>
            <div className='bg-sky-900 w-full h-full'>
              <div className='flex text-white text-2xl justify-center pt-20'>MATH & READING</div>
              <button className="flex justify-center button p-7 bg-sky-800 mt-12 ml-28 rounded-xl text-white text-bold text-xl 
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <Link href="/mathAndreading">Learn More</Link>
              </button>
            </div>
          </div>
          <div className='col-start-3 col-span-3 relative'><Image src="/learningpaths-math.jpg" alt="HowItWorks" height={500} width={700}/></div>
          <div className='col-start-1 col-span-3 relative'><Image src="/learningpaths-testprep.jpg" alt="Learning Paths" fill></Image></div>
          <div className='col-start-4 col-span-2'>
            <div className='bg-sky-900 w-full h-full'>
              <div className='flex text-white text-2xl justify-center pt-20'>STANDARDIZED TESTING</div>
              <button className='flex justify-center button p-7 bg-sky-800 mt-12 ml-28 rounded-xl text-white text-bold text-xl 
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                <Link href="/standardTesting">Learn More</Link>
              </button>
            </div>
          </div>
        </div>
      <Footer className='h-10'></Footer>
    </div>
    </div>
  );
}

export default Home;