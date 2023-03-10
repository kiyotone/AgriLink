import HowItWorks from "@/components/HomePage/HowItWorks/HowItWoks";
import Navigation from "@/components/HomePage/Nav/Navigation";
import MadeContainer from "@/UI/container/Container";

import { useEffect, useRef, useState } from "react";

import Features from "./Features/features";
import Hero from "./hero/Hero";

const Frontpage = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVIsible] = useState(true);

  const callMe = (entries) => {
    const [entry] = entries;
    setIsVIsible(entry.isIntersecting);
  };

  const option = { root: null, threshold: 0, rootMargin: `-90px` };
  useEffect(() => {
    const observer = new IntersectionObserver(callMe, option);
    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, [heroRef, option]);

  return (
    <div>
      <div className="text-[#eee]">
        <Navigation
          className={`z-20 ${
            !isVisible
              ? "fixed bg-gradient-to-r  to-[rgb(60,98,85,0.95)] from-[rgba(80,116,93,0.9)] duration-300 ease-in-out transition-all"
              : "absolute"
          }`}
        />
        <div ref={heroRef}>
          <Hero />
        </div>
      </div>
      <MadeContainer className="3xl:max-w-[1440px] 2xl:max-w-7xl max-w-6xl md:max-w-3xl">
        <HowItWorks />
      </MadeContainer>
      <div className="h-[5px] w-full max-w-[90vw] mx-auto border-t-2 border-[#bdbcbc]"></div>
      <MadeContainer className="3xl:max-w-[1440px] 2xl:max-w-7xl ">
        <Features />
      </MadeContainer>
      <div className="h-[5px] w-full max-w-[90vw] mx-auto border-t-2 border-[#bdbcbc]"></div>
      <MadeContainer className="3xl:max-w-[1440px] 2xl:max-w-7xl max-w-6xl md:max-w-3xl">
      </MadeContainer>
    </div>
  );
};

export default Frontpage;
