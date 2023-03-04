import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Nav from '../components/navbar';
import Footer from '../components/footer';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Nav></Nav>
      <div className="mb-auto">
        <div className="text-center text-7xl font-bold h-30 my-10">Contact Us!</div>
        <div className="grid grid-cols-1 mb-12 sm:mx-12 md:grid-cols-2 md:gap-12">
          <div className="card bg-sky-800 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-white text-3xl">More Info</h2>
              <hr className="border-2 border-white-500 drop-shadow-xl w-full m-4"/>
              <GoLocation style={{ color: 'white', fontSize: '1.5rem' }}></GoLocation>
              <div className="text-white"> 421 Pennwood Ave, Monroe, NJ, 08831</div>
              <hr className="border-2 border-white-500 drop-shadow-xl w-full m-4"/>
              <BsFillTelephoneOutboundFill style={{ color: 'white', fontSize: '1.5rem' }}></BsFillTelephoneOutboundFill>
              <div className="text-white"> (732) - 893 - 2390</div>
              <hr className="border-2 border-white-500 drop-shadow-xl w-full m-4"/>
              <AiOutlineMail style={{ color: 'white', fontSize: '1.5rem' }}></AiOutlineMail>
              <div className="text-white">owllearning@gmail.com</div>
              <hr className="border-2 border-white-500 drop-shadow-xl w-full m-4"/>
              <div className="grid content-center">
                <span className="footer-title text-white">Sign up for our newsletter!</span>
                <div className="form-control w-80 mt-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="username@site.com"
                      className="input input-bordered w-full pr-16"
                    />
                    <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-sky-800 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="flex flex-row">
                <h2 className="card-title text-white text-3xl mr-4">Send Us a Message</h2>
                <AiOutlineMail style={{ color: 'white', fontSize: '2rem' }}></AiOutlineMail>
              </div>
              <p className="text-white">
                If you have gone through our website and have further questions, please feel free to
                contact us on the contact form below or email us
              </p>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white">First name</span>
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text text-white">Last name</span>
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text text-white">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Message"></textarea>
                <br></br>
                <div className="flex justify-center">
                  <button className="button btn-active btn-ghost text-white text-bold text-xl h-10 w-2/4">
                    Send!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;