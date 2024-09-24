import React, { useEffect, useState,useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const GoToTop = () => {
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
    const [isVisible, setIsVisible] = useState(false)
    
    const goToBtn = () => {
        window.scrollTo({top:0,left:0,behaviour:"smooth"});
    };

    const listenToScroll = () => {
        let heightToHidden = 20;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(winScroll > heightToHidden) {
            setIsVisible(true);
        }else{
            setIsVisible(false)
        }
    };

    useEffect(()=>{
        window.addEventListener("scroll",listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    },[]);
  return (
    <>
      {isVisible && <motion.span ref={ref}
      variants={{
        hidden: { opacity: 0, x: -25 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      drag="x" onClick={goToBtn} href="#home" className="fixed right-11 bottom-11 py-2 px-2 backdrop-invert bg-blue-500 rounded-lg">
        <img src="/src/assets/up.svg" alt="" className="invert ]" />
      </motion.span>}
    </>
  );
};

export default GoToTop;
