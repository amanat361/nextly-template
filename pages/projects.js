import Head from "next/head"
import Navbar from "../components/navbar"
import Work from "../components/work"
import SectionTitle from "../components/sectionTitle"
import Footer from "../components/footer"
import PopupWidget from "../components/popupWidget"

const Projects = () => {

    const projects = [
        {
            title: "Textbook Analysis (Alpha)",
            year: "2024*",
            category: "Education",
            description: "Textbook Analysis is a GPT-4 powered course generator built on top of a full and feature rich LMS. It is built with NextJS, TailwindCSS, and Supabase. It uses the Supabase API to fetch courses and display them on the front end. It also uses the Supabase API to allow for users to create new courses and store them in the database. It also uses the GPT-4 API to generate custom course content on the fly based on any textbook or syllabus.",
            image: "/projects/textbookanalysis.png",
            contributors: ["Sam"],
        },
        {
            title: "TCS Tracker Ultra",
            year: "2023",
            category: "Admin Dashboard",
            description: "TCS Tracker Ultra is a SaaS product that allows instructors at theCoderSchool to track their students' progress and attendance. It is built with the Pike13 API, NextJS, and TailwindCSS. Integrated recursive GPT-4 calls allow for instructors to generate custom reports and emails with the click of a button.",
            image: "/projects/tcstrackerultra.png",
            contributors: ["Sam", "AJ"],
        },
        {
            title: "NBA Analytics",
            year: "2023",
            category: "Data Science",
            description: "NBA Analytics is a data science project that uses Python, Pandas, and Flask for data collection and analysis. Data visualization is done with D3 and React to build custom charts and graphs. The project has GPT-4 integration for generating custom reports on the fly.",
            image: "/projects/nbaanalytics.png",
            contributors: ["Ethan", "Sam", "Alexey"],
        },
        {
            title: "Byte Blogger",
            year: "2023",
            category: "Blog",
            description: "Byte Blogger is a personal dev blog built on the Supabase BaaS. It is built with NextJS, TailwindCSS, and Supabase. It uses the Supabase API to fetch blog posts and display them on the front end. It also uses the Supabase API to allow for users to create new blog posts and store them in the database.",
            image: "/projects/byteblogger.png",
            contributors: ["Ethan", "Sam"],
        },
        {
            title: "Spelling Hive",
            year: "2022",
            category: "Game",
            description: "Spelling Hive is a clone of the famous New York Times Spelling Bee game. It is built with Flask, React, and TailwindCSS. It uses the New York Times API to fetch the daily puzzle and display it on the front end. It also uses players to challenge each other and use an algorithm to show the best possible words to play.",
            image: "/projects/spellinghive.png",
            contributors: ["Sam"],
        },
        {
            title: "3D Print Shop",
            year: "2022",
            category: "E-Commerce",
            description: "3D Print Shop is an e-commerce store that sells 3D printed products. It is built with NextJS, TailwindCSS, and Stripe. It uses the Stripe API to process payments and the Stripe API to fetch products and display them on the front end. It also uses the Stripe API to allow for users to create new products and store them in the database.",
            image: "/projects/3dprintshop.png",
            contributors: ["Sam"],
        },
    ]

    return (
        <>
            <Head>
                <title>Firewave Projects</title>
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
                pretitle='Our Work'
                title='Check Out What We Do'
            >
                We like to build cool stuff. Whether you're looking for a custom website, a data science project, or a full stack application, we might know a thing or two. Check out some of our recent projects below to see what we've been up to. Let's get your project on the list next!
            </SectionTitle>

            <section className='px-6 max-w-6xl mx-auto'>
                {projects.map((workItem) => (
                    <Work key={workItem.title} item={workItem} />
                ))}
            </section>
            <Footer />
            <PopupWidget />
        </>
    )
}

export default Projects