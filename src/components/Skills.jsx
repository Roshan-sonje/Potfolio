import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const card = [
  {
    logo: "/src/img/html.png",
    title: "Html",
    desc: "A small river named Duden flows by their place and supplies.",
    color:"bg-gradient-to-r from-slate-100 to-Slate-200"
  },
  {
    logo: "/src/img/css.png",
    title: "Css",
    desc: "A small river named Duden flows by their place and supplies.",
    color:"bg-gradient-to-r from-slate-100 to-slate-200"
  },
  {
    logo: "/src/img/js.png",
    title: "Javascript",
    desc: "A small river named Duden flows by their place and supplies.",
    color:"bg-gradient-to-r from-slate-100 to-orange-100"
  },
];

const card1 = [
  {
    logo: "/src/img/java.png",
    title: "Java",
    desc: "A small river named Duden flows by their place and supplies.",
    color:"bg-gradient-to-r from-slate-100 to-orange-100"
  },
  {
    logo: "/src/img/Cpp.png",
    title: "Cpp",
    desc: "A small river named Duden flows by their place and supplies.",
    color:"bg-gradient-to-r from-slate-100 to-orange-100"
  },
  {
    logo: "/src/img/python.png",
    title: "Python",
    desc: "A small river named Duden flows by their place and supplies.",
    color:"bg-gradient-to-r from-slate-100 to-orange-100"
  },
  {
    logo: "/src/img/tailwindcss.png",
    title: "Tailwindcss",
    desc: "A small river named Duden flows by their place and supplies.",
    color:"bg-gradient-to-r from-slate-100 to-orange-100"
  },
  {
    logo: "/src/img/react.png",
    title: "React",
    desc: "A small river named Duden flows by their place and supplies.",
    color:"bg-gradient-to-r from-slate-100 to-orange-100"
  },
  {
    logo: "/src/img/node.png",
    title: "Node Js",
    desc: "A small river named Duden flows by their place and supplies.",
    color:"bg-gradient-to-r from-slate-100 to-orange-100"
  },
  {
    logo: "/src/img/mongodb.png",
    title: "Mongodb",
    desc: "A small river named Duden flows by their place and supplies.",
    color:"bg-gradient-to-r from-slate-100 to-orange-100"
  },
  {
    logo: "/src/img/nextjs.png",
    title: "Next Js",
    desc: "A small river named Duden flows by their place and supplies.",
    color:"bg-gradient-to-r from-slate-100 to-orange-100"
  },
  {
    logo: "/src/img/bootstrap.png",
    title: "Bootstrap",
    desc: "A small river named Duden flows by their place and supplies.",
    color:"bg-gradient-to-r from-slate-100 to-orange-100"
  },
];
const Skills = () => {
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
  const [show, setShow] = useState(false);
  return (
    <section  id="skills" className="">
        <h1 className='text-3xl font-[600] py-4 md:text-4xl md:font-[500] text-center my-3'>Skills</h1>
      <div ref={ref} className="flex flex-wrap md:flex-row justify-center ">
        {card.map((items) => (
          <motion.div
          variants={{
            hidden: { opacity: 0, x: -25 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          key={items.title} className="card mb-9 md:max-w-[400px]">
            <div className={`group relative shadow-[0_7px_29px_0_rgba(100,100,111,0.4)] mx-9 px-4 py-5 pt-14 pr-9  hover:bg-gradient-to-r from-slate-100 to-slate-100 rounded-lg hover:scale-x-105`}>
              <h1 className="text-xl font-[600] ">{items.title}</h1>
              <p className="mt-3">{items.desc}</p>
              <div className="absolute top-[-35px] rounded-lg group-hover:translate-x-5 transition opacity-0 duration-300 group-hover:opacity-100">
                <img src={items.logo} alt="" className="size-20" />
              </div>
            </div>
          </motion.div>
        ))}

        
        <div className={show?`flex flex-wrap justify-center`:`hidden`}>
            {card1.map((items) => (
          <motion.div
          variants={{
            hidden: { opacity: 0, x: -25 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          key={items.title} className="card mb-9 md:max-w-[400px]">
            <div className="group relative shadow-[0_7px_29px_0_rgba(100,100,111,0.4)] mx-9 px-4 py-5 pt-14 pr-9  hover:bg-gradient-to-r from-slate-100 to-slate-100 transition-opacity rounded-lg hover:scale-x-105">
              <h1 className="text-xl font-[600] ">{items.title}</h1>
              <p className="mt-3">{items.desc}</p>
              <div className="absolute top-[-35px]  rounded-lg p-2 group-hover:translate-x-5 transition opacity-0 duration-300 group-hover:opacity-100 ">
                <img src={items.logo} alt="" className="size-20 " />
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>

      <div className="flex justify-center mb-5">
        <button onClick={()=> setShow(!show)} className="border-2 border-gray-300 py-1 px-7 rounded-3xl font-[600]">
          More
        </button>
      </div>
    </section>
  );
};

export default Skills;

// box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
