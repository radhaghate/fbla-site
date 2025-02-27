import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { BsBook } from 'react-icons/bs';
import { FaEarlybirds } from 'react-icons/fa'
import Link from 'next/link';

const Nav = () => {
  return (
    <div className="navbar py-10 h-12 bg-oxfordblue200">
      <div className='ml-6'>
        <FaEarlybirds style={{ color: "white", fontSize: "2rem" }}></FaEarlybirds>
      </div>
      <div className="navbar-start ml-5">
        <Link className="btn btn-ghost normal-case text-xl text-white text-bold" href='/'>
          Owl Learning Center
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="text-white mx-3 bg-slate-50 bg-opacity-10" href="/howItWorks">About Us</Link>
          </li>
          <li tabIndex={0}>
            <Link className="text-white mx-3 bg-slate-50 bg-opacity-10" href='/learningPaths'>
              Learning Paths
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2 bg-[#0a3157]">
              <li>
                <Link className="text-white" href='/mathAndreading'>Math & Reading</Link>
              </li>
              <li>
                <Link className="text-white" href='/standardTesting'>Standardized Testing</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="text-white mx-3 bg-slate-50 bg-opacity-10" href='/resources'>Stay Informed</Link>
          </li>
          <li>
            <Link className="text-white mx-3 bg-slate-50 bg-opacity-10" href='/contact'>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-10">
        <Link className="btn text-white hover:text-black hover:bg-white text-l" href='/getStarted'>Get Started</Link>
      </div>
    </div>
  );
};

export default Nav;
