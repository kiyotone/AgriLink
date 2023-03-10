import MadeContainer from "@/UI/container/Container";
import bg from "../image/PictureHero.jpg";
import Image from "next/image";
import arrayImage from "../image/customers/imageHelper";

const Hero = () => {
  const customers = ["Burt", "Abdhul", "Maria", "Jhon", "Joes", "Ming"];
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${bg.src})`,
      }}
      className="bg-fixed bg-center bg-no-repeat bg-cover bg-hero-pattern  relative "
    >
      <div className="max-w-6xl mx-auto  flex flex-col py-52 lg:max-w-4xl text-base sm:max-w-xl xs:max-w-xl xss:max-w-lg">
        <div className="text-5xl mb-3 leading-[4rem] tracking-tighter font-semibold">
          AgriLink : A Marketplace for Fresh, Local Produce
        </div>
        <p className="mt-3 tracking-widest leading-6 text-justify text-lg">
          "AgriLink" is an online marketplace that connects farmers with buyers,
          offering a wide selection of fresh, locally grown produce through a
          simple and efficient ordering process, while supporting sustainable
          agriculture and local communities.
        </p>
        <div className="my-10 flex gap-4 text-2xl  ">
          <button className="button  ">Get Started</button>
          <button className="button bg-[#61876E] ">Learn More &darr;</button>
        </div>

        <div className="flex flex-col gap-5 mt-10 ">
          <p className="text-lg">
            Already connecting thounds of farmers and buyers.
          </p>
          <div className="flex gap-[-10px]">
            {customers.map((content, i) => {
              return (
                <Image
                  className="rounded-full w-[35px] h-[35px] xs:w-[30px] xs:h-[30px]"
                  src={arrayImage[content]}
                  alt={`Picture of the ${content}`}
                  key={Math.random()}
                />
              );
            })}
          </div>

          <a className="link text-lg">
            See What they have to say about us &darr;
          </a>
        </div>

        <div className="mt-2"></div>
      </div>
    </div>
  );
};

export default Hero;
