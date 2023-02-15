import { useRouter } from "next/router";

const Menus = (props) => {
  const classes = "list-none gap-14 flex items-center z-50 " + props.className;
  const router = useRouter();

  return (
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
          onClick={() => router.push("/auth/login")}
        >
          Login
        </button>
      </li>
    </ul>
  );
};

export default Menus;
