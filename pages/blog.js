import Head from "next/head";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PopupWidget from "../components/popupWidget";

import Link from "next/link";

import posts from "../data/posts";

const Post = ({ image, title, date, hook, content, url }) => {
    return (
        <div className="flex flex-col items-start w-full gap-4">
            <Image src={image} alt="NextJS Blog" width={500} height={500} className="rounded-lg aspect-[5/3] object-cover"/>
            <h1 className="text-3xl font-medium text-gray-800 dark:text-gray-100">{title}</h1>
            <p className="text-gray-500 dark:text-gray-400">{date}</p>
            <p className="text-gray-500 max-w-none dark:text-gray-400">{hook}</p>
            <Link href={"/blog/"+url} className="mt-auto flex gap-2 w-full justify-end items-center p-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition cursor-pointer rounded">
                <span className="text-sm">Read More</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-1 h-4" />
            </Link>
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
                We like to write about the latest technologies and trends in web development. Whether you're looking for a tutorial on how to build your own website or just want to learn more about what's happening in the industry, we've got you covered!
            </SectionTitle>

            <div className="grid grid-cols-1 sm:grid-cols-3 max-w-6xl mx-auto gap-4 p-4">
                {posts.map((post) => (
                    <Post key={post.title} {...post} />
                ))}
            </div>
            <Footer />

            <PopupWidget />
        </>
    );
}

export default Blog;