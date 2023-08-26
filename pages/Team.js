import Head from "next/head";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap, faBriefcase, faBolt } from "@fortawesome/free-solid-svg-icons";

function Detail(props) {
    return (
        <>
        <div className="flex items-start space-x-3">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-rose-500 rounded-md w-11 h-11 ">
            <FontAwesomeIcon icon={props.icon} className="w-7 h-7 text-rose-50" />
            </div>
            <div>
            <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                {props.title}
            </h4>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
                {props.children}
            </p>
            </div>
        </div>
        </>
    );
}

const Details = ( { education, experience, skills } ) => {
    return (
        <div className="flex flex-col gap-4">
            <Detail title="Education" icon={faGraduationCap}>{education}</Detail>
            <Detail title="Experience" icon={faBriefcase}>{experience}</Detail>
            <Detail title="Skills" icon={faBolt}>{skills}</Detail>
        </div>
    );
}


const Socials = () => {
    return (
        <div className="flex gap-8">
            <FontAwesomeIcon icon={faGithub} className="h-8" />
            <FontAwesomeIcon icon={faLinkedin} className="h-8" />
            <FontAwesomeIcon icon={faTwitter} className="h-8" />
        </div>
    );
}

const Member = ({ name, image, title, description }) => {
    return (
        <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col justify-center items-center">
                    <img src={image} className="rounded-2xl w-full object-contain object-top"/>
                </div>
                <div className="flex flex-col justify-start gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2 sm:flex-row justify-between items-center">
                            <div>
                                <h1 className="text-2xl font-bold">{name}</h1>
                                <h2 className="text-xl font-semibold">{title}</h2>
                            </div>
                            <Socials />
                        </div>
                        <p className="text-lg">{description}</p>
                    </div>
                    <Details
                        education="University of California, Berkeley"
                        experience="Firewave Development"
                        skills="NextJS, React, TailwindCSS"
                    />
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

const Team = () => {
    return (
        <>
            <Head>
                <title>Firewave Team</title>
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
                pretitle='Our Team'
                title='Meet the Team'
            >
                We're not just about efficiency; we're about crafting solutions that reshape industries. Our track record speaks volumes – clients have witnessed an astounding 80% reduction in operational time through our program rebuilds.
            </SectionTitle>

            <div className="p-4 flex flex-col gap-8 max-w-6xl mx-auto">
                <Member
                    name="Sam Amanat"
                    image="/team/Samrembg.png"
                    title="Founder"
                    description="Hey! I'm Sam, and I'm the founder of Firewave Development. I'm a full stack developer who loves to build things. I put this team together to help me build things faster and better."
                />
                <Member
                    name="Ethan Gutierrez"
                    image="/team/Ethanrembg.png"
                    title="Backend Engineer"
                    description="What's up! I'm Ethan, and I'm a backend engineer at Firewave Development. I'm a backend engineer who loves breaking things down and building them back up."
                />
                <Member
                    name="Ahljenn Malari"
                    image="/team/AJrembg.png"
                    title="Frontend Engineer"
                    description="Hi! I'm AJ, and I'm a frontend engineer at Firewave Development. I'm a frontend engineer who loves to make things look good and work well."
                />
            </div>
            
            <Footer />
        </>
    );
}

export default Team;