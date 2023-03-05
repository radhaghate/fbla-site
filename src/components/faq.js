import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

const FAQ = () => {
  return (
    <div className="flex flex-col h-fit m-auto w-4/5 p-4 mb-10">
      <div className="text-center text-5xl font-bold h-30 my-8">Frequently Asked Questions</div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-2 mx-5">
        <div className="collapse-title text-xl font-medium">How much do classes at Owl Learning Center cost?</div>
        <div className="collapse-content">
          <p>The pricing for classes at this learning center varies depending on the specific program and services being offered, especially since we have various locations and schedule options. 
            It<span>&apos;</span>s best to contact the center directly to get more information about the pricing options for the program you are interested in.</p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-2 mx-5">
        <div className="collapse-title text-xl font-medium">Who are the instructors?</div>
        <div className="collapse-content">
          <p>Although supervised by a professional, our instructors are mainly other students, from high school juniors and seniors to college graduates. After conducting the student<span>&apos;</span>s placement test, we will match them with a personal instructor. 
            At OLC, we believe that students teaching students will result in a more relatable and effective learning experience.</p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-2 mx-5">
        <div className="collapse-title text-xl font-medium">Is OLC for advanced or struggling students?</div>
        <div className="collapse-content">
          <p>Both! We welcome all students who are ready to learn. If your child is struggling in school, we will do our best to quickly get them up to speed.
            If they are already advanced, the instructors will engage and work with your student to help them reach their full potential. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
