import Menus from "./Menus";
import Login from "@/pages/auth/login";
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import { setBurgerMenuIsOpen } from "@/components/redux/features/mainSlicer";


const Navigation = (props) => {

  const main = useSelector((state)=>state.main);
  const dispatch = useDispatch();
  
  
  const classes =
    `w-full flex justify-between transition-all ease-in-out md:justify-start p-6 items-center h-[90px] z-50 ${
      main.burgerMenuIsOpen
        ? "md:bg-gradient-to-r md:to-[rgb(60,98,85,0.95)] md:from-[rgba(80,116,93,0.9)] shadow-lg"
        : ""
    }` + props.className;

  const menuBurgerClick = () => {
    main.burgerMenuIsOpen ? dispatch(setBurgerMenuIsOpen(false)) : dispatch(setBurgerMenuIsOpen(true))
    console.log(main)
    console.log(main.loginPopup)
  };


  return (
    
    <div className={classes}>
      {main.loginPopup && <Login />}
      <div className="md:text-center md:w-[95%] ">AgriLink</div>

      <div className="hidden md:block">
        <div onClick={menuBurgerClick}>
          <div
            className={`relative top-0 h-1 w-8 rounded-full bg-zinc-200 transition-all ${
              main.burgerMenuIsOpen ? "top-2 rotate-45" : ""
            }`}
          ></div>
          <div
            className={`mt-1 h-1 w-8 rounded-full bg-zinc-200 transition-all ${
              main.burgerMenuIsOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`relative top-0 mt-1 h-1 w-8 rounded-full bg-zinc-200 transition-all ${
              main.burgerMenuIsOpen ? "-top-2 -rotate-45" : ""
            } `}
          ></div>
        </div>
        <div
          className={`absolute top-[90px] left-0  w-full bg-gradient-to-r  to-[rgb(60,98,85,0.95)] from-[rgba(80,116,93,0.9)] h-[75vh] sm:h-[60vh] xs:h-[50vh] ${
            main.burgerMenuIsOpen ? "block" : "hidden"
          }`}
        >
          <Menus className="flex-col mt-14" />
        </div>
      </div>

      <Menus className="lg:gap-8 md:hidden" />
    </div>
  );
};

export default Navigation;
