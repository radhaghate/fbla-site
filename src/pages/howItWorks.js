import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import "aos/dist/aos.css"
import Nav from '../components/navbar';
import Footer from '../components/footer';
import FAQ from '../components/faq';
import Testimonials from '@/components/testimonials';

const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Nav className="h-10"></Nav>
      <div className="mb-auto">
        <Image src="/howItWorks.jpg" alt="HowItWorks" width={1920} height={500} />
      </div>
      <div className='bg-eggshell'>
      <div className="text-center text-6xl font-bold h-30 my-10">How it Works</div>
      <div className='text-center text-xl h-30 my-10'>At Owl Learning Center, we work to serve you. 
      See how you can get started in three easy steps.</div>
        
        <div className="container bg-eggshell mx-auto w-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div data-aos="fade-left" className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">Schedule an Appointment</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  The process starts by contacting your local learning center, by filling out the Get Started form. 
                  From there, you will be contacted and asked to provide details to schedule an appointment for your child.
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              <div data-aos="fade-right" className="order-1 bg-sky-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white text-xl">Take a Placement Test</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                    At your appointment, we provide a diagnostic skills assessment to identify any gaps in your child<span>&apos;</span>s knowledge and create a personalized learning plan for them. 
                    This assessment will include questions at your child<span>&apos</span>s expected level which will help us gauge how to proceed.
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div data-aos="fade-left" className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">Book Your Sessions</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Our math tutoring services are designed to be flexible and convenient, with both in-center, at home and online options available. 
                  Our Center Manager can assist you in setting up a tutoring schedule that best suits your needs. For pricing and payment options, please contact Owl Learning Center.
                </p>
              </div>
            </div>

        </div>
      </div>

      <div className='mt-8'><Testimonials></Testimonials></div>
      <FAQ></FAQ>
      </div>
      <Footer className="h-10"></Footer>
    </div>
  );
};

export default Home;
