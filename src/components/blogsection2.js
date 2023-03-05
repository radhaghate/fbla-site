import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const BlogSection2 = () => {
  return (
    <section className="container mx-auto md:px-20 py-3">
        <h1 className="font-bold text-4xl py-10 text-center">Latest Posts</h1>

        {/* grid columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            { Post1() }
            { Post2() }
            { Post3() }
        </div>
    </section>
  );
};

function Post1(){
    return (
        <div className="item">
            <div className="images">
                <a><Image src={"/resources-satworkshop.webp"} alt="Latest Posts" className="rounded" width={500} height={350} /></a>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <a className="text-orange-600 hover:text-orange-800">Review, Opinion</a>
                    <a className="text-gray-800 hover:text-gray-600">- March 3, 2023</a>
                </div>
                <div className="title">
                    <a className="text-xl font-bold text-gray-800 hover:text-gray-600">Review of SAT Workshop at OLC Tutoring Center</a>
                </div>
                <p className="text-gray-500 py-3">
                As a parent of a high school student, I recently enrolled my child in an SAT workshop at the OLC Tutoring Center for Test Prep. 
                I am thrilled to report that the experience exceeded my expectations in every way.
                </p>
                <h1>Rei Williams, Parent</h1>
            </div>
        </div>
    )
}

// post 2
function Post2(){
    return (
        <div className="item">
            <div className="images">
                <a><Image src={"/resources-mindset.jpg"} alt="Latest Posts" className="rounded" width={500} height={350} /></a>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <a className="text-orange-600 hover:text-orange-800">Motivation</a>
                    <a className="text-gray-800 hover:text-gray-600">- Jan 15, 2023</a>
                </div>
                <div className="title">
                    <a className="text-xl font-bold text-gray-800 hover:text-gray-600">The Importance of Mindset in Academic Success</a>
                </div>
                <p className="text-gray-500 py-3">
                    When it comes to academic success, mindset plays a crucial role. A growth mindset, which emphasizes the belief that intelligence and abilities can be developed through hard work and perseverance, is essential.
                </p>
                <h1>Frankie Smith, Instructor (College Sophomore)</h1>
            </div>
        </div>
    )
}

function Post3(){
    return (
        <div className="item">
            <div className="images">
                <a><Image src={"/resources-calculus.webp"} alt="Latest Posts" className="rounded" width={500} height={350} /></a>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <a className="text-orange-600 hover:text-orange-800">Tips, Resources</a>
                    <a className="text-gray-800 hover:text-gray-600">- Dec 22, 2022</a>
                </div>
                <div className="title">
                    <a className="text-xl font-bold text-gray-800 hover:text-gray-600">5 Tips to Help Your Child With Their Math Skills</a>
                </div>
                <p className="text-gray-500 py-3">
                    Math can be a challenging subject for many students, but with the right support, they can excel. Here are five tips to support your child while doing math.
                </p>
                <h1>Simone Richmond, Instructor (College Freshman)</h1>
            </div>
        </div>
    )
}


export default BlogSection2;