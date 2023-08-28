import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/testimonials/first.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Amazing job! Communication is 5/5, Quality is 5/5, Timeliness is 5/5; Would <Mark>love to work together</Mark> with Sam again in the future for more projects. 
            </p>

            <Avatar
              image={userOneImg}
              name="Lakshman Mody"
              title="Co-founder of visualstaging.art"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Sam's technical ability and crystal clear communication made him a <Mark>pleasure to work with</Mark>. I wouldn't be where I am today without his help.
            </p>

            <Avatar
              image={userTwoImg}
              name="Anthony Mohammadi"
              title="Program Operations at DVC"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Sam upgraded our entire tech stack in a <Mark>matter of days</Mark> and we couldn't be happier with the results. He's also a great guy to work with!
            </p>

            <Avatar
              image={userThreeImg}
              name="Marcy Simons"
              title="Owner of Ashby Flowers"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="rounded-full overflow-hidden shadow-lg">
        <Image
          src={props.image}
          width="50"
          height="50"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-rose-800 bg-rose-100 rounded-md ring-rose-100 ring-4 dark:ring-rose-900 dark:bg-rose-900 dark:text-rose-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;