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
    <div className='flex flex-col h-screen justify-between'>
      <Nav className='h-10'></Nav>
      <div className='mb-auto'>
        <div className='mb-auto flex flex-col items-center'>
          <div className='text-center font-bold text-2xl mt-7'>What concepts are covered in the OLC Math & Reading Programs?</div>
          <div className='text-center text-lg mt-4'>Many parents find that ...</div>
          <div className='flex justify-center space-x-28 mt-6'>
            <ul className='list-disc'>
              <li className='list-none mb-3 font-bold text-lg text-center underline underline-offset-8'>MATH</li>
              <li>Addition and Subtraction</li>
              <li>Multiplication and Division</li>
              <li>Order of Operations</li>
              <li>Fractions</li>
              <li>Solving Equations</li>
              <li>Algebra I</li>
              <li>Geometry</li>
              <li>Trigonometry</li>
              <li>Algebra II</li>
              <li>Precalculus</li>
            </ul>
            <div className='border-l-2 mt-8 h-inherit'></div>
            <ul className='list-disc'>
              <li className='list-none mb-3 font-bold text-lg text-center underline underline-offset-8'>READING</li>
              <li>Vocabulary (3rd to 9th grade)</li>
              <li>Punctuation</li>
              <li>Grammar</li>
              <li>Reading Comprehension</li>
              <li>Quoting and Paraphrasing</li>
              <li>Creative Writing</li>
              <li>Literary Techniques</li>
              <li>Style and Tone</li>
              <li>Poetry</li>
              <li>Critical Thinking</li>
            </ul>
          </div>
          <button className='bg-transparent hover:bg-slate-500 text-blue-700 font-semibold hover:text-white 
          py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-12 mb-12'>
            <Link href="/getStarted">Book A Free Appointment Today!</Link>
          </button>
        </div>
        <div className='w-full h-24 bg-sky-700 text-white text-center text-xl pt-8'>Do not let your student fall behind. Owl Learning Center can take your child beyond.</div>

        {/*GRIDDING!! yay.*/}
        <div className='grid grid-rows-3 grid-cols-2 max-w-6xl justify-center m-auto mt-9 mb-9 ml-60 h-auto'>
          
          <div className='relative top-1/3'>
            <p className='text-2xl'>Ages 5-8</p>
            <p>We welcome all children for counting.</p>
          </div>
          <div className='mt-16'><Image src="/math-learning.jpg" alt="HowItWorks" height={300} width={500}/></div>
            
          <div>02</div>
          <div>03</div>
        </div>



      </div>
      <div className='mt-10'></div>
      <Footer className='h-10'></Footer>
    </div>
  );
}

export default Home;