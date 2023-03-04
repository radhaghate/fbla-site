import Image from "next/image"
import Link from "next/link"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

const BlogSection1 = () => {
    
    SwiperCore.use([Autoplay])

    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right"
    }
  
    return (

    <section className="py-6 mt-6" style={bg}>
        <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-10 text-center">Trending</h1>

            <Swiper
                slidesPerView={1}
                // loop={true}
                // autoplay= {{
                //     delay: 2000
                // }}
                >
                
                <SwiperSlide>{ Slide1() }</SwiperSlide>
                <SwiperSlide>{ Slide2() }</SwiperSlide>
                <SwiperSlide>{ Slide3() }</SwiperSlide>
            </Swiper>
            
        </div>
    </section>
  );
};

// slide 1
function Slide1(){
    return (
    <div className="grid md:grid-cols-2">
        <div className="image">
            <a><Image src={"/resources-trending.jpg"} alt="Trending Posts" width={700} height={700} /></a>
        </div>
        <div className="info flex justify-center flex-col ml-5">
            <div className="cat">
                <a className="text-orange-600 hover:text-orange-800">Tutoring, Teaching</a>
                <a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a>
                </div>
                <div className="title">
                    <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">How Tutoring Can Help Your Child Succeed in School</a>
                </div>
                <p className="text-gray-500 py-3">
                    Parents all want their children to succeed in school and achieve their academic goals. But sometimes, students may struggle with certain subjects.
                    That is where tutoring can make a significant difference. Here is how tutoring can help your child succeed in school.
                </p>
                <h1>Jane Smith, MD</h1>
            </div>
        </div>
    )
}

// slide 2
function Slide2(){
    return (
    <div className="grid md:grid-cols-2">
        <div className="image">
            <a><Image src={"/resources-testanxiety.jpg"} alt="Trending Posts" width={700} height={700} /></a>
        </div>
        <div className="info flex justify-center flex-col ml-5">
            <div className="cat">
                <a className="text-orange-600 hover:text-orange-800">Test Taking</a>
                <a className="text-gray-800 hover:text-gray-600">- Nov 17, 2022</a>
                </div>
                <div className="title">
                    <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">How to Help Your Child Overcome Test Anxiety</a>
                </div>
                <p className="text-gray-500 py-3">
                Test anxiety can be a significant obstacle for students, affecting their performance and overall well-being. 
                Here are some tips for helping your child overcome test anxiety.
                </p>
                <h1>Robert Brown, 10th Grade English Teacher</h1>
            </div>
        </div>
    )
}

// slide 3
function Slide3(){
    return (
    <div className="grid md:grid-cols-2">
        <div className="image">
            <a><Image src={"/resources-focusing.jpg"} alt="Trending Posts" width={700} height={700} /></a>
        </div>
        <div className="info flex justify-center flex-col ml-5">
            <div className="cat">
                <a className="text-orange-600 hover:text-orange-800">Teaching, Focus</a>
                <a className="text-gray-800 hover:text-gray-600">- Jan 23, 2023</a>
                </div>
                <div className="title">
                    <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Focus Tips for Students: How to Stay on Task and Boost Productivity</a>
                </div>
                <p className="text-gray-500 py-3">
                For students, staying focused can be a challenge, especially when there are so many distractions and demands on their attention. 
                Here are 10 tips to help students stay on task and boost productivity:
                </p>
                <h1>Harry Chase, Tutor (12th Grade)</h1>
            </div>
        </div>
    )
}



export default BlogSection1;