import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

const FAQ = () => {
  return (
    <div className="flex flex-col h-screen justify-between mb-10">
      <div className="text-center text-8xl font-bold h-30 my-10">FAQs</div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-2 mx-5">
        <div className="collapse-title text-xl font-medium">Focus me to see content</div>
        <div className="collapse-content">
          <p>Answer</p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-2 mx-5">
        <div className="collapse-title text-xl font-medium">Focus me to see content</div>
        <div className="collapse-content">
          <p>Answer</p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-2 mx-5">
        <div className="collapse-title text-xl font-medium">Focus me to see content</div>
        <div className="collapse-content">
          <p>Answer</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
