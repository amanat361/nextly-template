import Head from "next/head";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faYoutube, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap, faBriefcase, faBolt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import team from "../components/team";

function Detail(props) {
    return (
        <>
        <div className="flex items-start space-x-3">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-rose-500 rounded-md w-11 h-11 ">
            <FontAwesomeIcon icon={props.icon} className="w-7 h-7 text-rose-50" />
            </div>
            <div>
            <h4 className="text-xl font-medium text-rose-600 dark:text-gray-200">
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


const Socials = ( { github, linkedin, twitter, email, phone, youtube, discord } ) => {
    return (
        <div className="flex gap-8 justify-center items-center">
            {github && <a href={github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="h-6 hover:text-slate-700" /></a>}
            {linkedin && <a href={linkedin} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="h-6 hover:text-blue-600" /></a>}
            {twitter && <a href={twitter} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className="h-6 hover:text-sky-600" /></a>}
            {email && <a href={`mailto:${email}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} className="h-6 hover:text-red-800" /></a>}
            {phone && <a href={`tel:${phone}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faPhone} className="h-5 hover:text-green-600" /></a>}
            {youtube && <a href={youtube} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} className="h-6 hover:text-red-600" /></a>}
            {discord && <a href={discord} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord} className="h-6 hover:text-[#5865F2]" /></a>}
        </div>
    );
}

const Header = ( {name, title, description} ) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 sm:flex-row items-center">
                <div>
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <h2 className="text-xl font-semibold">{title}</h2>
                </div>
            </div>
            <p className="text-lg">{description}</p>
        </div>
    );
}

const Photo = ({ image }) => {
    return (
        <img src={image.source} className={`h-[50vh] sm:w-1/2 object-cover object-top rounded-3xl shadow-2xl dark:shadow-none ${image.shadow} ${image.color}`}/>
    );
}

const Member = ({ info, details, image, socials, flipped }) => {
    return (
        <div className={`flex flex-col sm:flex-row p-4 gap-8 ${flipped && 'sm:flex-row-reverse'}`}>
            <Photo image={...image} />
            <div className="flex flex-col justify-center gap-4 sm:w-1/2">
                <Header {...info} />
                <Details {...details} />
                <Socials {...socials} />
            </div>
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

            <div className="flex flex-col max-w-6xl mx-auto gap-20">
                {team.map((member, index) => <Member {...member} flipped={index%2==0} key={index} />)}
            </div>
            
            <Footer />
        </>
    );
}

export default Team;
