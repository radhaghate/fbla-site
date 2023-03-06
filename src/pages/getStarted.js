import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Nav from '../components/navbar';
import Footer from '../components/footer';
import Calendar from '@/components/calendar';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {

  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");
  const [message6, setMessage6] = useState("");

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

  const handleChange5 = (event) => {
    setMessage5(event.target.value);
  };
  const handleChange6 = (event) => {
    setMessage6(event.target.value);
  };

  const onc = () => {
    setMessage1("")
    setMessage2("")
    setMessage3("")
    setMessage4("")
    setMessage5("")
    setMessage6("")
  }

  return (
    <div className="flex flex-col h-screen justify-between">
      <Nav className="h-10"></Nav>
      <div className="mb-auto">
        <div className="text-center text-6xl font-bold h-30 my-10">Book an Appointment Today!</div>
        <div className="grid grid-cols-2">
          <div className='w-3/4 mx-auto'>
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text text-l">Child Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                onChange={handleChange1}
                value={message1}
                className="bg-[#ecf5fd] input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text text-l">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                onChange={handleChange2}
                  value={message2}
                className="bg-[#ecf5fd] input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-l">Grade</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                onChange={handleChange3}
                value={message3}
                className="bg-[#ecf5fd] input input-bordered w-full"
              />
            </div>
            <hr></hr>
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text text-l">Parent Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                onChange={handleChange4}
                value={message4}
                className="bg-[#ecf5fd] input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text text-l">Email</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                onChange={handleChange5}
                value={message5}
                className="bg-[#ecf5fd] input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text text-l">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                onChange={handleChange6}
                  value={message6}
                className="bg-[#ecf5fd] input input-bordered w-full"
              />
            </div>
            <div className='flex justify-center my-8'>
              <button onClick={onc} className='btn btn-primary bg-black'>Submit</button>
            </div>
          </div>
          <div className="mx-auto mb-5 pr-4 w-full">
            <Calendar></Calendar>
          </div>
        </div>
      </div>
      <Footer className="h-10"></Footer>
    </div>
  );
};

export default Home;
