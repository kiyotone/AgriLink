import MadeContainer from "@/UI/container/Container";
import bg from "./Hero.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${bg.src})`,
      }}
      className="bg-fixed bg-center bg-no-repeat bg-cover bg-hero-pattern"
    >
      <MadeContainer className="max-w-5xl text-center">
        <div className=" pt-52 pb-48">
          <h2 className="text-5xl mb-3 leading-[4rem] tracking-tighter font-semibold">
            AgriLink : A Marketplace for Fresh, Local Produce
          </h2>
          <p className="text-sm tracking-widest leading-6 text-justify">
            "AgriLink" is an online marketplace that connects farmers with
            buyers, offering a wide selection of fresh, locally grown produce
            through a simple and efficient ordering process, while supporting
            sustainable agriculture and local communities.
          </p>
          <div className="py-6 link inline-block">Learn More &#8594;</div>
          <div className="py-6">
            50,000+ user have used it, Why not try it for yourself
          </div>
          <div>
            <button className="button text-2xl">Get Started</button>
          </div>
        </div>
      </MadeContainer>
    </div>
  );
};

export default Hero;
