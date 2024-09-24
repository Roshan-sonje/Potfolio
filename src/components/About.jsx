import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const about = [
  { first: "Name", second: "Roshan Sonje" },
  { first: "Date of birth", second: "11 April 2003" },
  { first: "Address", second: "Pimpalgaon Baswant,Nashik" },
  { first: "Zip code", second: "422209" },
  { first: "Email", second: "roshansonje1@gmail.com" },
  { first: "Phone", second: "+91-8308409076" },
];

const hob = [
  { logo: "/src/assets/music.svg", title: "Music" },
  { logo: "/src/assets/code.svg", title: "Code" },
  { logo: "/src/assets/movie.svg", title: "Movie" },
  { logo: "/src/assets/cricket.svg", title: "Sports" },
];
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  // useGSAP(() => {
  //   gsap.from(".left", {
  //     x: -200,
  //     duration: 0.5,
  //   });
  //   gsap.from(".right", {
  //     x: 200,
  //     duration: 0.7,
  //     opacity: 0,
  //   });
  // });
  return (
    <section  id="about">
      <div ref={ref} className="flex-col  px-3 md:mb-4 mt-9 ml-8  md:h-[90vh] pr-9 flex md:flex-row justify-center items-center">
        <motion.div
        variants={{
          hidden: { opacity: 0, x: -25 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        >
        <img
          src="/src/assets/about-1.jpg"
          alt=""
          className="left hidden md:block bg-center md:h-[35rem]"
        />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 25 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className=" flex flex-col md:w-[40%] py-9 md:pl-9"
        >
          <p className="text-sm font-[700] pt-7 pl-1 text-center">My Intro</p>
          <h1 className="text-3xl font-[700] pt-3 text-center">About Me</h1>
          <p className="py-7 text-gray-500">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <div className="">
            {about.map((item) => (
              <ul key={item.first} className="mt-4 px-2">
                <li className="flex">
                  <div className="font-[600] w-[120px] whitespace-nowrap">
                    {item.first}:
                  </div>
                  <div className="font-[600] text-wrap text-gray-500 w-[200px]">
                    {item.second}
                  </div>
                </li>
              </ul>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {hob.map((item) => (
              <div
                key={item.title}
                className="flex items-center flex-wrap gap-2"
              >
                <img
                  src={item.logo}
                  alt=""
                  className="border border-black  px-2 py-2 rounded-md"
                />
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
