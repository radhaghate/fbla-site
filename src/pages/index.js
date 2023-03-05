import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Nav from '../components/navbar';
import Footer from '../components/footer';
import "aos/dist/aos.css";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Nav></Nav>
      <div className="mb-auto">
        
        <div className="relative bg-oxfordblue200 w-full grid grid-cols-8 auto-rows-auto">
            <div className="col-start-1 col-end-8"> 
              <Image className="mt-2" src="/home-top.jpg" alt="tutoring" height={900} width={1740}/>
            </div>

            <div className="absolute right-28 mt-28 text-center text-white bg-oxfordblue100 
              align-middle h-96 w-4/5 col-start-6 col-end-9 pt-8 rounded">
              <div className='text-5xl text-center tracking-wide mt-12'>Owl<br></br>Learning Center</div>
              <p className='italic mt-6 text-xl'>Where Students Teach Students</p>
              <button className="flex justify-center button pr-6 pl-6 pt-4 pb-4 bg-slate-500 mt-7 ml-36 rounded text-black text-bold text-xl 
                transition ease-in-out delay-150 hover:-translate-y-1 hover:text-white">
                <Link href="/howItWorks">Learn More</Link>
              </button>
            </div>
            
          </div>

        <div className="bg-slate-500">
          <div className='text-2xl text-right mr-44 text-bold text-white py-8'>
            As of 2022, there was a reported 78% loss in learning due to Covid-19. That was only one
            year ago.
            </div>
        </div>

        <div className="bg-eggshell">
        <div className="grid grid-cols-2 gap-4 divide-x py-10 ">
          <div>
            <div className="text-center text-3xl font-bold py-10 underline underline-offset-8">
              THE MISSION
            </div>
            <div className="text-center px-12">
              We believe that every student is capable of achieving academic success, and we are
              dedicated to providing personalized support to help them get there. Our experienced
              tutors work closely with each student to identify their unique strengths and
              weaknesses, and develop a customized learning plan to help them overcome any
              obstacles.
            </div>
            <div className="w-full flex justify-center">
              {/* <button
                className="btn p-8 bg-sky-800 mt-12 rounded-l text-white text-bold text-xl 
                transition ease-in-out hover:-translate-y-1 hover:scale-110">
                Explore Learning Paths
              </button> */}
              <button className="mt-12 w-72 p-8 text-bold text-xl text-white bg-oxfordblue100 
                hover:text-black hover:bg-transparent text-l border border-transparent hover:border-black rounded-md" type="button">
                  <Link href="/learningPaths">Explore Learning Paths</Link>
              </button>
            </div>
          </div>
          <div className=''>
            <div className="text-center text-3xl font-bold py-10 underline underline-offset-8">
              WE GET RESULTS
            </div>
            <div className="px-12">
              <div data-aos="zoom-in" className="card bg-delfblue text-primary-content my-3">
                <div className="card-body">
                  <h2 className="card-title">94% of students saw an improvement in their test scores</h2>
                </div>
              </div>
              <div data-aos="zoom-in" className="card bg-oxfordblue200 text-primary-content my-3">
                <div className="card-body">
                  <h2 className="card-title text-slate-300">90% of parents observed better reading skills in their children</h2>
                </div>
              </div>
              <div data-aos="zoom-in" className="card bg-[#161925] text-primary-content my-3">
                <div className="card-body">
                  <h2 className="card-title">93% of students report feeling more confident in school</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-4xl font-bold h-30 mt-6">Why Us?</div>

        <hr className="border-0.5 border-oxfordblue100 drop-shadow-xl mx-auto w-1/2 mt-5"/>

        <div className="grid grid-cols-3 gap-6 content-center p-10">
          <div data-aos="flip-down" className="card bg-base-100 shadow-xl">
            <figure className="h-25">
              <Image src="/home-1on1.png" alt="understanding" height={500} width={500} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <div className="badge badge-success">1</div>
                Teaching for Understanding
              </h2>
              <p className='text-center'>With OLC&aposs 1-on-1 tutoring sessions, your child can get 100% of our attention 100% of our time together. This way, we can truly make sure your child is learning the right concepts.</p>
            </div>
          </div>

          <div data-aos="flip-down" className="card bg-base-100 shadow-xl">
            <figure className="h-25">
              <Image src="/home-flexiblesched.jpg" alt="pace" height={500} width={500} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <div className="badge badge-success">2</div>
                Choose your pace
              </h2>
              <p className='text-center'>Need tutoring one day per week? Two? Three? We have you covered. Based on your needs, OLC will create a personalized, flexible schedule to keep you on track.</p>
            </div>
          </div>

          <div data-aos="flip-down" className="card bg-base-100 shadow-xl">
            <figure className="h-25">
              <Image src="/home-location.jpg" alt="location" height={500} width={500} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <div className="badge badge-success">3</div>
                Pick Your Location
              </h2>
              <p className='text-center'>At OLC, we recognize that getting around can be hard. Therefore, we offer multiple locations for our classes. Students are welcome to come to classes in-center, request sessions at their home, or work virtually.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer className="h-10"></Footer>
    </div>
    </div>
  );
};

export default Home;
