import Head from "next/head"
import Navbar from "../components/navbar"
import SectionTitle from "../components/sectionTitle"
import Footer from "../components/footer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

import { Card } from 'flowbite-react';

import Contact from "../components/contact";

import plans from "../components/pricing";

function Feature( { content } ) {
    return (
        <li className="flex space-x-3">
            <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                {content}
            </span>
        </li>
    );
}

function Drawback( { content } ) {
    return (
        <li className="flex space-x-3">
            <FontAwesomeIcon icon={faX} className="w-5 h-5 text-red-500" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                {content}
            </span>
        </li>
    );
}

function PricingCard( {name, price, description, features, drawbacks} ) {
  return (
    <Card>
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        {name}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">
          $
        </span>
        <span className="text-5xl font-extrabold tracking-tight">
          {price}
        </span>
      </div>
      <ul className="my-7 space-y-5">
        {features.map((feature) => (
            <Feature content={feature} />
        ))}
        {drawbacks.map((drawback) => (
            <Drawback content={drawback} />
        ))}
      </ul>
      <button
        className="inline-flex w-full justify-center rounded-lg bg-rose-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-200 dark:focus:ring-rose-900"
        type="button"
      >
        <p>
          Choose plan
        </p>
      </button>
    </Card>
  )
}

const Pricing = () => {
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

            <SectionTitle pretitle="Pricing" title="Choose the plan that's right for you.">
                Here at Firewave, we offer a variety of pricing plans to suit your needs. Whether you're a small business looking to get your feet wet in the digital landscape, or a large corporation looking to take your business to the next level, we've got you covered.
            </SectionTitle>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
            {plans.map((plan) => (
                <PricingCard {...plan} />
            ))}
            </div>

            <SectionTitle pretitle="Unsure?" title="Contact us for a free consultation.">
                We understand that choosing the right plan can be difficult. That's why we offer a free consultation to help you decide which plan is right for you. Contact us today to get started.
            </SectionTitle>
            
            <Contact />

            <Footer />
        </>
    );
}

export default Pricing