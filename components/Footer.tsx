import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      {/* background grid */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Contact me <span className="text-purple">here</span> and
          let us connect!
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today!
        </p>

        {/* "Let's Get in Touch" Button */}
        <a href="mailto:anusha.sani55@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

        {/* "Download CV" Button */}
        <a
          href="/Resume.pdf" // Provide the correct path to your resume file
          download="Anusha_Sani_Resume.pdf" // This will set the download filename
          className="mt-5" // Add margin-top to create spacing between buttons
        >
          <MagicButton
            title="Download CV"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light"></p>

        <div className="flex items-center md:gap-3 gap-6">
          {/* Social Media Icons */}
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
