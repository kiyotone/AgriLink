const Navigation = () => {
  return (
    <>
      <div className="w-full flex justify-between p-6 items-center h-[90px] fixed">
        <div className="ml-20">AgriLink</div>

        <ul className="list-none flex gap-16 items-center">
          <li className="link text-lg">How it Works</li>
          <li className="link text-lg"> Features</li>
          <li className="link text-lg">About Us</li>
          <li className="link text-lg">Donate Us</li>
          <li>
            <button className="button text-lg">Login</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
