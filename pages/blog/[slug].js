import Image from "next/image";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import glob from "glob";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";

export default function BlogTemplate( { markdownBody } ) {
    return (
        <>
            <Head>
                <title>Firewave Blog</title>
            </Head>
            <Navbar />
            <ReactMarkdown
                className="prose max-w-6xl mx-auto"
                children={markdownBody}
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                            <SyntaxHighlighter
                                {...props}
                                children={String(children).replace(/\n$/, "")}
                                style={dracula}
                                language={match[1]}
                                PreTag="div"
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            />
            <Footer />
            <PopupWidget />    
        </>
    );
}

export async function getStaticProps( context ) {
    const { slug } = context.params;
    const content = await import(`../../posts/${slug}.md`);
    const data = matter(content.default);

    return {
        props: {
            markdownBody: data.content,
        },
    };
}

export async function getStaticPaths() {
    const blogs = glob.sync(`posts/**/*.md`);

    const blogSlugs = blogs.map(file =>
        file
        .split("/")[1]
        .replace(/ /g, "-")
        .slice(0, -3)
        .trim()
    );

    console.log(blogSlugs);

    const paths = blogSlugs.map(slug => `/blog/${slug}`);

    return {
        paths,
        fallback: false,
    };
}