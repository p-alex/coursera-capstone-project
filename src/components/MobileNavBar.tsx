import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import FocusTrap from "./FocusTrap";
import useDisableScroll from "../hooks/useDisableScroll";

interface Props {
  handleToggleMobileNav: () => void;
}

const MobileNavBar = ({ handleToggleMobileNav }: Props) => {
  const firstFocusableElement = useRef<HTMLButtonElement>(null);
  const lastFocusableElement = useRef<HTMLAnchorElement>(null);
  useDisableScroll();

  useEffect(() => {
    const firstLink = document.getElementById(
      "first-focusable-link"
    ) as HTMLAnchorElement;
    firstLink.focus();
    return () => {
      const prevFocusableElement = document.getElementById(
        "hamburger"
      ) as HTMLButtonElement;
      prevFocusableElement?.focus();
    };
  }, []);

  return (
    <>
      <div
        className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 animate-fadeIn z-40"
        onClick={handleToggleMobileNav}
      ></div>
      <div className="md:hidden fixed top-0 right-0 w-[70%] h-full z-50 bg-white animate-fromRight py-4 px-2 flex flex-col items-end">
        <FocusTrap element={lastFocusableElement} />
        <button
          onClick={handleToggleMobileNav}
          ref={firstFocusableElement}
          className="p-2 mb-12"
        >
          <AiOutlineClose className="block w-[30px] h-[30px]" />
        </button>
        <ul className="flex flex-col gap-2 font-semibold w-full text-xl overflow-y-scroll hideScrollBar">
          <li>
            <Link
              to="/"
              className="block py-2 px-4 hover:underline"
              id={"first-focusable-link"}
              onClick={handleToggleMobileNav}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block py-2 px-4 hover:underline"
              onClick={handleToggleMobileNav}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block py-2 px-4 hover:underline"
              onClick={handleToggleMobileNav}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block py-2 px-4 hover:underline"
              onClick={handleToggleMobileNav}
            >
              Reservations
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block py-2 px-4 hover:underline"
              onClick={handleToggleMobileNav}
            >
              Order Online
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block py-2 px-4 hover:underline"
              ref={lastFocusableElement}
              onClick={handleToggleMobileNav}
            >
              Login
            </Link>
          </li>
        </ul>
        <FocusTrap element={firstFocusableElement} />
      </div>
    </>
  );
};

export default MobileNavBar;
