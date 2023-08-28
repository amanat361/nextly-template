import Head from "next/head"
import Navbar from "../components/navbar"
import SectionTitle from "../components/sectionTitle"
import Footer from "../components/footer"
import Contact from "../components/contact"

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Firewave Pricing</title>
                <meta
                    name="description"
                    content="Elevate your projects with Firewave – a forward-thinking tech startup specializing in NextJS 13.4+, d3 data visualization, GPT-4 function calls, and more. Join us in shaping the future of technology."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <SectionTitle pretitle="Unsure?" title="Contact us for a free consultation.">
                We understand that choosing the right plan can be difficult. That's why we offer a free consultation to help you decide which plan is right for you. Contact us today to get started.
            </SectionTitle>
            <Contact />
            <Footer />
        </>
    );
}

export default ContactPage