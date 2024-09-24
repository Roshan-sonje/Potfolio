import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <section ref={ref} id="home">
      <div className='bg-[url("/src/assets/bg.jpg")] bg-cover bg-center flex flex-col gap-4 items-center justify-center h-screen flex-wrap'>

        <motion.div
        variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
        <div className="flex flex-col gap-3">
          <p className="left text-xl font-[500] text-center">Hello! This is,</p>
          <h1 className="right text-4xl font-[600] text-center">
            Roshan Sonje
          </h1>
          <h1 className="left text-5xl font-[600] text-center text-blue-700">
            MERN Stack Developer
          </h1>
        </div>

        <div className="right flex gap-3 mt-3 justify-center">
          <button className="bg-blue-600 py-2 px-3 rounded-3xl text-white font-[700] hover:bg-opacity-90">
            Hire me
          </button>
          <button className="border-2 border-black  py-2 px-3 rounded-3xl hover:bg-black hover:text-white ">
            Download CV
          </button>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
