import HowItWorks from "@/components/HomePage/HowItWorks/HowItWoks";
import Navigation from "@/components/HomePage/Nav/Navigation";
import MadeContainer from "@/UI/container/Container";

import { useEffect, useRef, useState } from "react";
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
      <Navigation
        className={`${
          !isVisible
            ? "fixed bg-[#7eb599] duration-300 ease-in-out transition-all"
            : "absolute"
        }`}
      />
      <div ref={heroRef}>
        <Hero />
      </div>
      <MadeContainer className="max-w-7xl mt-28">
        <HowItWorks />
      </MadeContainer>
    </div>
  );
};

export default Frontpage;
