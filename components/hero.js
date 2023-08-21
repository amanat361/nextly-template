import Container from "./container";
import Lottie from "lottie-react";
import pclottie from "../public/animations/pclottie.json";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Welcome to <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">Firewave</span>
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              We're here to turn your boldest ideas into reality through our expertise in full stack development. From crafting captivating data visualizations to harnessing the power of React, and seamlessly integrating with dynamic data warehousing solutions like Firebase, we pave the way for your success in the digital landscape.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-rose-600 rounded-md ">
                See our Projects
              </a>
              <a
                href="https://github.com/web3templates/nextly-template/"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span> View on Github</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Lottie animationData={pclottie} loop={true}/>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Working with the <span className="text-rose-600">leading</span>{" "}
            technologies of today
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 mt-10 md:justify-around">
            <ReactLogo />
            <NextJSLogo />
            <SupabaseLogo />
            <OpenAILogo />
            <D3Logo />
            <PythonLogo />
            <FirebaseLogo />
          </div>
        </div>
      </Container>
    </>
  );
}

function ReactLogo() {
  return (
    <img src="/brands/React-icon.svg" alt="React" width="50" height="50" />
  );
}

function NextJSLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 256 256"
      version="1.1"
      className="fill-current text-black dark:text-white"
      >
      <g>
        <path
          d="M119.62,0.07C119.07,0.12,117.31,0.29,115.74,0.42C79.38,3.70,45.32,23.31,23.75,53.46C11.74,70.23,4.05,89.24,1.15,109.38C0.13,116.42,0,118.49,0,128.03C0,137.56,0.13,139.63,1.15,146.67C8.11,194.73,42.32,235.11,88.71,250.08C97.02,252.75,105.78,254.58,115.74,255.68C119.62,256.11,136.38,256.11,140.26,255.68C157.45,253.78,172.02,249.53,186.38,242.19C188.58,241.07,189.01,240.77,188.71,240.52C188.51,240.37,179.12,227.78,167.86,212.57L147.39,184.92L121.74,146.97C107.63,126.10,96.02,109.03,95.92,109.03C95.82,109.01,95.72,125.87,95.67,146.47C95.59,182.52,95.57,183.97,95.12,184.82C94.47,186.05,93.97,186.55,92.92,187.10C92.11,187.50,91.41,187.57,87.64,187.57L83.31,187.57L82.16,186.85C81.40,186.37,80.85,185.75,80.48,185.02L79.95,183.90L80.00,133.73L80.08,83.54L80.85,82.56C81.25,82.04,82.11,81.36,82.71,81.04C83.73,80.54,84.13,80.49,88.46,80.49C93.57,80.49,94.42,80.69,95.74,82.14C96.12,82.54,110.01,103.45,126.62,128.65C143.24,153.85,165.96,188.25,177.12,205.14L197.39,235.84L198.42,235.16C207.50,229.26,217.11,220.85,224.72,212.09C240.91,193.50,251.35,170.84,254.85,146.67C255.87,139.63,256.00,137.56,256.00,128.03C256.00,118.49,255.87,116.42,254.85,109.38C247.89,61.32,213.68,20.94,167.29,5.97C159.11,3.32,150.40,1.50,140.64,0.39C138.23,0.14,121.69,-0.13,119.62,0.07ZM172.02,77.48C173.22,78.08,174.20,79.23,174.55,80.44C174.75,81.09,174.80,94.99,174.75,126.35L174.67,171.34L166.74,159.18L158.78,147.02L158.78,114.31C158.78,93.17,158.88,81.29,159.03,80.71C159.43,79.31,160.31,78.21,161.51,77.56C162.53,77.03,162.91,76.98,166.84,76.98C170.54,76.98,171.19,77.03,172.02,77.48Z"
        />
      </g>
    </svg>
  );
}

function SupabaseLogo() {
  return (
    <img src="/brands/supabase-logo-icon.png" alt="Supabase" width="50" height="50" />
  );
}

function OpenAILogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 320 320" className="fill-current text-black dark:text-white">
      <path
        d="M297.06,130.97c7.26-21.79,4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13,22.48-76.91,55.82-22.51,4.61-41.94,18.7-53.31,38.67-17.59,30.32-13.58,68.54,9.92,94.54-7.26,21.79-4.76,45.66,6.85,65.48,17.46,30.4,52.56,46.04,86.84,38.68,15.24,17.18,37.16,26.95,60.13,26.8,35.06.09,66.16-22.49,76.94-55.86,22.51-4.61,41.94-18.7,53.31-38.67,17.57-30.32,13.55-68.51-9.94-94.51zm-120.28,168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26,1.34-.73,1.89-1.07l63.72-36.8c3.26-1.85,5.26-5.32,5.24-9.07v-89.83l26.93,15.55c.29.14.48.42.52.74v74.39c-.04,33.08-26.83,59.9-59.91,59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28,1.3.79,1.89,1.13l63.72,36.8c3.23,1.89,7.23,1.89,10.47,0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16,18.05-21.46,31.21-26.29,0,.55-.03,1.52-.03,2.2v73.61c-.02,3.74,1.98,7.21,5.23,9.06l77.79,44.91-26.93,15.55c-.27,.18-.61,.21-.91,.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26,51.49-77.79-44.92,26.93-15.54c.27,.18,.61,.21,.91,.08l64.42,37.19c28.68,16.57,38.51,53.26,21.94,81.94-7.01,12.14-18.05,21.44-31.2,26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47,0l-77.79,44.92v-31.1c-.02-.32,.13-.63,.38-.83l64.41-37.16c28.69-16.55,65.37-6.7,81.91,22,6.99,12.12,9.52,26.31,7.15,40.1zm-168.51,55.43-26.94-15.55c-.29-.14,-.48-.42,-.52-.74v-74.39c.02-33.12,26.89-59.96,60.01-59.94,14.01,0,27.57,4.92,38.34,13.88,-.49,.26,-1.33,.73,-1.89,1.07l-63.72,36.8c-3.26,1.85,-5.26,5.31,-5.24,9.06l-.04,89.79zm14.63-31.54,34.65-20.01,34.65,20v40.01l-34.65,20,-34.65,-20z"
      />
    </svg>
  );
}

function D3Logo() {
  return (
    <img src="/brands/d3.svg" alt="D3" width="50" height="50" />
  );
}

function PythonLogo() {
  return (
    <img src="/brands/python-logo-only.svg" alt="Python" width="50" height="50" />
  );
}

function FirebaseLogo() {
  return (
    <img src="/brands/firebase.svg" alt="Firebase" width="50" height="50" />
  );
}


export default Hero;