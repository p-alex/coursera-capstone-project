import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavBar from "./MobileNavBar";
const Navbar = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const handleToggleMobileNav = () => {
    setIsMobileNavActive((prevState) => !prevState);
  };
  return (
    <>
      <nav className="relative top-0 left-0 w-full h-[70px] md:h-[120px] flex items-center">
        <div className="relative flex justify-between items-center w-full max-w-[900px] mx-auto max-[940px]:mx-4 text-black">
          <Link to={"/"} aria-label="home">
            <img
              src="/images/Logo.webp"
              width="148"
              height="40"
              alt="Little Lemon Logo"
            />
          </Link>

          <ul className="hidden md:flex gap-[28px] font-semibold">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Menu
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Reservations
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Order Online
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Login
              </Link>
            </li>
          </ul>
          <button
            className="relative block md:hidden h-full p-2 right-[-8px]"
            aria-label="open navigation menu"
            onClick={handleToggleMobileNav}
            id="hamburger"
          >
            <GiHamburgerMenu className="w-[30px] h-[30px]" />
          </button>
        </div>
      </nav>
      {isMobileNavActive && (
        <MobileNavBar handleToggleMobileNav={handleToggleMobileNav} />
      )}
    </>
  );
};

export default Navbar;
