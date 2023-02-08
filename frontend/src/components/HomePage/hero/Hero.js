import MadeContainer from "@/UI/container/Container";
import bg from "./PictureHero.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${bg.src})`,
      }}
      className="bg-fixed bg-center bg-no-repeat bg-cover bg-hero-pattern"
    >
      <MadeContainer className="max-w-6xl h-[100vh] flex flex-col justify-center lg:max-w-4xl md:max-w-2xl sm:max-w-sm md:text-lg sm:text-[0.8rem] xs:max-w-[18rem]">
        <div className="text-5xl mb-3 leading-[4rem] tracking-tighter font-semibold md:text-4xl sm:text-2xl">
          AgriLink : A Marketplace for Fresh, Local Produce
        </div>
        <p className="mt-3 text-base tracking-widest leading-6 text-justify md:tracking-normal sm:tracking-tight sm:leading-6">
          "AgriLink" is an online marketplace that connects farmers with buyers,
          offering a wide selection of fresh, locally grown produce through a
          simple and efficient ordering process, while supporting sustainable
          agriculture and local communities.
        </p>
        <div className="my-10 flex gap-4 text-2xl md:text-lg sm:text-base ">
          <button className="button  ">Get Started</button>
          <button className="button bg-[#61876E] ">Learn More &darr;</button>
        </div>

        {/* <div class="delivered-meals">
          <div class="delivered-imgs">
            <img src="img/customers/customer-1.jpg" alt="Customer Photo" />
            <img src="img/customers/customer-2.jpg" alt="Customer Photo" />
            <img src="img/customers/customer-3.jpg" alt="Customer Photo" />
            <img src="img/customers/customer-4.jpg" alt="Customer Photo" />
            <img src="img/customers/customer-5.jpg" alt="Customer Photo" />
            <img src="img/customers/customer-6.jpg" alt="Customer Photo" />
          </div>
          <p class="delivered-text">
            Already connecting thounds of farmers and buyers
          </p>
        </div> */}

        <div className="mt-2"></div>
      </MadeContainer>
    </div>
  );
};

export default Hero;
