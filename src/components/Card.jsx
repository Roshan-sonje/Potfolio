import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const card = [
  {
    img: "/src/assets/card-1.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    btn_link: "",
  },
  {
    img: "/src/assets/card-1.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    btn_link: "",
  },
  {
    img: "/src/assets/card-1.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    btn_link: "",
  },
  {
    img: "/src/assets/card-1.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    btn_link: "",
  },
];
const Card = () => {
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
    <section  id='projects'>
        <div className="flex flex-col min-h-screen items-center justify-center bg-gray-500 py-5">
        <h1 className='text-3xl font-[600] py-4 md:text-4xl md:font-[500] text-gray-200'>Projects</h1>
      <div ref={ref} className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {card.map((items,i) => (
          <div  key={i}>
            <motion.div 
            variants={{
              hidden: { opacity: 0, x: 25 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={items.img}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  {items.title}
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {items.desc}
                </p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  See More
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Card;
