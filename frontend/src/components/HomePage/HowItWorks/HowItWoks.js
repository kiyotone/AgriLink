const HowItWorks = () => {
  return (
    <div className="p-3 rounded-xl mb-24">
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

      <div className="mt-12 grid grid-cols-3">
        <div className="col-start-1 col-end-3"></div>
        <div>
          <span className="text-5xl font-bold">02</span>
          <p className="mt-5">
            Buyers search the platform for the produce they need, using search
            filters such as product type, location, and price range.
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-3">
        <div>
          <span className="text-5xl font-bold">03</span>
          <p className="mt-5">
            Buyers place orders directly with the farmers, who then prepare and
            deliver the produce as agreed upon.
          </p>
        </div>
        <div className="col-start-2 col-end-4"></div>
      </div>

      <div className="mt-12 grid grid-cols-3">
        <div className="col-start-1 col-end-3"></div>
        <div>
          <span className="text-5xl font-bold">04</span>
          <p className="mt-5">
            The platform handles payment processing, ensuring that farmers are
            paid promptly and securely.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
