import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const info = [
  {
    "logo":"/src/assets/map.svg",
    "title":"Address:",
    "desc":"Pimpalgaon Baswant, Nashik"
  },
  {
    "logo":"/src/assets/phone.svg",
    "title":"Phone:",
    "desc":"+91 8308409076"
  },
  {
    "logo":"/src/assets/plane.svg",
    "title":"Email:",
    "desc":"roshansonje1@gmail.com"
  },
  {
    "logo":"/src/assets/earth.svg",
    "title":"Website",
    "desc":"Roshansonje.com"
  }
]

const Contact = () => {
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
  return (
    <section  id='contact' className='flex flex-col items-center w-full pb-9'>
      <h1 className='text-2xl font-[500] py-4 md:text-4xl md:font-[500]'>Contact Me</h1>
      <div ref={ref} className='w-full px-3 md:flex md:justify-center'>
        <motion.div
        variants={{
          hidden: { opacity: 0, x: -25 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }} 
        className="form bg-gray-100 p-3 py-8 md:w-[50%]">
          <form action="" className='flex flex-col gap-3 md:p-5'>
            <div className='flex flex-col md:flex-row gap-3'>
              <input type="text" placeholder='Your Name' className='border border-black p-3 md:w-full md:py-5'/>
              <input type="text" placeholder='Your Email' className='border border-black p-3 md:w-full md:py-5'/>
            </div>
            <input type="text" placeholder='Subject' className='border border-black p-3 md:py-5'/>
            <textarea rows={4} placeholder='Message' className='border border-black p-3 md:py-5'></textarea>
            <button className='bg-gray-500 py-2 rounded-lg text-white hover:bg-gray-400 md:w-fit md:px-5 md:py-3'>Send Message</button>
          </form>
        </motion.div>

        <motion.div
        variants={{
          hidden: { opacity: 0, x: 25 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="info flex flex-col px-3 gap-4 md:gap-12 py-5 md:ml-5 md:justify-center">
          {info.map((items) => (
            <div key={items.title} className='flex gap-3'>
              <div className='bg-gray-500 flex md:items-center md:p-2 px-2  rounded-lg'><img src={items.logo} alt="" className='rounded-lg fill-white md:size-9 invert hover:scale-110'/></div>
              <div>
                <h1 className='font-[600] md:text-xl'>{items.title}</h1>
                <p className='text-sm text-gray-500 md:text-[15px]'>{items.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact