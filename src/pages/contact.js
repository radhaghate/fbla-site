import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Nav from '../components/navbar';
import Footer from '../components/footer';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import Link from 'next/link';
import { useState } from 'react';


const inter = Inter({ subsets: ['latin'] });

const Home = () => {

  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");

  const handleChange1 = (event) => {
    setMessage1(event.target.value);
  };

  const handleChange2 = (event) => {
    setMessage2(event.target.value);
  };
  const handleChange3 = (event) => {
    setMessage3(event.target.value);
  };
  const handleChange4 = (event) => {
    setMessage4(event.target.value);
  };

  const onc = () => {
    setMessage1("")
    setMessage2("")
    setMessage3("")
    setMessage4("")
  }

  return (
    <div className="flex flex-col h-screen justify-between">
      <Nav></Nav>
      <div className="bg-eggshell mb-auto">
        <div className="text-center text-7xl font-bold h-30 my-10">Contact Us!</div>
        <div className="text-eggshell grid grid-cols-1 mb-12 sm:mx-12 md:grid-cols-2 md:gap-12">
          <div className="card bg-oxfordblue100 shadow-xl">
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
                      className="bg-[#ecf5fd] input input-bordered w-full pr-16 text-black"
                    />
                    <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                      <Link href='/contact'>Subscribe</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-oxfordblue100 shadow-xl">
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
                  onChange={handleChange1}
                  value={message1}
                  className="bg-[#ecf5fd] input input-bordered w-full text-black"
                />
                <label className="label">
                  <span className="label-text text-white">Last name</span>
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  onChange={handleChange2}
                  value={message2}
                  className="bg-[#ecf5fd] input input-bordered w-full text-black"
                />
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="username@site.com"
                  onChange={handleChange3}
                  value={message3}
                  className="bg-[#ecf5fd] input input-bordered w-full text-black"
                />
                <label className="label">
                  <span className="label-text text-white">Message</span>
                </label>
                <textarea
                  className="bg-[#ecf5fd] textarea textarea-bordered h-24 text-black"
                  placeholder="Message"
                  onChange={handleChange4}
                  value={message4}></textarea>
                <br></br>
                <div className="flex justify-center">
                  <button onClick={onc} className="button btn-active btn-[#ecf5fd] text-white text-bold text-xl h-10 w-2/4 hover:text-delfblue">
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