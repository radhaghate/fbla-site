import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Nav from '../components/navbar';
import Footer from '../components/footer';
import Calendar from '@/components/calendar';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
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
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text text-l">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-l">Grade</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
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
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text text-l">Email</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text text-l">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className='flex justify-center my-8'>
              <button className='btn btn-primary bg-black'>Submit</button>
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
