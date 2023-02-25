import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Nav from '../components/navbar';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Nav></Nav>
      <div className="mb-auto">

      <div className="bg-slate-500 text-2xl text-center text-bold text-white py-10">
          As of 2022, there was a reported 78% loss in learning, due to Covid-19. That was only one
          year ago.
        </div>

        <div className="grid grid-cols-2 gap-4 divide-x py-10">
          <div>
            <div className="text-center text-4xl font-bold py-10 underline underline-offset-8">
              The Mission
            </div>
            <div className="text-center px-12">
              We believe that every student is capable of achieving academic success, and we are
              dedicated to providing personalized support to help them get there. Our experienced
              tutors work closely with each student to identify their unique strengths and
              weaknesses, and develop a customized learning plan to help them overcome any
              obstacles.
            </div>
            <div className="w-full flex justify-center">
              <button className="button p-10 bg-sky-800 mt-12 rounded-xl text-white text-bold text-xl 
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                Explore Learning Paths
              </button>
            </div>
          </div>
          <div>
            <div className="text-center text-4xl font-bold py-10 underline underline-offset-8">
              We get results.
            </div>
            <div className="px-12">
              <div className="card bg-black text-primary-content my-3">
                <div className="card-body">
                  <h2 className="card-title">90% improvement in reading</h2>
                </div>
              </div>
              <div className="card bg-black text-primary-content my-3">
                <div className="card-body">
                  <h2 className="card-title">90% improvement in maths</h2>
                </div>
              </div>
              <div className="card bg-black text-primary-content my-3">
                <div className="card-body">
                  <h2 className="card-title">90% improvement in writing</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-4xl font-bold h-30 mt-6">Why Us?</div>

        <div className="grid grid-cols-3 gap-6 content-center p-10">
          <div className="card bg-base-100 shadow-xl">
            <figure className="h-25">
              <Image src="/home-understanding.jpg" alt="understanding" height={500} width={500} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <div className="badge badge-success">1</div>
                Teaching for Understanding
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure className="h-25">
              <Image src="/home-pace.webp" alt="pace" height={500} width={500} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <div className="badge badge-success">2</div>
                Choose your pace
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure className="h-25">
              <Image src="/home-fun.png" alt="fun" height={500} width={500} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <div className="badge badge-success">3</div>
                Have fun!
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>
      <Footer className="h-10"></Footer>
    </div>
  );
};

export default Home;
