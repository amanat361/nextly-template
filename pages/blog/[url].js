import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import posts from '../../data/posts.js';

import Image from 'next/image';

import remarkGfm from 'remark-gfm';
import { ReactMarkdown } from 'react-markdown';

export default function BlogPost({ post }) {
    return (
        <>
            <Head>
                <title>Firewave Blog</title>
            </Head>

            <Navbar />

            <div className="max-w-6xl mx-auto p-4 flex flex-col gap-4">
                <h1 className="text-4xl font-medium text-gray-800 dark:text-gray-100">{post.title}</h1>
                <Image src={post.image} alt="NextJS Blog" width={2000} height={2000} className="w-full rounded-lg aspect-2 object-cover"/>
                <p className="text-gray-500 dark:text-gray-400">{post.date}</p>
                <ReactMarkdown>
                    Test
                </ReactMarkdown>
                {/* <p className="text-gray-500 max-w-none dark:text-gray-400 whitespace-pre-wrap">{post.content}</p> */}
            </div>

            <Footer />  
        </>
    );
}

export async function getStaticProps({ params }) {
    const post = posts.find((post) => post.url === params.url);
    return {props: {post}};
}

export async function getStaticPaths() {
    return {
        paths: posts.map((post) => {
            return {params: {url: post.url}}
        }),
        fallback: false,
    };
}