import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

import codingAnimation from "../public/animations/coding.json";
import skillsAnimation from "../public/animations/skills.json";

const benefitOne = {
  title: "Highlights",
  desc: "Discover the transformative elements that set Firewave apart, propelling your projects into a realm of unparalleled innovation.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Cutting-Edge Frameworks, Unleashed",
      desc: "Dive into the future with Firewave as we master the latest tools like NextJS 13.4+ and d3, crafting dynamic interfaces that mesmerize and captivate user experiences.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "AI-Powered Progress, Today",
      desc: "Unleash the power of GPT-4 function call APIs and Langchain agents, infusing artificial intelligence into your projects, propelling your solutions into the forefront of innovation.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Operational Efficiency Redefined",
      desc: "Witness operational time slashed by an astonishing 80% through our program rebuilds, ensuring that your projects achieve peak performance while optimizing resources.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
  animation: codingAnimation,
};

const benefitTwo = {
  title: "Skills that Make a Difference",
  desc: "In a landscape where success demands more than just ideas, a proficient team is your greatest asset. At Firewave, we recognize the pivotal role of expertise. With us, you're not just envisioning success; you're ensuring it through unparalleled proficiency.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Effective Communicators",
      desc: "Our team members excel not just in code but also in conveying complex technical ideas with clarity. Experience how our skilled professionals bridge the communication gap, ensuring seamless collaboration and project success.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Innovative Problem Solvers",
      desc: "With a knack for hands-on solution finding, our team thrives in tackling intricate challenges. Witness their creativity in action as they bring fresh perspectives and innovative approaches to every project they engage with.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Proven Impact, Exceptional Expertise",
      desc: "Harness the capabilities of engineers handpicked from top universities and seasoned with diverse industry backgrounds. Their contributions have consistently amplified teams and projects, elevating outcomes with a wealth of technical proficiency and innovative thinking.",
      icon: <SunIcon />,
    },
  ],
  animation: skillsAnimation,
};


export {benefitOne, benefitTwo};
