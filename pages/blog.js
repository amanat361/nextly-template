import Head from "next/head";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Post = ({ image, title, date, content }) => {
    return (
        <div className="flex flex-col items-start justify-center w-full gap-4">
            <Image src={image} alt="NextJS Blog" width={500} height={500} className="rounded-lg aspect-[5/3] object-cover"/>
            <h1 className="text-3xl font-medium text-gray-800 dark:text-gray-100">{title}</h1>
            <p className="text-gray-500 dark:text-gray-400">{date}</p>
            <p className="text-gray-500 max-w-none dark:text-gray-400">{content}</p>
            <a className="flex gap-2 w-full justify-end items-center p-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition cursor-pointer rounded">
                <span className="text-sm">Read More</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-1 h-4" />
            </a>
        </div>
    );
}

const Blog = () => {
    return (
        <>
            <Head>
                <title>Firewave Blog</title>
                <meta
                    name="description"
                    content="Elevate your projects with Firewave – a forward-thinking tech startup specializing in NextJS 13.4+, d3 data visualization, GPT-4 function calls, and more. Join us in shaping the future of technology."
                />
                <meta
                    name="keywords"
                    content="nextjs, d3, gpt-4, langchain, react, javascript, typescript, web3, blockchain, solidity, smart contracts, web development, software development, technology, innovation, startup, tech startup, tech company, tech, coding, programming, developer, engineer, software engineer, software developer, web developer, front end developer, front end engineer, full stack developer, full stack engineer, full stack, front end, back end"
                />
                <meta name="author" content="Firewave Development" />
                <meta name="og:title" content="Firewave Development" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <SectionTitle
                pretitle='Our Blog'
                title='Read our latest posts'
            >
                We're not just about efficiency; we're about crafting solutions that reshape industries. Our track record speaks volumes – clients have witnessed an astounding 80% reduction in operational time through our program rebuilds.
            </SectionTitle>

            <div className="grid grid-cols-1 sm:grid-cols-3 max-w-6xl mx-auto gap-4 p-4">
                <Post
                    image='/blog/Stock1.jpg'
                    title='How to Build a Website with NextJS'
                    date='August 31, 2021'
                    content="NextJS is a React framework that allows you to build static and server-side rendered websites. It's a great choice for building websites that need to be fast and SEO-friendly. In this tutorial, we'll show you how to build a website with NextJS in just a few steps!"
                />
                <Post
                    image='/blog/Stock2.jpg'
                    title='How to Build a Website with NextJS'
                    date='August 31, 2021'
                    content="NextJS is a React framework that allows you to build static and server-side rendered websites. It's a great choice for building websites that need to be fast and SEO-friendly. In this tutorial, we'll show you how to build a website with NextJS in just a few steps!"
                />
                <Post
                    image='/blog/Stock3.jpg'
                    title='How to Build a Website with NextJS'
                    date='August 31, 2021'
                    content="NextJS is a React framework that allows you to build static and server-side rendered websites. It's a great choice for building websites that need to be fast and SEO-friendly. In this tutorial, we'll show you how to build a website with NextJS in just a few steps!"
                />
            </div>


            <Footer />
        </>
    );
}

export default Blog;