import { toggleLoginPoppup } from "@/components/redux/features/mainSlicer";
import { useRouter } from "next/router";
import {useDispatch,useSelector} from 'react-redux'


const Menus = (props) => {
  const classes = "list-none gap-14 flex items-center z-50 " + props.className;
  const router = useRouter();
  const dispatch = useDispatch();
  const main = useSelector((state)=>state.main);
  
  

  const handleLoginPressed = () => {
    
    dispatch(toggleLoginPoppup());

    if (typeof window != 'undefined' && window.document) {
      main.loginPopup ? window.document.body.style.overflow = 'hidden': window.document.body.style.overflow = 'unset';
      console.log(document.body.style)
    }
    
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
