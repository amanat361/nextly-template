import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-rose-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-rose-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    "question": "What makes Firewave different from other tech companies?",
    "answer": "At Firewave, we go beyond technology – we believe in fostering meaningful partnerships. Our commitment to innovation, personalized approach, and focus on staying ahead of the curve set us apart. When you collaborate with Firewave, you're not just a client; you're a valued member of our tech-savvy family."
  },
  {
    "question": "What technologies do you specialize in?",
    "answer": "Our expertise spans a wide range of cutting-edge technologies, including NextJS 13.4+, d3 data visualization, GPT-4 function calls, Langchain agents, and more. We're dedicated to leveraging the latest tools to create exceptional solutions tailored to your unique needs."
  },
  {
    "question": "How do you ensure effective communication during projects?",
    "answer": "Communication is key to project success. Our team excels not only in technical skills but also in clear communication. We keep you in the loop throughout the process, providing updates, addressing queries, and ensuring a collaborative experience."
  },
  {
    "question": "Can you provide examples of your past successes?",
    "answer": "Certainly! We've successfully rebuilt programs for clients, resulting in impressive operational time reductions. While specific details vary, these accomplishments showcase our ability to deliver tangible impact. Reach out to us for more in-depth case studies."
  },
  {
    "question": "How can Firewave help my project stand out?",
    "answer": "Our team's dedication to innovation and excellence ensures your project receives a distinct edge. From crafting dynamic interfaces to integrating AI-powered solutions, we strive to create solutions that not only meet but exceed expectations."
  },
  {
    "question": "How do I get started with Firewave?",
    "answer": "Starting with Firewave is simple. Reach out to us through our contact form or email, and our team will get in touch to discuss your project's specifics. We'll collaborate to understand your goals and requirements and provide a tailored solution to meet your needs."
  },
  {
    "question": "Do you work with clients of all sizes?",
    "answer": "Absolutely. We have experience working with a diverse range of clients, from startups to established enterprises. Regardless of the scale of your project, our commitment to excellence remains unwavering."
  },
  {
    "question": "What can I expect in terms of project timelines?",
    "answer": "Project timelines can vary based on the complexity and scope of the project. During our initial discussions, we'll provide a clear estimate of the timeline based on your project's requirements. Rest assured, we value efficiency without compromising quality."
  },
  {
    "question": "Is Firewave open to collaborations with other tech firms?",
    "answer": "Collaboration is at the heart of innovation, and we're open to partnering with other tech firms. If you have a project or an idea that could benefit from our expertise, we'd be excited to explore how we can work together."
  },
  {
    "question": "How can I stay updated with Firewave's latest developments?",
    "answer": "To stay connected with our latest news, projects, and insights, follow us on social media platforms like Twitter and LinkedIn. Additionally, you can subscribe to our newsletter on our website to receive regular updates directly in your inbox."
  }
];

export default Faq;