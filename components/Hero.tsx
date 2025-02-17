import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      {/* UI: Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* UI: grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Flex Container for Image and Text */}
      <div className="flex flex-col md:flex-row justify-between items-center relative my-20 z-10 max-w-[89vw] md:max-w-[90vw] lg:max-w-[80vw] mx-auto">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-center md:items-start justify-center md:w-1/2 lg:w-2/3">
          <p className="uppercase tracking-widest text-xs text-center md:text-left text-blue-100 max-w-80">
            Anusha Sani
          </p>

          {/* UI: Text Generate Effect */}
          <TextGenerateEffect
            words="I'm a Front-End Developer"
            className="text-center md:text-left text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hello there! I&apos;m Anusha, a React.js Developer based in Seattle, WA.
          </p>

          <a href="#aboutme">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        {/* Right Side: Profile Image with Frame */}
        <div className="mt-8 md:mt-0 md:ml-8 lg:ml-16 md:w-1/2 lg:w-1/3 flex justify-center md:justify-end">
          <img
            src="./anusha2.png" // Replace with your image URL
            alt="Profile"
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-lg object-cover border-4 border-white shadow-lg" // Frame and shadow
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
