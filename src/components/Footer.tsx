import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsPinterest } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-[#D9D9D9] text-xl">
      <div className="container grid grid-col-1 text-center sm:text-left sm:grid-cols-4 gap-12">
        <img
          src="/images/big-logo.webp"
          width={145}
          height={244}
          alt=""
          className="mx-auto sm:m-0"
        />
        <div className="flex flex-col gap-2">
          <p className="font-bold text-[#495E57]font-bold text-[#495E57]">
            Doormat Navigation
          </p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Menu</Link>
            </li>
            <li>
              <Link to="/">Reservation</Link>
            </li>
            <li>
              <Link to="/">Order Online</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold text-[#495E57]font-bold text-[#495E57]">
            Contact
          </p>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 items-center sm:items-start">
          <p className="font-bold text-[#495E57]font-bold text-[#495E57]">
            Social Media Links
          </p>
          <ul className="flex">
            <li>
              <Link
                to="/"
                className="block p-2 hover:opacity-75 transition-opacity"
              >
                <BsInstagram className="w-[30px] h-[30px]" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block p-2 hover:opacity-75 transition-opacity"
              >
                <BsFacebook className="w-[30px] h-[30px]" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block p-2 hover:opacity-75 transition-opacity"
              >
                <BsPinterest className="w-[30px] h-[30px]" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
