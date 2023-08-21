import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Firewave Development</title>
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
      <Hero />
      <SectionTitle
        pretitle="Firewave Benefits"
        title=" Why should you should choose our team">
        Choosing Firewave means embracing a future where innovation and excellence converge. Our expertise in NextJS 13.4+, d3 data visualization, GPT-4 function calls, and revolutionary Langchain agents positions us as trailblazers in the tech realm. We're not just about efficiency; we're about crafting solutions that reshape industries. Our track record speaks volumes – clients have witnessed an astounding 80% reduction in operational time through our program rebuilds.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        It's not your average cat video, but it's definitely worth a watch. See how our product tackles your requirements head-on – no fluff, just facts. Hit that play button and let's get down to business!
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Directly from the voices of those who've experienced the Firewave difference.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;