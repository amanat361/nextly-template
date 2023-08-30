import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import posts from '../../data/posts.js';

import Image from 'next/image';

import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

export default function BlogPost({ post }) {
    return (
        <>
            <Head>
                <title>Firewave Blog</title>
            </Head>

            <Navbar />

            <div className="max-w-6xl mx-auto p-4 flex flex-col gap-4">
                <Image src={post.image} alt="NextJS Blog" width={2000} height={2000} className="w-full rounded-lg aspect-2 object-cover"/>
                <ReactMarkdown className="mx-auto prose dark:prose-invert max-w-none" children={post.content} remarkPlugins={[remarkGfm]} />
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