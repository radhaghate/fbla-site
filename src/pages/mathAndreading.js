import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Nav from '../components/navbar';
import Footer from '../components/footer';
import 'aos/dist/aos.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Nav className="h-10"></Nav>
      <div className="mb-auto">
        <div className="mb-auto flex flex-col items-center">
          <div className="text-center font-bold text-2xl mt-7">
            What concepts are covered in the OLC Math & Reading Programs?
          </div>
          <div className="text-center text-lg mt-4">Many parents find that ...</div>
          <div className="flex justify-center space-x-28 mt-6">
            <ul className="list-disc">
              <li className="list-none mb-3 font-bold text-lg text-center underline underline-offset-8">
                MATH
              </li>
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
            <div className="border-l-2 mt-8 h-inherit"></div>
            <ul className="list-disc">
              <li className="list-none mb-3 font-bold text-lg text-center underline underline-offset-8">
                READING
              </li>
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
          <button
            className="bg-transparent hover:bg-slate-500 text-blue-700 font-semibold hover:text-white 
          py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-12 mb-12">
            <Link href="/getStarted">Book A Free Appointment Today!</Link>
          </button>
        </div>

        <div className="w-full h-24 bg-sky-700 text-white text-center text-xl pt-8">
          Do not let your student fall behind. Owl Learning Center can take your child beyond.
        </div>

        <div className="bg-[#fff4ec]">
          <div className="w-3/5 mx-auto">
            <div className="grid grid-cols-2 py-8">
              <div data-aos="fade-right" className="pr-6">
                <div className="text-center text-4xl font-bold py-8">Ages 5-8</div>
                <div className="text-center text-2xl font-bold pb-4">Give your child a headstart.</div>
                <div className='text-center'>
                  Through the Kumon Math Program, preschoolers start out by counting objects and
                  learning the number sequence before learning to write numbers, all at an
                  individualized and comfortable pace. These skills provide a strong foundation for
                  learning basic addition and subtraction. You’ll watch your child develop mental
                  calculation skills, improve concentration ability and boost critical thinking
                  skills.
                </div>
              </div>
              <div data-aos="fade-left" className="pl-6 ">
                <Image src="/math-learning.jpg" alt="HowItWorks" height={300} width={500} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/5 mx-auto">
          <div className="grid grid-cols-2 py-8">
            <div data-aos="fade-right" className="pl-6 ">
              <Image src="/math-learning.jpg" alt="HowItWorks" height={300} width={500} />
            </div>
            <div data-aos="fade-left" className="pr-6">
              <div className="text-center text-4xl font-bold py-8">Ages 6-12</div>
              <div className="text-center text-2xl font-bold pb-4">Give your child a headstart.</div>
              <div className='text-center'>
                Through the Kumon Math Program, preschoolers start out by counting objects and
                learning the number sequence before learning to write numbers, all at an
                individualized and comfortable pace. These skills provide a strong foundation for
                learning basic addition and subtraction. You’ll watch your child develop mental
                calculation skills, improve concentration ability and boost critical thinking
                skills.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#fff4ec]">
          <div className="w-3/5 mx-auto">
            <div className="grid grid-cols-2 py-8">
              <div data-aos="fade-right" className="pr-6">
                <div className="text-center text-4xl font-bold py-8">Ages 13+</div>
                <div className="text-center text-2xl font-bold pb-4">Give your child a headstart.</div>
                <div className='text-center'>
                  Through the Kumon Math Program, preschoolers start out by counting objects and
                  learning the number sequence before learning to write numbers, all at an
                  individualized and comfortable pace. These skills provide a strong foundation for
                  learning basic addition and subtraction. You’ll watch your child develop mental
                  calculation skills, improve concentration ability and boost critical thinking
                  skills.
              </div>
              </div>
              <div data-aos="fade-left" className="pl-6 ">
                <Image src="/math-learning.jpg" alt="HowItWorks" height={300} width={500} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="h-10"></Footer>
    </div>
  );
};

export default Home;
