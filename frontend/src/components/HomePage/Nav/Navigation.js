import { useState } from "react";

const Navigation = (props) => {
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);
  const classes =
    `w-full flex justify-between transition-all ease-in-out md:justify-start p-6 items-center h-[90px] ${
      burgerMenuIsOpen
        ? "bg-gradient-to-r from-[rgb(60,98,85,0.6)] to-[rgb(97,135,110,0.9)] "
        : ""
    }` + props.className;

  const menuBurgerClick = () => {
    if (burgerMenuIsOpen === false) setBurgerMenuIsOpen(true);
    else setBurgerMenuIsOpen(false);
  };

  return (
    <div className={classes}>
      <div className="md:text-center md:w-[95%] ">AgriLink</div>

      <div className="hidden md:block">
        <div onClick={menuBurgerClick}>
          <div
            className={`relative top-0 h-1 w-8 rounded-full bg-zinc-200 transition-all ${
              burgerMenuIsOpen ? "top-2 rotate-45" : ""
            }`}
          ></div>
          <div
            className={`mt-1 h-1 w-8 rounded-full bg-zinc-200 transition-all ${
              burgerMenuIsOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`relative top-0 mt-1 h-1 w-8 rounded-full bg-zinc-200 transition-all ${
              burgerMenuIsOpen ? "-top-2 -rotate-45" : ""
            } `}
          ></div>
        </div>
        <div
          className={`absolute top-[90px] left-0  w-full bg-gradient-to-r  from-[rgb(60,98,85,0.7)] to-[rgb(97,135,110,0.95)] h-[75vh] ${
            burgerMenuIsOpen ? "block" : "hidden"
          }`}
        >
          <ul className="list-none gap-14 flex items-center flex-col mt-16">
            <li className="link text-lg">How it Works</li>
            <li className="link text-lg"> Features</li>
            <li className="link text-lg">About Us</li>
            <li className="link text-lg">Donate Us</li>
            <li>
              <button className="button text-lg">Login</button>
            </li>
          </ul>
        </div>
      </div>

      <ul className="list-none gap-14 flex items-center lg:gap-8 md:hidden">
        <li className="link text-lg">How it Works</li>
        <li className="link text-lg"> Features</li>
        <li className="link text-lg">About Us</li>
        <li className="link text-lg">Donate Us</li>
        <li>
          <button className="button text-lg">Login</button>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
