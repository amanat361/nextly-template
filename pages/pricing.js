import { useState } from "react";
import Head from "next/head"
import Navbar from "../components/navbar"
import SectionTitle from "../components/sectionTitle"
import Footer from "../components/footer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

import { Card, Alert } from 'flowbite-react';
import plans from "../components/pricing";
import PopupWidget from "../components/popupWidget";

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
    <Card className="dark:bg-transparent">
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
        <span className="ml-2 text-xl font-semibold opacity-50">
          $
        </span>
        <span className="text-2xl font-extrabold tracking-tight line-through opacity-50">
          {price+300}
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

    const [showAlert, setShowAlert] = useState(true);

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

            {showAlert && <div className="max-w-6xl mx-auto px-4 animate-pulse">
              <Alert color="success" onDismiss={() => {setShowAlert(false)}}>
                <span className="text-lg">All plans are currently <span className="font-bold">$300 off</span> until the end of the year!</span>
              </Alert>
            </div>}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 max-w-6xl mx-auto">
            {plans.map((plan) => (
                <PricingCard {...plan} />
            ))}
            </div>
            <Footer />
            <PopupWidget />
        </>
    );
}

export default Pricing