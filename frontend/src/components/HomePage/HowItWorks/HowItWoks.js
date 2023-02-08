const HowItWorks = () => {
  return (
    <div className="bg-[#466e5c] p-3 rounded-xl ">
      <h2 className="text-base uppercase font-bold ">How it works</h2>

      <p className="mt-8 tracking-wider">
        "AgriLink: A Marketplace for Fresh, Local Produce" works by allowing
        farmers to list their produce on the platform, where it can be viewed by
        potential buyers. Buyers, such as retailers or wholesalers, can then
        browse the available produce and place orders directly with the farmers.
      </p>
      <div className="mt-12 grid grid-cols-3">
        <div>
          <span className="text-5xl font-bold">01</span>
          <p className="mt-5">
            Farmers sign up and create a profile on the platform, where they can
            list their produce and provide details such as product descriptions,
            photos, and pricing information.
          </p>
        </div>
        <div className="col-start-2 col-end-4"></div>
      </div>
    </div>
  );
};

export default HowItWorks;
