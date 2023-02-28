import { toggleLoginPoppup , setBurgerMenuIsOpen } from "@/components/redux/features/mainSlicer";
import { useRouter } from "next/router";
import {useDispatch} from 'react-redux'


const Menus = (props) => {
  const classes = "list-none gap-14 flex items-center z-50 " + props.className;
  const router = useRouter();
  const dispatch = useDispatch();
  
  

  const handleLoginPressed = () => {
    document.body.style.overflowY = 'hidden'
    dispatch(toggleLoginPoppup(true));
    dispatch(setBurgerMenuIsOpen(false))


  }  

  return (
    <div>
      
    <ul className={classes}>
      <li className="link text-lg">
        <a>How it Works</a>
      </li>
      <li className="link text-lg">
        <a>Features</a>
      </li>
      <li className="link text-lg">
        <a>About Us</a>
      </li>
      <li
        onClick={() => router.push("/donate/donate")}
        className="link text-lg"
      >
        <a>Donate Us</a>
      </li>
      <li>
        <button
          className="button text-lg"
          onClick={handleLoginPressed}
        >
          Login
        </button>
      </li>
    </ul>

    
    </div>
    );
};

export default Menus;
