import Navigation from "@/components/HomePage/Nav/Navigation";
import Hero from "../components/HomePage/hero/Hero";

const frontpage = () => {
  return (
    <div className="">
      <div className="h-[100vh] bg-[#61876E]">
        <Navigation />
        <Hero />
      </div>
    </div>
  );
};

export default frontpage;
